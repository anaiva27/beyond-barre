'use client';

import { gsap } from "gsap";
import Header from "./shared/header";
import Footer from "./footer";
import "@/assets/styles/animate.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import img1 from '@/assets/img1.png'
// import img2 from '@/assets/img2.png'
// import img3 from '@/assets/img3.png'
// import img4 from '@/assets/img4.png'
// import img5 from '@/assets/img5.png'
// import img6 from '@/assets/img6.png'
// import img7 from '@/assets/img7.png'

const Hero = () => {
const hero = useRef(null)
    useGSAP(()=>{
    gsap.to(".hero-imgs > img", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100% ",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.25,
        delay: .3
    })
    gsap.to(".hero", {
       scale: 1.3,
        duration: 3,
        ease: "power3.inOut",
        stagger: 0.25,
        delay: 0
    })
    // gsap.to(".hero-imgs > img", {
    //     display: "none",
    //     delay: 5
    // })
    }, )


    return ( 
        <>
        <div className="hero" >
           <div className="hero-imgs">
            <img src='/images/img1.png' alt='' className="animate-img"/>
            <img src='/images/img2.png' alt='' className="animate-img" />
            <img src='/images/img3.png' alt='' className="animate-img" />
            <img src='/images/img4.png' alt='' className="animate-img" />
            <img src='/images/img5.png' alt='' className="animate-img" />
            <img src='/images/img6.png' alt='' className="animate-img" />
            <img src='/images/IMG_9209.jpeg' alt='' className="animate-img" />
         
           </div>
        </div>
        {/* <div className="website-content">
            ROOT
        </div> */}
        </> 
    );
}
 
export default Hero;