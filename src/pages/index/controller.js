import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_HOTHOUSE_REDUCER.isLoading,
  isSuccess: state => state.SELECT_HOTHOUSE_REDUCER.isSuccess,
  isFailure: state => state.SELECT_HOTHOUSE_REDUCER.isFailure,
  isData: state => state.SELECT_HOTHOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectHotHouse: () => actions.ajaxRequestSelectHotHouse()
};
