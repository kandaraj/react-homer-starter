import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './fuelSavingsReducer';
import dateHelper from '../utils/dateHelper';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      newMpg: '',
      tradeMpg: '',
      newPpg: '',
      tradePpg: '',
      milesDriven: '',
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
  };

  const getAppState = () => {
    return {
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
  };
  const dateModified = dateHelper.getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();
    var newState =reducer(undefined, action);
    expect(newState).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified};
    const expected = Object.assign({abc:123}, { dateModified });
    var r = reducer({abc:123}, action);
    expect(r).to.deep.equal(expected);
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };
    var r = reducer(getAppState(), action);
    expect(r.newMpg).to.equal(expectedMpg);
    expect(r.savings).to.deep.equal(expectedSavings);
  });
});
