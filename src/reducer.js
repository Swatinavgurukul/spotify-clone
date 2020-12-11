export const initialState = {
    user:null,
    token:"BQCnaE9H5FW0xZYXddODkavotcUiBbFj583uCrOK0PXHld2-57BGG43ELLxyaAwAj6qa4_IzNPfsnbCs1V7l4YNWoAJamjSAumfk8-SPrwZLy5__boi67hM_V8nd_GvxES-So6_07HruciawJhxKaBrMR-AhEsGwN3E9c3uw0CRbQal2KxAy",
}

const reducer = (state,action) => {
    // for debug 
    console.log(action);
    // Action -> type,[payload]

    switch(action.type) {
        // reduser is the lisning this is new state , is lucks like
        case 'SET_USER' :
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN' :
            return {
                ...state,
                token:action.token
            }
        default :
            return state;
    }

}
export default reducer;