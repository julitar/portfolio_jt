import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import profileimg from "../../img/profileimg.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-5">
			<div className="row w-75 m-auto d-flex">
				<div className="col-lg-5 col-md-12 order-lg-2 justify-content-center">
					<div className="img-container">
						<img src={profileimg} alt="Imagen Circular" class="img-fluid custom-circle-img"/>
					</div>
				</div>
				<div className="col-lg-7 col-md-12 order-lg-1">
					<h1 className="mt-5 name">Julia</h1>
					<h2 className="mb-5 lastname">Tartaglia</h2>
					<p className="bio">
						My passion lies in building empathy, prototyping concepts, and iterating for the solution.
						With a decade of experience in education, I've seamlessly transitioned to leading transformative
						digital projects. Recent certifications in <strong>UX design</strong> and <strong>programming</strong> further enhance my ability
						to create <strong>innovative and user-centered</strong> solutions.
					</p>
				</div>
				<div className="row botones order-lg-3">
					<div className="col-12 my-1">
					<a href="https://www.linkedin.com/in/julia-tartaglia-71766a68/" target="_blank" className="button-link">
						<button className="btn my-button">LinkedIn Profile</button>
					</a>
					</div>
					<div className="col-12 my-1">
						<a href="https://drive.google.com/file/d/1MGKnFmOZswinky-BslMmZn0toYB95Yd2/view?usp=sharing" target="_blank" className="button-link">
							<button className="btn my-button">Download CV</button>
						</a>
					</div>
				</div>
  			</div>
		</div>

	);
};
