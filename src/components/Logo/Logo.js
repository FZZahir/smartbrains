import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './Logo.png'



const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-1" perspective={750} glareEnable={true} glareColor="yellow" glareMaxOpacity={0.95} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"><img style={{paddingtop: '5px'}}alt= 'logo' src={brain}/></div>
			</Tilt>
		</div>
		);
}
export default Logo;