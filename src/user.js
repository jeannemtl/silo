import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {connect} from 'react-redux';

import {snapshotToArray} from './helpers/firebasehelpers';
import {View, Text, Animated, Button, StyleSheet, TextInput, ActivityIndicator, Image} from 'react-native';
import * as firebase from 'firebase'
import Category from './Category.js';
class User extends React.Component{

_onPressButton2() {
alert('You !')
}
constructor (props){
  super(props);

  this.state = ({
    email: '',
    password:'',
    isLoading: false,
    bookingsArray: [],
    bookings: [],
    isBooked: true
  })
  this.placeorder = this.placeorder.bind(this);

}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=> {if (user != null){
      console.log(user)
      console.log("UID" + user.uid)
      this.setState({userid:user.uid, email: user.email})
    }
  }
)
}
schedule = async (i)=>{
    firebase.auth().onAuthStateChanged( async(user)=> {if (user != null){
  var d = Date(Date.now());
  //
  const dstring = d.toString().split(' ').slice(0, 5).join(' ');
  Date.prototype.addHours= function(h){
      this.setHours(this.getHours()+h);
      return this;
  }
  this.setState({d: d});
  this.setState({deliveryd: new Date().addHours(6)});
  const deliveryhour = this.state.deliveryd.getHours();
  this.setState({openingd: new Date().addHours(i)});
const openinghour = this.state.openingd.toString().split(' ').slice(0, 5).join(' ');
 const schedulekey = await firebase.database().ref('schedule').push().key;
const scheduleresponse = await firebase.database().ref('schedule').child(schedulekey).set({time: openinghour, user: user.uid, email: user.email, key: schedulekey, item: i,
placed: true, currenttime: d.toString()})
}})
}
placeorder () {

    firebase.auth().onAuthStateChanged( async(user)=> {if (user != null){
        console.log("Placeorder" + JSON.stringify(user))

          var d = Date(Date.now());
          //
          const dstring = d.toString().split(' ').slice(0, 5).join(' ');
          Date.prototype.addHours= function(h){
              this.setHours(this.getHours()+h);
              return this;
          }
          //var deliveryd = new Date().addHours(6)s
          for (var i = 720; i < 740; i++) {
        this.schedule(i)
}

          try{

          const currentUserData = await firebase.database().ref('users').child(user.uid).once('value')
          const bookings = await firebase.database().ref().child('schedule').once('value');

console.log("BOOKINGS" + JSON.stringify(bookings))
  const bookingsArray = snapshotToArray(bookings)
  console.log("BOOKINGSARRAY" + JSON.stringify(bookingsArray))
          this.setState({currentUser: currentUserData.val(),
            bookings: bookingsArray,
    bookingsReading: bookingsArray.filter(booking => !booking.read),
    bookingsRead: bookingsArray.filter(booking => booking.read)

          })
            const order = bookingsArray.filter(booking => booking.read)
          const orderkey = await firebase.database().ref('bookings').child(user.uid).push().key;
          const schedulekey = await firebase.database().ref('schedule').child(user.uid).push().key;
console.log("ORDER" + orderkey)
console.log("state" + JSON.stringify(this.state.bookings))
console.log("TIME" + d)
console.log("TIME2" + dstring)
             //const response = await firebase.database().ref('Recipe Ingredients').child(user).child(recipe + " " + key )
             //.set({Name: item, Buy: true, Created: firebase.database.ServerValue.TIMESTAMP})

             const orderresponse = await firebase.database().ref('bookings').child(d.toString()).child(user.uid)
             .set({time: dstring, email: this.state.currentUser.email,
          placed: true,})



          const master = this.state.bookings.filter(booking =>
          booking.placed == true).map(booking => {
            console.log(booking + "THISONE")
            return({booking}



            );
          })


               console.log("SECTION" + JSON.stringify(bookings));
               //const sectionlist = result.filter(book)
               // expected output: Array ["exuberant", "destruction", "present"]

               const sectionlist = await firebase.database().ref('sectionlist').child(d.toString()).child(user.uid)
               .set({data: true})
          console.log("END" + JSON.stringify(bookings))



        }catch(error){
          console.log(error)
        }

console.log("PLACE " + user.uid)}})
}



  render(){
     const { params } = this.props.match;
console.log("CHECK" + JSON.stringify(params))
    return(

    <View>
    <Text onPress={this.placeorder}>
            Welcome
            </Text>



    {this.state.userid === params.id && (this.state.isBooked ==true) ? (

      <View >

      {this.state.bookings.map(function(item,index) {
    return (
    <Category name = {item.time} id = {item.key} email = {item.email} placed = {item.placed}/>
)
        })}

      </View>
    ):(

    <View>

    <Text>Booked</Text>
  </View>)}
    </View>
)
  }
}
const mapStateToProps = state => {
  return {
    bookings: state.bookings,

  };
};

const mapDispatchToProps = dispatch =>
{
  return {
    loadBookings: bookings =>dispatch({ type: 'LOAD_BOOKINGS_FROM_SERVER', payload: bookings}),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);


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
