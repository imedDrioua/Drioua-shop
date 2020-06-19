export const addData = data =>{
    console.log(data);
   return (
    {
        type : "ADD_DATA",
        payload : data
    }
)}