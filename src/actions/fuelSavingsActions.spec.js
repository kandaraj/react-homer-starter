import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './fuelSavingsActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import MockDate from 'mockdate';
import chai, { expect } from 'chai';

import dateHelper from '../utils/dateHelper';

chai.use(sinonChai);

describe('Actions', () => {
  let dateModified;
  before(() => {
    MockDate.set(new Date());
    dateModified = dateHelper.getFormattedDateTime();
  });
  after(() => MockDate.reset());

  const appState = {
    newMpg: 20,
    tradeMpg: 10,
    newPpg: 1.50,
    tradePpg: 1.50,
    milesDriven: 100,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  };

  it('should create an action to save fuel savings', () =>{
    const dispatch = sinon.spy();
    const expected = {
      type: ActionTypes.SAVE_FUEL_SAVINGS,
      dateModified,
      settings: appState
    };
    var dispatcher = ActionCreators.saveFuelSavings(appState);
    dispatcher(function(a){
      expect(a).to.deep.equal(expected);
    })
    dispatcher(dispatch);
    dispatch.should.have.been.calledWith(expected);
  })

  it('should create an action with calculate fuel savings', () => {
    var actual = ActionCreators.calculateFuelSavings(appState, 'newMpg', 123);
    expect(actual.value).to.equal(123);
    expect(actual.fieldName).to.equal('newMpg');
  })

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
    const expected = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).to.deep.equal(expected); // N otice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
