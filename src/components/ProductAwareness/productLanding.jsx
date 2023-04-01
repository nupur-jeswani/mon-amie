import React from 'react'
import { Parallax } from 'react-parallax';
import './productLanding.css';
import image from "./Images/backdrop1.jpg";
import pads from "./Images/pads.jpg";
import tampons from "./Images/tamponIcon.jpg";
import cups from "./Images/cups2.jpg";
import periodPants from "./Images/periodPants.png";
import disc from "./Images/disc.jpg";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductLanding() {

	// const [napkinsProduct, setnapkinsProducts] = useState([]);
	// const [tamponProduct, settamponProducts] = useState([]);
	// const [cupsProduct, setcupsProducts] = useState([]);
	// const [discsProduct, setdiscsProducts] = useState([]);
	// const [pantiesProduct, setpantiesProducts] = useState([]);

	// useEffect(() => {
	// 	const getDetails = async () => {
	// 		const productsRef = collection(db, "Products");

	// 		const sanitaryNapkins = query(productsRef, where("productType", "==", "Sanitary pads"))
	// 		const sanitaryNapkinsSnapshort = await getDocs(sanitaryNapkins);
	// 		// const docSnap = await getDocs(q);
	// 		let napkinsproducts = [];
	// 		sanitaryNapkinsSnapshort.forEach((doc) => {
	// 			napkinsproducts.push(doc.data());
	// 		});
	// 		setnapkinsProducts(napkinsproducts);

	// 		const tampons = query(productsRef, where("productType", "==", "Tampon"))
	// 		const tamponsSnapshort = await getDocs(tampons);
	// 		let tamponsproducts = [];
	// 		tamponsSnapshort.forEach((doc) => {
	// 			tamponsproducts.push(doc.data());
	// 		});
	// 		settamponProducts(tamponsproducts);

	// 		const cups = query(productsRef, where("productType", "==", "menstrual cup"))
	// 		const cupsSnapshort = await getDocs(cups);
	// 		let cupsproducts = [];
	// 		cupsSnapshort.forEach((doc) => {
	// 			cupsproducts.push(doc.data());
	// 		});
	// 		setcupsProducts(cupsproducts);

	// 		const discs = query(productsRef, where("productType", "==", "Menstrual Disc"))
	// 		const discsSnapshort = await getDocs(discs);
	// 		let discsproducts = [];
	// 		discsSnapshort.forEach((doc) => {
	// 			discsproducts.push(doc.data());
	// 		});
	// 		setdiscsProducts(discsproducts);

	// 		const panties = query(productsRef, where("productType", "==", "Panties"))
	// 		const pantiesSnapshort = await getDocs(panties);
	// 		let pantiesproducts = [];
	// 		pantiesSnapshort.forEach((doc) => {
	// 			pantiesproducts.push(doc.data());
	// 		});
	// 		setpantiesProducts(pantiesproducts);
	// 	}

	// 	getDetails();
	// }, []);

	// productproducts.filter(filteredProducts => (filteredProducts["productType"].toLowerCase().includes(search.toLowerCase())))

	return (
		<div>
			<Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
				<div className='content'>
					<h2 className='headingTag'>Let's educate ourselves on <b>"PERIOD PRODUCTS"</b>!</h2>
				</div>
			</Parallax>
			<hr />
			<div className="row p-5 m-5">
				<div className="col-md-4">
					<Card style={{ width: '18rem' }}>
						<Link to={"/sanitarynapkins"} className="text-decoration-none">
							<Card.Img className='' variant="top" src={pads} style={{ width: "100%" }} />
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
						<Card style={{ width: '18rem' }}>
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

						<Card style={{ width: '18rem' }}>
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

						<Card style={{ width: '18rem' }}>
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
						<Card style={{ width: '18rem' }}>
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
