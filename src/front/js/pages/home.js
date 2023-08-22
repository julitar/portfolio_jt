import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import profileimg from "../../img/profileimg.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-5">
			<div className="row w-75 m-auto">
				<div className="col-lg-5 col-md-12 order-lg-2 text-center">
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
						digital projects. Recent certifications in UX design and programming further enhance my ability
						to create innovative and user-centered solutions.
					</p>
				</div>
				<div className="row botones">

				</div>
  			</div>
		</div>

	);
};
