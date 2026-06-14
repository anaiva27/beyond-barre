import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="border-t footer-wrapper ">
			<div className="flex-align-start">
				<div className="footer-call-out">
					<div className="headline ">Barre & Beyond</div>
					<div>A modern way to achieve ageless living</div>
				</div>

				<div className="footer-outro">
					7670 Homewood Place
					<br />
					La Mesa 91941
				</div>
			</div>

			<div className="flex-between">
				<div className="footer-outro-left">
					<span>Precision</span>
					<span>Creative Flow</span>
					<span>Ageless Results</span>
					<span>Innovation</span>
				</div>
				<div className="footer-outro">
					<span>Tuesday</span>
					<span>Thursday</span>
					<span>Saturday</span>
				</div>
			</div>

			<div className="flex-between">
				<div className="">
					ALL RIGHTS RESERVED © {currentYear} Barre & Beyond
				</div>
				<div className="footer-dev">
					<Link
						href="https://a27-web-lab.vercel.app/"
						target="_blank"
					>
						<span>Developed by —</span> A27 WEB LAB
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
