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
            case 'USER_FOTO':
                return {

                    ...state,
                }
                default:
                    return state
                    
           case 'POST':
               return{
                   ...state
               }
               case 'POSTS':
            return {
                ...state,
                posts: action.posts
            }
        }
        
    };

export default reducer;