const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
            case 'LOGOUT':
                return {
                    ...state,
                    user: undefined 
                }
                case 'GET_INFO':
            return {
                ...state,
                user: action.user
            }
            }
              
        };

export default reducer;