"use client";

// import { gsap } from "gsap";

import "@/assets/styles/animate.css";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import img1 from '@/assets/img1.png'
// import img2 from '@/assets/img2.png'
// import img3 from '@/assets/img3.png'
// import img4 from '@/assets/img4.png'
// import img5 from '@/assets/img5.png'
// import img6 from '@/assets/img6.png'
// import img7 from '@/assets/img7.png'

const Hero = () => {
	// const tl = useRef();
	// useGSAP(() => {
	// 	gsap.to(".hero", {
	// 		scale: 1.3,
	// 		duration: 3,
	// 		ease: "power3.inOut",
	// 		stagger: 0.25,
	// 		delay: 0.3,
	// 	});
	// 	tl.current = gsap
	// 		.timeline()
	// 		.to(".hero-imgs > img", {
	// 			clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
	// 			duration: 1,
	// 			ease: "power4.inOut",
	// 			stagger: 0.25,
	// 			delay: 0.3,
	// 		})
	// 		.to(".hero-imgs > img", {
	// 			clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
	// 			duration: 1.5,
	// 			ease: "power4.inOut",
	// 			stagger: 0.25,
	// 		})
	// 		.to(".hero", {
	// 			display: "none",
	// 		})
	// 		.to(".website-content", {
	// 			display: "block",
	// 		});
	// });

	return (
		<>
			{/* <div className="hero">
				<div className="hero-imgs">
					<img
						src="/images/img1.png"
						alt=""
						className="animate-img"
					/>
					<img
						src="/images/img2.png"
						alt=""
						className="animate-img"
					/>
					<img
						src="/images/img3.png"
						alt=""
						className="animate-img"
					/>
					<img
						src="/images/img5.png"
						alt=""
						className="animate-img"
					/>
					<img
						src="/images/img7.png"
						alt=""
						className="animate-img"
					/>
				</div>
			</div> */}
			<div className="website-content">
				<img
					src="/images/Hero-img.png"
					alt=""
					className="animate-img2"
				/>
			</div>
		</>
	);
};

export default Hero;
