import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul className="nav-links" style={{ listStyleType: 'none', display: 'flex' }}>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul className="nav-links" style={{ listStyleType: 'none', display: 'flex' }}>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);

	return (


		<>
			<header>

				<div id="menu-bar" class="fas fa-bars"></div>

				<a href="/" class="logo"><span>T</span>ravel(AAP)</a>

				<nav class="navbar">
					<a href="/homescreen#home">home</a>
					<a href="/homescreen#book">book</a>
					<a href="/homescreen#packages">packages</a>
					<a href="/homescreen#services">services</a>
					<a href="/homescreen#gallery">gallery</a>
					<a href="/homescreen#review">review</a>
					<a href="/homescreen#contact">contact</a>
				</nav>


				<nav class="navbar">
					{!loading && (
						<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
					)}
				</nav>
			</header>
		</>

	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
