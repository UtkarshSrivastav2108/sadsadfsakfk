import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import icon from "../img/user.png";
import axios from "axios";


const Dashboard = ({ auth: { user } }) => {

	const [where, setWhere] = useState("");
	const [guest, setGuest] = useState("");
	const [arrivals, setArrivals] = useState("");
	const [leaving, setLeaving] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user,
			where,
			guest,
			arrivals,
			leaving,

		};
		try {
			const res = await axios.post("http://localhost:5000/travel", newPost);
			window.location.replace("/homescreen");
		} catch (err) { }
	};



	return (
		<>

			<section class="home" id="home">

				<div class="content">
					<h3>adventure is worthwhile</h3>
					<p>dicover new places with us, adventure awaits</p>
					<a href="/" class="btn">discover more</a>
				</div>



				<div class="video-container">
					<video src="./assets/images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
				</div>

			</section>



			<section class="book" id="book">

				<h1 class="heading">
					<span>b</span>
					<span>o</span>
					<span>o</span>
					<span>k</span>
					<span class="space"></span>
					<span>n</span>
					<span>o</span>
					<span>w</span>
				</h1>

				<div class="row">

					<div class="image">
						<img src="./assets/images/book-img.svg" alt="" />
					</div>

					<form onSubmit={handleSubmit}>
						<div class="inputBox">
							<h3>where to</h3>
							<input type="text" placeholder="place name"
								onChange={(e) => setWhere(e.target.value)}
							/>
						</div>
						<div class="inputBox">
							<h3>how many</h3>
							<input type="number" placeholder="number of guests"
								onChange={(e) => setGuest(e.target.value)}
							/>
						</div>
						<div class="inputBox">
							<h3>arrivals</h3>
							<input type="date"
								onChange={(e) => setArrivals(e.target.value)}
							/>
						</div>
						<div class="inputBox">
							<h3>leaving</h3>
							<input type="date"
								onChange={(e) => setLeaving(e.target.value)}
							/>
						</div>
						<input style={{ width: '100%' }} type="submit" class="btn" value="book now" />
					</form>

				</div>

			</section>




			<section class="packages" id="packages">

				<h1 class="heading">
					<span>p</span>
					<span>a</span>
					<span>c</span>
					<span>k</span>
					<span>a</span>
					<span>g</span>
					<span>e</span>
					<span>s</span>
				</h1>

				<div class="box-container">

					<div class="box">
						<img src="./assets/images/p-1.jpg" alt="" />
						<div class="content">
							<h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
							<div class="stars">
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							</div>
							<div class="price"> $90.00 <span>$120.00</span> </div>
							<a href="#" class="btn">book now</a>
						</div>
					</div>

					<div class="box">
						<img src="./assets/images/p-2.jpg" alt="" />
						<div class="content">
							<h3> <i class="fas fa-map-marker-alt"></i> hawaii </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
							<div class="stars">
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							</div>
							<div class="price"> Rs 9000 <span>Rs12000.00</span> </div>
							<a href="#" class="btn">book now</a>
						</div>
					</div>

					<div class="box">
						<img src="./assets/images/p-3.jpg" alt="" />
						<div class="content">
							<h3> <i class="fas fa-map-marker-alt"></i> sydney </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
							<div class="stars">
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							</div>
							<div class="price"> $90.00 <span>$120.00</span> </div>
							<a href="#" class="btn">book now</a>
						</div>
					</div>

					<div class="box">
						<img src="./assets/images/p-4.jpg" alt="" />
						<div class="content">
							<h3> <i class="fas fa-map-marker-alt"></i> paris </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
							<div class="stars">
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							</div>
							<div class="price"> $90.00 <span>$120.00</span> </div>
							<a href="#" class="btn">book now</a>
						</div>
					</div>

					<div class="box">
						<img src="./assets/images/p-5.jpg" alt="" />
						<div class="content">
							<h3> <i class="fas fa-map-marker-alt"></i> tokyo </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
							<div class="stars">
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							</div>
							<div class="price"> $90.00 <span>$120.00</span> </div>
							<a href="#" class="btn">book now</a>
						</div>
					</div>

				</div>

			</section>




			<section class="services" id="services">

				<h1 class="heading">
					<span>s</span>
					<span>e</span>
					<span>r</span>
					<span>v</span>
					<span>i</span>
					<span>c</span>
					<span>e</span>
					<span>s</span>
				</h1>

				<div class="box-container">

					<div class="box">
						<i class="fas fa-hotel"></i>
						<h3>affordable hotels</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>
					<div class="box">
						<i class="fas fa-utensils"></i>
						<h3>food and drinks</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>
					<div class="box">
						<i class="fas fa-bullhorn"></i>
						<h3>safty guide</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>
					<div class="box">
						<i class="fas fa-globe-asia"></i>
						<h3>around the world</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>
					<div class="box">
						<i class="fas fa-plane"></i>
						<h3>fastest travel</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>
					<div class="box">
						<i class="fas fa-hiking"></i>
						<h3>adventures</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
							exercitationem ut minima itaque iusto ipsum corrupti!</p>
					</div>

				</div>

			</section>




			<section class="gallery" id="gallery">

				<h1 class="heading">
					<span>g</span>
					<span>a</span>
					<span>l</span>
					<span>l</span>
					<span>e</span>
					<span>r</span>
					<span>y</span>
				</h1>

				<div class="box-container">

					<div class="box">
						<img src="./assets/images/g-1.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-2.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-3.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-4.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-5.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-6.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-7.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-8.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>
					<div class="box">
						<img src="./assets/images/g-9.jpg" alt="" />
						<div class="content">
							<h3>amazing places</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
							<a href="#" class="btn">see more</a>
						</div>
					</div>

				</div>

			</section>




			<section class="review" id="review">

				<h1 class="heading">
					<span>r</span>
					<span>e</span>
					<span>v</span>
					<span>i</span>
					<span>e</span>
					<span>w</span>
				</h1>

				<div class="swiper-container review-slider">

					<div class="swiper-wrapper">

						<div class="swiper-slide">
							<div class="box">
								<img src="./assets/images/pic1.png" alt="" />
								<h3>john deo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
									fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
									consectetur ducimus beatae, reprehenderit exercitationem!</p>
								<div class="stars">
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="far fa-star"></i>
								</div>
							</div>
						</div>


					</div>

				</div>

			</section>


			<section class="contact" id="contact">

				<h1 class="heading">
					<span>c</span>
					<span>o</span>
					<span>n</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>t</span>
				</h1>

				<div class="row">

					<div class="image">
						<img src="./assets/images/contact-img.svg" alt="" />
					</div>

					<form action="">
						<div class="inputBox">
							<input type="text" placeholder="name" />
							<input type="email" placeholder="email" />
						</div>
						<div class="inputBox">
							<input type="number" placeholder="number" />
							<input type="text" placeholder="subject" />
						</div>
						<textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
						<input type="submit" class="btn" value="send message" />
					</form>

				</div>

			</section>



			<section class="brand-container">

				<div class="swiper-container brand-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="./assets/images/1.jpg" alt="" /></div>
						<div class="swiper-slide"><img src="./assets/images/2.jpg" alt="" /></div>
						<div class="swiper-slide"><img src="./assets/images/3.jpg" alt="" /></div>
						<div class="swiper-slide"><img src="./assets/images/4.jpg" alt="" /></div>
						<div class="swiper-slide"><img src="./assets/images/5.jpg" alt="" /></div>
						<div class="swiper-slide"><img src="./assets/images/6.jpg" alt="" /></div>
					</div>
				</div>

			</section>



			<section class="footer">

				<div class="box-container">

					<div class="box">
						<h3>about us</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est
							accusantium voluptas enim nemo facilis sit debitis.</p>
					</div>
					<div class="box">
						<h3>branch locations</h3>
						<a href="#">india</a>
						<a href="#">USA</a>
						<a href="#">japan</a>
						<a href="#">france</a>
					</div>
					<div class="box">
						<h3>quick links</h3>
						<a href="#">home</a>
						<a href="#">book</a>
						<a href="#">packages</a>
						<a href="#">services</a>
						<a href="#">gallery</a>
						<a href="#">review</a>
						<a href="#">contact</a>
					</div>
					<div class="box">
						<h3>follow us</h3>
						<a href="#">facebook</a>
						<a href="#">instagram</a>
						<a href="#">twitter</a>
						<a href="#">linkedin</a>
					</div>

				</div>

				<h1 class="credit"> created by <span> BY AYUSH,ARVIND,PRAKHAR </span> | all rights reserved! </h1>

			</section>
		</>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
