import React from "react";

const Menu = () => {
	return (
		<div className="menu-wrapper">
			<div className="logo">
				<img
					src="/assets/Logo-2.png"
					alt="logo Barre & Beyond"
				/>
			</div>
			<div className="menu-items">
				<div className="menu-item">Welcome</div>
				{/* <div className="menu-item">Classes</div> */}
				<div className="menu-item">Our Mission</div>
				<div className="menu-item">Contact</div>
			</div>
		</div>
	);
};

export default Menu;
