import {getMessageState} from 'utils/selectors';


export const selectMessage = state => getMessageState(state);
