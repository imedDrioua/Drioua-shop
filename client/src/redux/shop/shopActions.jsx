import {firestore,createCollections} from "../../firebase/firebase-util";

export const start = ()=> ({
    type : "START_FETCHING"
});
export const succes = (data)=>({
    type : "SUCCESS_FETCHING",
    payload : data
});
export const failed = (error)=>({
    type : "FAILED_FETCHING",
    payload : error
});
export const  asyncFetching = ()=>{
    return dispatch => {
        dispatch(start());
    const collectionRef = firestore.collection("collections");  
    collectionRef.get().then(snapshot=> {
      const data=createCollections(snapshot);
      dispatch(succes(data));
    }).catch(error=>
        dispatch(failed(error))
    );
    }

}
