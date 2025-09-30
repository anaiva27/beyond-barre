import Hero from "@/components/ui/hero";
import Menu from "@/components/ui/shared/menu";

export default function Home() {
	return (
		<>
			<div className="main-wrapper">
				<div className="hero-wrapper">
					<Menu />
					<div className="hero-container">
						<div className="outline-box">
							<div className="main-headline">
								Sculpt <br />
								Stretch <br />
								Strengthen <br />
							</div>
							<div className="main-subtitle">
								A full-body barre method designed to tone, stretch and energize
								— blending movement, music and mind-body connection for ageless
								results.
							</div>
							<img
								src="/assets/socials.png"
								className="socials"
								alt="social icons"
							/>
							<img
								src="/assets/CTA-1.png"
								className="cta1"
								alt="social icons"
							/>
						</div>
						<div className="hero-section1"></div>
						<div className="hero-section2">
							<img
								src="/assets/hero-model.png"
								className="hero-model"
								alt="Natalia in sportswear"
							/>
						</div>
						<div className="hero-section3">
							{/* <img
								src="/assets/socials.png"
								className="socials"
								alt="social icons"
							/> */}
						</div>
					</div>
				</div>

				<div className="hero-break">
					<div className="menu-item">Expert Training</div>
					<div className="menu-item">&</div>
					<div className="menu-item">Diverse Classes</div>
					<div className="menu-item">&</div>
					<div className="menu-item">Flexible Schedule</div>
				</div>

				<div className="section2">
					<div className="intro2">
						<div className="headline">
							Barre Isn’t Just a Workout — It’s a Glow-Up.{" "}
						</div>
						<div className="body">
							Want to feel stronger, stand taller, and move like a dancer — even
							if you’ve never danced a day in your life?{" "}
						</div>
						<div className="body">
							<span className="strong">That’s the magic of barre.</span>
						</div>
						<div className="body">
							Barre is the secret sauce behind toned arms, sculpted legs, lifted
							posture, and that effortless,{" "}
							<span className="strong">ageless glow</span>. And at Barre &
							Beyond, Natalia’s signature method takes it to the next level.
						</div>
						<div className="subtitle">
							This isn’t your average fitness class. <br />
							This is movement that transforms you.
						</div>
					</div>
					<div className="headline float-bottom">
						What Makes Barre So Addictive <br />
						(and Effective)?
					</div>
					<img
						src="/assets/triangle2.png"
						className="triangle2"
						alt="Natalia in sportswear"
					/>
					<img
						src="/assets/model2.png"
						className="model2"
						alt="Natalia in sportswear"
					/>
				</div>
			</div>
			<Hero />
		</>
	);
}
