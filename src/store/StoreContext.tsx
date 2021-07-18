import { createContext, useReducer, useEffect } from 'react';


import { GiphyReducer, InitalGiphytState, IGiphyState } from './reducers/giphyReducer';
import * as Actions from './actions';

export interface IContext {
    giphy?: IGiphyState;
    commands?: {
        getGiphy: () => {};
    };
}

export const StoreContext = createContext<IContext>({});
StoreContext.displayName = 'StoreContext';

export const StoreProvider = (children:any) => {
    
    const [giphy, giphyDispatcher] = useReducer(GiphyReducer, {
        ...InitalGiphytState,
    });

    const loadTrending = async () => {

            giphyDispatcher(await Actions.GetGiphy());
        
    };

    useEffect(() => {
        loadTrending();
    }, []);

    return (
            <StoreContext.Provider
                value={{

                    giphy,

                    commands: {
                       
                        getGiphy: async () => giphyDispatcher(await Actions.GetGiphy()),
                    
                    },
                }}
            >
                {children}
            </StoreContext.Provider>

    );
};
