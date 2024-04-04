export function appContextReducer(appData, action){
    switch (action.type){
        case 'setSiteData':
            const initData = {
                initialized: true,
                siteData: action.data
            };
            return {...appData, ...initData};
        default:
            return appData;
    }
}