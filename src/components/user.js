import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


import {View, Text, Animated, Button, StyleSheet, TextInput, ActivityIndicator, Image} from 'react-native';
import * as firebase from 'firebase'

export default class User extends React.Component{

_onPressButton2() {
alert('You !')
}
constructor (props){
  super(props);

  this.state = ({
    email: '',
    password:'',
    isLoading: false
  })

}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=> {if (user != null){
      console.log(user)
      console.log("UID" + user.uid)
      this.setState({userid:user.uid})
    }
  }
)
}

signupUser = async ()=> {
//signupUser = (email, password) =>{
//try{
  //if(this.state.password.length<6){
    //alert("please enter at least 6")
    //return;
  //}
  //firebase.auth().createUserWithEmailAndPassword(email,password)
//}catch(error){
  //console.log(error.toString())
//}

if(this.state.email && this.state.password){
  this.setState({isLoading:true})
// email.com
  try{
    const response = await firebase.auth().createUserWithEmailAndPassword(this.state.email,
    this.state.password);

    if(response){
      this.setState({isLoading:false})
      //signin the user



this.loginUser(this.state.email, this.state.password)
    }
  }catch(error){
    this.setState({isLoading: false})
    if(error.code == 'auth/email-already-in-use'){
      alert('user already esists. Try logging in')
    }
  }
}
}
addcompany= async() =>{
  firebase.auth().onAuthStateChanged(async (user)=>{
        if(user){
    //navigate to the home screen
    const email = this.state.email;
  const name   = email.substring(0, email.lastIndexOf("@"));
  const domain = email.substring(email.lastIndexOf("@") +1);
  const company   = domain.substring(0, domain.lastIndexOf("."));
  console.log( "NAME" + name );   // john.doe
  console.log( "DOMAIN" + domain );
  console.log( "COMPANY" + company + user.uid );
  this.setState({company: company})
      //const response = await firebase.database().ref('Recipe Ingredients').child(user).child(recipe + " " + key )
      //.set({Name: item, Buy: true, Created: firebase.database.ServerValue.TIMESTAMP})
      const responsecompany = await firebase.database().ref('companies').child(user.uid).set({email: this.state.email, uid: user.uid, company: this.state.company})
      const check = await firebase.database().ref().child("companies").orderByChild("company").equalTo("gmail").once("value",snapshot => {
          if (snapshot.exists()){
            const userData = snapshot.val();
            console.log("exists!", userData);
          }
      });
    } else {
      //navigate to welcomepage
      this.props.navigation.navigate('WelcomeScreen');
    }
      })
}
loginUser = async() =>{


if(this.state.email && this.state.password){
  this.setState({isLoading: true})
  try{
    const response = await firebase.auth()
    .signInWithEmailAndPassword(this.state.email,
      this.state.password);
      if(response){
        this.setState({isLoading:false})
        this.addcompany(this.state.email, this.state.password)
        console.log('LOGEDIN')

      }

  }catch(error){
    this.setState({isLoading:false})
    switch(error.code){
      case 'auth/user-not-found':
      alert('A user with that email does not exist')
      break;
      case 'auth/invalid-email':
      alert('Please enter an email address')
    }
  }
}
};


  render(){
     const { params } = this.props.match
    return(

    <View>

    {this.state.userid === params.id ? (<View>
    Correct <p>{params.id}</p></View>):null}
    </View>
)
  }
}
