import React from 'react'
import image from "./Images/image4.png"
import { Parallax } from 'react-parallax';
import './awareness.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import periodsIcon from "./Images/periodsIcon.png";
import ruralIcon from "./Images/ruralIcon.png";
import firstPeriod from "./Images/firstPeriod.png";
import { Link } from 'react-router-dom';

export default function Awareness() {
  return (
    <div>

      {/* <Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
        <div className='content'>
          <h2 className='headingTag'>Mon-Amie's Awareness Chapters</h2>
        </div>
      </Parallax> */}

      {/* How to obtain the red badge of courage
Menarche begins! (menarch ~ monarchy)
Awkward visits from Aunt Flo 
Village experiences of Bloody buddy
Social Media made it easy
Organisations for you
Myth Busters
When your monthly visitor is late
Bloody Mary meets you
The one with technical difficulties */}

      <Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
        <div className="content">

          <div className="row">

            <div className="col-md-4 p-2">
              <Link to={''} className='text-decoration-none'>
                <Card style={{ width: "50%" }}>
                  <Card.Img className='mt-2 ms-3' variant="top" src={periodsIcon} style={{ width: "85%" }} />
                  <Card.Body>
                    <Card.Text>
                      <hr />
                      How to obtain the red badge of courage?
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="col-md-4 p-2">
              <Link to={''} className='text-decoration-none'>
                <Card style={{ width: "50%" }}>
                  <Card.Img className='mt-4 ms-1 mb-4' variant="top" src={firstPeriod} style={{ width: "95%" }} />
                  <Card.Body>
                    <Card.Text>
                      <hr />
                      Do you remember your First period?
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to={''} className='text-decoration-none'>
                <Card style={{ width: "50%" }}>
                  <Card.Img className='mt-2 ms-2' variant="top" src={ruralIcon} style={{ width: "85%" }} />
                  <Card.Body>
                    <Card.Text>
                      <hr />
                      What happens in Rural Areas?
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

          </div>
        </div>
      </Parallax>

      hello

      <Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
        <div className="content">
          <div className="row">
            <div className="col-md-4 p-5">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 p-5">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 p-5">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>

          </div>
        </div>
      </Parallax>

    </div>
  )
}
