import React from 'react';
import InputForm from "../form-input/form-input";
import Button from "../button/button";
import {auth} from "../../firebase/firebase-util";
import {creatUsreDocument} from "../../firebase/firebase-util";
class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:"",
            email : "",
            password : "",
            confirmedPassword : ""
        }
    }
    handlChange = (event)=>{
        const {name  , value} = event.target;
       this.setState({
                  [name] : value
       });
    }
    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmedPassword } = this.state;
    
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
    render(){
        return(
           <div className="signUp">

               <h1 className="title">Sign Up</h1>
               <h3>I d'ont have an account yet !</h3>
               <form>
               <InputForm 
                    label="Display Name"
                    name="displayName"
                    handlchange={this.handlChange}
                    type="text" 
                    value={this.state.displayName} 
                 />
               <InputForm 
                    label="email"
                    name="email"
                    handlchange={this.handlChange}
                    type="email" 
                    value={this.state.email} 
                 />
                <InputForm 
                    label="password"
                    name="password"
                    handlchange={this.handlChange}
                    type="password" 
                    value={this.state.password} 
                 />
                   <InputForm 
                    label="Confirm Password"
                    name="confirmedPassword"
                    handlchange={this.handlChange}
                    type="password" 
                    value={this.state.confirmedPassword} 
                 />
                 <Button classes="btn btn-dark btn-lg" type="submit" onClick={this.handleSubmit}>
                 Sign Up</Button>
               </form>
           </div>
        )
    }
}

export default Signup;