import React, {Component} from 'react';
import {View, Text, Animated, Button, StyleSheet, TextInput, ActivityIndicator, Image} from 'react-native';


import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCVQPe6ST3gVVG6rr84D-k5gimindIKxhM",
    authDomain: "cocomint2.firebaseapp.com",
    databaseURL: "https://cocomint2.firebaseio.com",
    projectId: "cocomint2",
    storageBucket: "cocomint2.appspot.com",
    messagingSenderId: "871059764426",
    appId: "1:871059764426:web:9d3d2d1ed9e83ccb47b033",
    measurementId: "G-0Y2K6LKPDR"
  };
firebase.initializeApp(firebaseConfig);

export default class Counter extends React.Component{

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
        this.props.userHasAuthenticated(true);
    this.props.history.push("/");
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
    return(

    <View style={styles.container}>
    {this.state.isLoading ? (<View style = {[StyleSheet.absoluteFill,
    {alignItems:'center', justifyContent: 'center', zIndex: 1000, elevation: 1000}]}><ActivityIndicator size="large"></ActivityIndicator></View>):null}
      <TextInput style = {styles.textInput}
      placeholder = "Enter email"
      kekyboardType="email-address"
      onChangeText={email=> this.setState({email})}/>
      <TextInput style = {styles.textInput}
      placeholder = "Enter password"
      secureTextEntry
      onChangeText={password=> this.setState({password})}/>

        <View style={styles.buttonContainer}>

      </View>


      <View style={styles.buttonContainer}>




    </View>



  <View style={styles.buttonContainer}>
    <View
					style={styles.facebookBtnView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>

                        <View
                            style={styles.emailBtnView}>
                            <View
                              pointerEvents="box-none"
                              style={{
                                position: "absolute",
                                alignSelf: "center",
                                top: 0,
                                bottom: 0,
                                justifyContent: "center",
                              }}>
                              <Text
                                style={styles.signUpUsingEmailText} onPress={() => this.signupUser(this.state.email, this.state.password)}>SIGNUP WITH EMAIL</Text>
                            </View>
                            <View
                              pointerEvents="box-none"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                justifyContent: "center",
                              }}>

                            </View>
                          </View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>

					</View>
				</View>
</View>


      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
    marginHorizontal: 40,
    height: 45,

  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput:{
    height: 50,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: 'grey',
    marginHorizontal: 40,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  loginButtons:{

  alignItems: 'center',
  justifyContent: 'center'
}, welcomeView: {
		backgroundColor: "rgb(250, 250, 250)",
		flex: 1,
		alignItems: "center",
	},
	iconView: {
		backgroundColor: "white",
		borderRadius: 30,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 85,
		height: 85,
		marginTop: 124,
	},
	recipesText: {
		color: "rgb(37, 37, 37)",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 40,
	},
	coolTaglineGoesHeText: {
		color: "rgb(118, 135, 126)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 19,
	},
	facebookBtnView: {
		backgroundColor: "rgb(51, 100, 183)",
		borderRadius: 27.5,
		shadowColor: "rgba(54, 94, 163, 0.2)",
		shadowRadius: 4,
		shadowOpacity: 1,
		width: 295,
		height: 55,
marginTop: 20
	},
	connectWithFacebooText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1,
		backgroundColor: "transparent",
	},
	socialFacebookImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 19,
		height: 19,
		marginLeft: 30,
	},
	emailBtnViewLinearGradient: {
		borderRadius: 27.5,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 11,
		shadowOpacity: 1,
		width: 295,
		height: 55,
		marginTop: 20,
	},
	emailBtnView: {
		width: "100%",
		height: "100%",
	},
	signUpUsingEmailText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1,
	},
	emailImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 18,
		height: 15,
		marginLeft: 30,
	},
	iAlreadyHaveAnAcText: {
		color: "rgb(118, 135, 126)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 18,
		backgroundColor: "transparent",
		marginBottom: 68,
	},
	rectangle24View: {
		backgroundColor: "black",
		borderRadius: 2.5,
		width: 134,
		height: 5,
		marginBottom: 9,
	},
});
