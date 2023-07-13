import React from "react";
import "./portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
	return (
		<div id="portfolio">
			<div className="container">
				<h1 className="sub-title">My Work</h1>
				<div className="work-list">
					<div className="work">
						<img
							src="https://plus.unsplash.com/premium_photo-1685086785013-acc71c40e5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<div className="layer">
							<h3>Data Management System</h3>
							<p>Data Management System </p>
							<a href="https://e-register-app.vercel.app/">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
					<div className="work">
						<img
							src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
						/>
						<div className="layer">
							<h3>Restaurant Application</h3>
							<p>Food Ordering application</p>
							<a href="https://github.com/Techisrael1/Restaurant-Application-.git">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>

					<div className="work">
						<img src="./images/phone2E.webp" alt="" />
						<div className="layer">
							<h3>ONLINE SHOPPING APP</h3>
							<p>An e-commerce website</p>
							<a href="https://github.com/Techisrael1/E-commerce-Site.git">
								<FaExternalLinkAlt />
							</a>
						</div>
					</div>
				</div>
				<a
					href="https://github.com/Techisrael1?tab=repositories"
					className="btn"
				>
					See more
				</a>
			</div>
		</div>
	);
};

export default Portfolio;
