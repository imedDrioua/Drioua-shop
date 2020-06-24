import React,{useState} from 'react';
import InputForm from "../form-input/form-input";
import Button from "../button/button";
import {auth} from "../../firebase/firebase-util";
import {creatUsreDocument} from "../../firebase/firebase-util";
const Signup =()=>{
    const [userCred , setUserCred] = useState({
      displayName:"",
      email : "",
      password : "",
      confirmedPassword : ""
  });
   const handlChange = (event)=>{
        const {name  , value} = event.target;
       setUserCred({
                   ...userCred,
                  [name] : value
       });
    }
   const  handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmedPassword } = userCred;
    
        if (password !== confirmedPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await creatUsreDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
       const {displayName , password , email , confirmedPassword}= userCred;
        return(
          <div className="col-sm-12 col-lg-6" >
           <div className="signUp">
               <h1 className="title">Sign Up</h1>
               <h3>I d'ont have an account yet !</h3>
               <form>
               <InputForm 
                    label="Display Name"
                    name="displayName"
                    handlchange={handlChange}
                    type="text" 
                    value={displayName} 
                 />
               <InputForm 
                    label="email"
                    name="email"
                    handlchange={handlChange}
                    type="email" 
                    value={email} 
                 />
                <InputForm 
                    label="password"
                    name="password"
                    handlchange={handlChange}
                    type="password" 
                    value={password} 
                 />
                   <InputForm 
                    label="Confirm Password"
                    name="confirmedPassword"
                    handlchange={handlChange}
                    type="password" 
                    value={confirmedPassword} 
                 />
                 <Button classes="btn btn-dark btn-lg" type="submit" onClick={handleSubmit}>
                 Sign Up</Button>
               </form>
           </div>
           </div>
        )
    
}

export default Signup;