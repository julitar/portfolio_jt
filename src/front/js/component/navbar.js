import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

const [currentPage, setCurrentPage] = useState('about me')

const handlePageChange = (page) => {
    setCurrentPage(page);
  };

	return (
		<div className="container-fluid d-flex justify-content-center my-border">
		<nav className="navbar navbar-light navbar-expand-lg">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-style">
						
						<li className="nav-item my-item">
							<a className="nav-link active my-item" aria-current="page" href="https://www.linkedin.com/in/julia-tartaglia-71766a68/" target="_blank">LinkedIn</a>
						</li>
					
						<li className="nav-item my-item">
							<a className="nav-link active my-item" aria-current="page" href="https://drive.google.com/file/d/1MGKnFmOZswinky-BslMmZn0toYB95Yd2/view?usp=sharing" target="_blank">Download CV</a>
						</li>
						
						{currentPage !== 'about me' && (
							<li className="nav-item">
								<Link to="/" className="link">
									<a className="nav-link active my-item" aria-current="page" onClick={() => handlePageChange('about me')}>About Me</a>
								</Link>
							</li>
						)}

						{currentPage !== 'projects' && (
							<li className="nav-item my-item">
								<Link to="/" className="link">
									<a className="nav-link active my-item" aria-current="page" onClick={() => handlePageChange('projects')}>Projects</a>
								</Link>
							</li>
						)}

					</ul>
				</div>
			</nav>
		</div>

	);
};
