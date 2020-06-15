import React from "react";
import "./sign-in.scss";
import InputForm from "../../components/form-input/form-input";
import Button from "../../components/button/button";
import {signInWithGoogle} from "../../firebase/firebase-util";
import {auth} from "../../firebase/firebase-util";
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
        email : "",
        password : ""
        }
    }
     handlChange = (event)=>{
        const {name , value} = event.target;
         this.setState((prev)=>
             (
               {  ...prev,
                 [name]:value}
             )
         )
    }
    handlSubmit= async (event)=> {
    event.preventDefault();
    const {email , password } = this.state;
    await auth.signInWithEmailAndPassword(email , password);
    this.setState(
       {
        email : "",
        password : ""
       } 
    )
    }

    render(){
        return (
            <div className="sign-in">
                <h1>Sign in</h1>
                <h3>I already have an account</h3>
                <form >
                    <InputForm 
                    label="email"
                    name="email"
                    handlchange={this.handlChange}
                    type="email" 
                    value={this.state.email} 
                 />
                    <InputForm 
                    label="paassword"
                    name="password"
                    handlchange={this.handlChange}
                    type="password" 
                    value={this.state.password} 
                     />
                  <Button type="submit" classes={"btn btn-lg btn-dark"} onClick={this.handlSubmit} >Sign In </Button>
                  <Button type="button" classes={"btn btn-lg btn-outline-primary"} onClick={()=>signInWithGoogle()} >Sign In with Google</Button>                               
                 </form>
            </div>
        )
    }
}
export default SignIn;