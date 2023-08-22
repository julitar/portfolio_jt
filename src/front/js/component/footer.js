import React, { Component } from "react";
import "../../styles/home.css";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row">
			<div className="col-12 border-bottom">
				<h4 className="footer-subtitle">Get in touch!</h4>
			</div>
			<div className="col-12 mt-3">
				<p className="footer-text">tartaglia.julia@gmail.com</p>
				<a className="footer-a" href="https://www.linkedin.com/in/julia-tartaglia-71766a68/" target="_blank"><p className="footer-text">LinkedIn</p></a>
			</div>
		</div>
	</footer>
);
