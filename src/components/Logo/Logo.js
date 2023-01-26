import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'



const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-1" perspective={750} glareEnable={true} glareColor="yellow" glareMaxOpacity={0.95} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"></div>
			</Tilt>
		</div>
		);
}
export default Logo;