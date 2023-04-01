import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from "react";
import { Accordion } from 'react-bootstrap';

export default function CupsProducts() {
	const [cupsProduct, setcupsProducts] = useState([]);

	useEffect(() => {
		const getDetails = async () => {
			const productsRef = collection(db, "Products");
			const cups = query(productsRef, where("productType", "==", "menstrual cup"))
			const cupsSnapshort = await getDocs(cups);
			let cupsproducts = [];
			cupsSnapshort.forEach((doc) => {
				cupsproducts.push(doc.data());
			});
			setcupsProducts(cupsproducts);
		}

		getDetails();
	}, []);

	return (
		<div class="container px-5 py-12 mx-auto max-w-7x1">
            <div class="flex flex-wrap w-full mb-4 p-4">
				<div class="w-full mb-6 lg:mb-0">
					<h1 class="sm:text-4xl text-5xl font-m font-bold title-font mb-2 text-gray-900">
						Menstrual Cups
						{/* <img src={} alt="" className="w-10" /> */}
					</h1>
					<div class="h-1 w-20 bg-green-500 rounded"></div>
				</div>
			</div>

			<Row m={6} className="container mx-auto p-5 bg-light">
				{
					cupsProduct.map(doc => {
						return (
							<>
								<Col xs={12} sm={12} md={6} className="mb-5">
									<Accordion className="p-3 container">
										<Accordion.Item eventKey="0">
											<Accordion.Header className="text-primary container" style={{ display: "block" }}>
												<div style={{ display: "block" }}>
													<img
														class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
														src={doc["image"]}
														alt="Image Size 720x400"
													/>

													<>
														<div style={{ display: "block" }}>
															{
																doc["brand"] ? doc["brand"] : <></>
															}
														</div>
														<div style={{ display: "block" }}>
															{
																doc["name"] ? doc["name"] : <></>
															}
														</div>
														<div style={{ display: "block" }}>
															{
																doc["creator"] ? doc["creator"] : <></>
															}
														</div>
														<div style={{ display: "block" }}>
															{
																doc["rating"] ? doc["rating"] : <></>
															}
														</div>
													</>

												</div>
											</Accordion.Header>
											<Accordion.Body>
												<div style={{ display: "block" }}>
												<div>
														{
															doc["productSite"] ?
																<>
																	<h5>Main website of the product - </h5>
																	<p><a href={doc["productSite"]}>Click here</a></p>
																</>
																: <></>
														}
													</div>
													<hr />
													<div>
														{
															doc["description"] ?
																<>
																	<h5>Description of the product</h5>
																	<ul>
																		{doc["description"].map((item, id) => (
																			<li key={id}>{item}</li>
																		))}
																	</ul>
																</>
																: <></>
														}
													</div>
													<hr />
													<div>
														{
															doc["content"] ?
																<>
																	<h5>What the product does and how to use it?</h5>
																	<ul>
																		{doc["content"].map((item, id) => (
																			<li key={id}>{item}</li>
																		))}
																	</ul>
																</>
																: <></>
														}
													</div>
													<hr />
													<div>
														{
															doc["cost"] ?
																<>
																	<h5>Product costing - </h5>
																	<ul>
																		{doc["cost"].map((item, id) => (
																			<li key={id}>{item}</li>
																		))}
																	</ul>
																</>
																: <></>
														}
													</div>
													<hr />
													<div>
														{
															doc["links"] ?
																<>
																	<h5>Where else you can find this product?</h5>
																	<ul>
																		{doc["links"].map((item, id) => (
																			<li key={id}><a href={item}>Find it here!</a></li>
																		))}
																	</ul>
																</>
																: <></>
														}
													</div>
												</div>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Col>
							</>
						)
					})
				}
			</Row>
		</div>
	);
}