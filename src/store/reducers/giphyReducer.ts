import * as Actions from '../actions/giphyActions';
import { version } from 'process';

export interface IGiphyState {
    data?:[];
    meta?:[];
}

export const InitalGiphytState: IGiphyState = {
    data:[],
    meta:[],
};

export const GiphyReducer = (state:any, action:any) => {
    switch (action.type) {
        case Actions.GETGIPHY:
            return {
                ...state,
                ...action.payload,
                data: {...action.payload},
                isLogginFailed: false,
            };
        default:
            return state;
    }
};
