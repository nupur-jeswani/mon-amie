import React from 'react'
import { Parallax } from 'react-parallax';
import './productLanding.css';
import image from "./Images/backdrop3.jpg";
import pads from "./Images/pads.jpg";
import tampons from "./Images/tamponIcon.jpg";
import cups from "./Images/cups2.jpg";
import periodPants from "./Images/periodPants.png";
import disc from "./Images/disc.jpg";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductLanding() {
	return (
		<div>
			<Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
				<div className='content'>
					<h2 className='headingTag'>Let's educate ourselves on <b>"PERIOD PRODUCTS"</b>!</h2>
				</div>
			</Parallax>
			<hr />
			<div className="row p-5">
				<div className="col-md-4">
					<Card style={{ width: '18rem', borderWidth: 0 }}>
						<Link to={"/sanitarynapkins"} className="text-decoration-none">
							<Card.Img src={pads} style={{ width: "100%" }}/>
							<Card.Body>
								<Card.Text>
									Sanitary napkins
								</Card.Text>
							</Card.Body>
						</Link>
					</Card>

				</div>

				<div className="col-md-4">
					<div className="col-md-4">
						<Card style={{ width: '18rem', borderWidth: 0 }}>
							<Link to={"/tampons"} className="text-decoration-none">
								<Card.Img className='' variant="top" src={tampons} style={{ width: "100%" }} />
								<Card.Body>
									<Card.Text>
										Tampons
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</div>
				</div>

				<div className="col-md-4">
					<div className="col-md-4">

						<Card style={{ width: '18rem', borderWidth: 0 }}>
							<Link to={"/cups"} className="text-decoration-none">
								<Card.Img className='' variant="top" src={cups} style={{ width: "100%" }} />
								<Card.Body>
									<Card.Text>
										Menstrual Cups
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</div>
				</div>
			</div>

			<div className="row p-5 m-5">
				<div className="col-md-2 justify-content-center">

				</div>
				<div className="col-md-4">
					<div className="col-md-6 justify-content-center">

						<Card style={{ width: '18rem', borderWidth: 0 }}>
							<Link to={"/periodPanties"} className="text-decoration-none">
								<Card.Img className='' variant="top" src={periodPants} style={{ width: "100%" }} />
								<Card.Body>
									<Card.Text>
										Period Panties
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</div>
				</div>

				<div className="col-md-6">
					<div className="col-md-6 justify-content-center">
						<Card style={{ width: '18rem', borderWidth: 0 }}>
							<Link to={"/discs"} className="text-decoration-none">
								<Card.Img className='' variant="top" src={disc} style={{ width: "100%" }} />
								<Card.Body>
									<Card.Text>
										Menstrual Discs
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
