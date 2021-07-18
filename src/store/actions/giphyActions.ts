
import { GiphyFetch } from "@giphy/js-fetch-api";
export const GETGIPHY = 'GETGIPHY';

export const GetGiphy = async () => {
    const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
        var prom = new Promise( (resolve,reject) => {
            console.log("test1")    // Line A
            resolve(giphyFetch.trending({ limit: 10 }))
        });
        prom.then( (response:any) => {
            if(response.data){
                return {
                    type: GETGIPHY,
                    payload: {
                        data:response.data,
                    },
                };
            }
        } );

    
};

// export const ForgottenPassword = async (emailAddress: string) => {
//     const response = await forgottenPassword(emailAddress);
//     if (response.ok) {
//         return {
//             type: FORGOTTEN_PASSWORD_SUBMITTED,
//             payload: { isSuccessful: true },
//         };
//     }
//     return {
//         type: FORGOTTEN_PASSWORD_SUBMITTED,
//         payload: { isSuccessful: false },
//     };
// };
