import React from 'react'
import image from "./Images/image4.png"
import { Parallax } from 'react-parallax';
import './awareness.css'
import Card from 'react-bootstrap/Card';
import ruralIcon from "./Images/ruralIcon.png";
import bloodyMary from "./Images/bloodyMary.jpg";
import menarche from "./Images/menarche.jpg"
import mythFact from "./Images/mythFact.jpg";
import awkwardVisits from "./Images/awkwardVisits.jpeg";
import redBadge from "./Images/redBadge.jpeg";
import socialMedia from "./Images/socialMedia.jpg";
import monthlyVisitor from "./Images/monthlyVisitor.jpg";
import techDifficulties from "./Images/techDifficulties.jpg";
import organizations from "./Images/organizations.png";
import { Link } from 'react-router-dom';

export default function Awareness() {
  return (
    <div>

      <Parallax className="image" bgImage={image} bgImageAlt="awareness backdrop" strength={800}>
        <div className="content">

          <div className="row rows">
            <div className="col-md-4 p-2 cols">
              <Link to={''} className='text-decoration-none'>
                <Card className='ms-5' style={{ width: "50%" }}>
                  <Card.Img className='mt-2 ms-1' variant="top" src={redBadge} style={{ width: "95%" }} />
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
                <Card className='ms-5' style={{ width: "50%" }}>
                  <Card.Img className='mt-4 ms-3 mb-3' variant="top" src={menarche} style={{ width: "85%" }} />
                  <Card.Body>
                    <Card.Text>
                      <hr />
                      Menarche Begins
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            <div className="col-md-4 cols">
              <Link to={'/villageExperiences'} className='text-decoration-none'>
                <Card className='ms-5' style={{ width: "50%" }}>
                  <Card.Img className='mt-2 ms-3' variant="top" src={ruralIcon} style={{ width: "85%" }} />
                  <Card.Body>
                    <Card.Text>
                      <hr />
                      Village Experiences of Bloody Buddy
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>

          </div>
        </div>

      </Parallax>

      <div className="row rows">

        <div className="col-md-4">
          <Link to={'/awkwardVisits'} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-2 ms-1' variant="top" src={awkwardVisits} style={{ width: "95%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  Awkward Visits from Aunt Flo
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>


        <div className="col-md-4 m-2 p-2">
          <Link to={''} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-2 mb-5' variant="top" src={socialMedia} style={{ width: "100%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  Social Media made it easy
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

      </div>

      <div className="row rows">

        <div className="col-md-4 cols">
          <Link to={''} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-4 ms-1 mb-4' variant="top" src={bloodyMary} style={{ width: "95%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  Bloody Mary meets you
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to={''} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-5 ms-1 mb-4' variant="top" src={mythFact} style={{ width: "95%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  Myth Busters
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to={''} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-2 ms-2' variant="top" src={monthlyVisitor} style={{ width: "95%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  When your monthly visitor is late
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

      </div>

      <div className="row rows">

        <div className="col-md-4 cols">
          <Link to={''} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-2 ms-4' variant="top" src={organizations} style={{ width: "75%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  Organizations for you
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>


        <div className="col-md-4 m-2 p-2">
          <Link to={'/techDifficulties'} className='text-decoration-none'>
            <Card className='ms-5' style={{ width: "50%" }}>
              <Card.Img className='mt-4 ms-1 mb-4' variant="top" src={techDifficulties} style={{ width: "95%" }} />
              <Card.Body>
                <Card.Text>
                  <hr />
                  The one with technical difficulties
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

      </div>

    </div>
  )
}
