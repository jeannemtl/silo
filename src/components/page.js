import React, {Component} from 'react';

const Page =() =>{


  return(
    <div>
  <li><a href = "/" >Home </a></li>
  <li><a href = "/Contact" >Contact </a></li>
</div>
)
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
