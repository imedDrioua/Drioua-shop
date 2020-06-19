import {firestore} from "../../firebase/firebase-util";

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
const createCollections=snapShot=>{
    const dataArray = snapShot.docs.map(doc =>{
        const {title , items}= doc.data();
        return ({
            title,
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            items
        })
    });
    return dataArray.reduce((acc , collection)=>
  {  acc[collection.title.toLowerCase()] = collection;
    return acc;
  },{})
  
  }