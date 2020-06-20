
const INITIAL_STATE ={
    collections : null,
    isFetching : false,
    error : undefined
}

const shopReducer=(state=INITIAL_STATE ,action)=>{
   switch (action.type) {
       case "START_FETCHING" :
           return({
               ...state , 
               isFetching :true
           });
        case "SUCCESS_FETCHING":
            return({
                ...state ,
                isFetching : false,
                collections : action.payload
            });
       case "FAILED_FETCHING":
           return({
               ...state ,
               isFetching : false,
               error : action.payload
           });
       default:
           return state;
   }
}


export default shopReducer;