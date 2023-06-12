import React from "react";

import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Porfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
	return (
		<div
			style={{
				backgroundColor: "#000000",
				color: "#fff",
				width: "100vw",
			}}
		>
			<Navbar />
			<Skills />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
