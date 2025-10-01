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
					<div className="menu-item white">Expert Training</div>
					<div className="menu-item white">&</div>
					<div className="menu-item white">Diverse Classes</div>
					<div className="menu-item white">&</div>
					<div className="menu-item white">Flexible Schedule</div>
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
						src="/assets/model2-2.png"
						className="model2"
						alt="Natalia in sportswear"
					/>
				</div>

				<div className="section3">
					<img
						src="/assets/model3-2.png"
						className="model3 float-top"
						alt="Natalia in sportswear"
					/>
					<div className="intro3-left">
						<div className="subtitle">Posture for Days</div>
						<div className="body">
							Hello, elegance! Barre helps you stand taller, walk smoother, and
							carry yourself like the queen you are.
						</div>
						<div className="subtitle">
							Stretch + Sculpt = <br />
							Yes, Please
						</div>
						<div className="body">
							Every class blends strength and flexibility, so you leave feeling
							longer, lighter, and more alive.
						</div>
					</div>
					<div className="intro3-right">
						<div className="subtitle">
							Tiny Movements, <br />
							Big Burn
						</div>
						<div className="body">
							It targets muscles you didn’t know you had — and suddenly you’re
							stronger, leaner, and loving it.
						</div>
						<div className="subtitle">Low Impact, High Reward</div>
						<div className="body">
							No jumping, no pounding — just deep, delicious work that respects
							your joints and your time.
						</div>
					</div>
				</div>

				<div className="section4">
					<img
						src="/assets/model4-2.png"
						className="model4"
						alt="Natalia in sportswear"
					/>
					<div className="intro4-left">
						<div className="subtitle">
							Natalia is living proof that this method works.
						</div>
						<div className="body">
							At 48, she has the strength, posture, and beauty of someone half
							her age — and she{"'"}s here to help you tap into your own glow-up
							too.
						</div>
					</div>
					<div className="intro4-right">
						<div className="subtitle">
							{/* Chasing your summer body, or just want to feel amazing in your
							skin — Barre & Beyond is for you.  */}
							Here are the key benefits you{"'"}ll love:
						</div>
						<div className="body">• Tones and sculpts lean muscles</div>
						<div className="body">• Improves posture and alignment</div>
						<div className="body">• Increases flexibility and mobility</div>
						<div className="body">• Strengthens core and stability</div>
						<div className="body">• Enhances balance</div>
						<div className="body">• Boosts circulation and energy</div>
						<div className="body">• Promotes a youthful, ageless look</div>
						<div className="body">• Builds strength without bulk</div>
						<div className="body">• Supports mind-body connection</div>
					</div>
				</div>
			</div>
			<Hero />
		</>
	);
}
