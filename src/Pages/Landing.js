import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from "/Users/vignesh/Desktop/projects/job-app/src/assets/images/logo.svg"
import main from "/Users/vignesh/Desktop/projects/job-app/src/assets/images/main.svg"
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>

            <Container fluid >

                <nav className="navbar mx-3">
                    <img className='mx-5 my-3' src={logo} alt="logo"></img>
                </nav>

                <Container fluid>

                    <Row>

                        <Col lg={6} md={12} className="mb-5">
                            <div className='mx-5 landing'>
                                <h1 className='heading my-4' > Job<span className='text-primary mx-1'>Tracking</span> App</h1>
                                <p className='text'>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
                                <Link to="/Register" className='text-light' style={{textDecoration:"none"}} >
                                <button className='btn px-3 btn-primary' style={{fontSize:"20px"}}>
                                    Login/Register
                                    </button>
                                    </Link>
                            </div>

                        </Col>

                        <Col lg={6} md={12}>
                            <img  src={main} className="img-fluid p-" alt="landingimg" ></img>
                        </Col>

                    </Row>


                </Container>



            </Container>





        </div>
    )
}

export default Landing