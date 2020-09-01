import React from 'react';
import Login from "../components/Login";
import bkg from '../img/balan.jpeg'

const Landing = () => {
	return(
		<div  style={{backgroundImage: `url(${bkg})`, backgroundSize: `cover`, height: `calc( 100vh - 66px )`}}>
			<h2 className="text-white text-center pt-5">The app for manage your finances</h2>
			<Login/>
		</div>
	)
}

export default Landing;