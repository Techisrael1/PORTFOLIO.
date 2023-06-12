import React from "react";
import "./contact.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import cv from "../../assets/cv.pdf";
const Contact = () => {
	const icons = {
		color: "#ff004f",
		fontsize: "20px",
	};

	const scriptURL =
		"https://script.google.com/macros/s/AKfycbykWCgjEaR8uz9bqDiqZgJcEwtj69dfEMr0f5T7oDt_sSOZNZc7hy3WUADaK_qxmVPbhw/exec";

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = document.forms["submit-to-google-sheet"];
		const msg = document.getElementById("message");

		fetch(scriptURL, {
			method: "POST",
			body: new FormData(form),
		})
			.then((response) => {
				msg.innerHTML = "Message Sent successfully.";
				setTimeout(() => {
					msg.innerHTML = "";
					alert("Message Sent successfully."); // Show alert after sending message
					form.reset(); // Clear input fields
				}, 2000);
			})
			.catch((error) => {
				console.error("Error!", error.message);
				alert("Message sent successfully!"); // Show alert for error
				form.reset(); // Clear input fields
			});
	};

	return (
		<div id="contact">
			<div className="left-col">
				<h1>Contact Me</h1>
				<div className="left-col-icon">
					<div className="left-col-icon1">
						<FaTelegramPlane style={icons} />
						<a href="mailto:israelkolade9@gmail.com">
							israelkolade9@gmail.com
						</a>
					</div>

					<div className="left-col-icon2">
						<FaPhoneSquareAlt style={icons} />
						<a href="tel:+2347058681430">+234-705-868-1430</a>
					</div>
				</div>
				<div className="social-icons">
					<a href="">
						<FaFacebook />
					</a>
					<a href="https://twitter.com/ace75223798?s=11&t=5lStp2269RokPx7i3UApFQ">
						<FaTwitterSquare />
					</a>
					<a href="https://www.instagram.com/_____rael_____/">
						<FaInstagram />
					</a>
					<a href="https://www.linkedin.com/in/israel-oyegbade-479462253/">
						<FaLinkedin />
					</a>
				</div>
				<a href={cv} download>
					<button type="download">Download Cv</button>
				</a>
			</div>
			<div className="right-col">
				<form name="submit-to-google-sheet" onSubmit={handleSubmit}>
					<input
						type="text"
						name="Name"
						placeholder="Your Name"
						required
					/>
					<input
						type="email"
						name="Email"
						placeholder="Your Email"
						required
					/>
					<textarea
						className="white"
						name="Message"
						id=""
						cols="30"
						rows="10"
						placeholder="Kindly leave a message"
						required
					></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
