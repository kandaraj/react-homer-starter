/**
 * Created by skandara on 29/08/2016.
 */
import * as types from '../constants/actionTypes';

export function SaveAgreement(agreement) {
    return (dispatch) => {
      return dispatch({
        type: types.SAVE_AGREEMENT,
        payload: agreement
      });
    }
}

