import React from "react";
import Link from "next/link";

const Menu = () => {
	return (
		<div className="menu-wrapper">
			<div className="logo">
				<Link href="/">
					<img
						src="/assets/Logo-2.png"
						alt="logo Barre & Beyond"
					/>
				</Link>
			</div>
			<div className="menu-items">
				<div className="menu-item">
					Tuesday
					{/* <Link href="/">Welcome</Link> */}
				</div>
				{/* <div className="menu-item">Classes</div> */}
				<div className="menu-item">
					Thursday
					{/* <Link href="/mission">Our Mission</Link> */}
				</div>
				<div className="menu-item">Saturday</div>
			</div>
		</div>
	);
};

export default Menu;
