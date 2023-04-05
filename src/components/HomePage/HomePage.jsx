import React from 'react';
import { Parallax } from 'react-parallax';
import image from "./Images/sample7.jpeg";
import ProductLanding from '../../components/ProductAwareness/productLanding';
import Awareness from '../GeneralAwareness/awareness';


export default function HomePage() {
  return (
    <div>
      <Parallax className="image" style={{"padding":"100px"}} bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
        <div className="content">
          <h1 className="headingTag"> Hey, Welcome to Mon-Amie! </h1>
        </div>
      </Parallax>

      <div className='p-5 m-5'>
        <hr />
        <h1 className='headingTag'>ABOUT MON-AMIE</h1>
        <hr />

        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>

      <ProductLanding />
      <div className='p-5 m-5'>
        <hr />
        <h1 className='headingTag'>Mon-Amie's Menstrual Hygiene guide</h1>
        <hr />
        Write something about menstrual hygiene idhar
      </div>

      <Awareness />
    </div>
  )
}
