import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-light justify-content-center p-4 border-bottom mt-5">
            <footer>
                <div className="container mb-4">
                    <h6>Created By - Nupur Jeswani, Nidhi Jain, Aarushi Sharma</h6>
                </div>
                <hr />
                <div className="container mt-4">
                    <div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 mt-4">
                                <h6>Connect with Nupur Jeswani via - </h6>
                                <div className="row justify-content-center">
                                    <div className="col-md-1">
                                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nupur-jeswani-60b050203" className="me-4 text-reset">
                                            <IoLogoLinkedin></IoLogoLinkedin>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a rel="noreferrer" target="_blank" href="https://github.com/nupur-jeswani" className="me-4 text-reset">
                                            <FaGithub></FaGithub>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 mt-4">
                                <h6>Connect with Nidhi Jain via - </h6>
                                <div className="row justify-content-center">
                                    <div className="col-md-1">
                                        <a rel="noreferrer" target="_blank" href="www.linkedin.com/in/nidhi-bafna-482634203" className="me-4 text-reset">
                                            <IoLogoLinkedin></IoLogoLinkedin>
                                        </a>

                                    </div>
                                    <div className="col-md-6">
                                        <a rel="noreferrer" target="_blank" href="https://github.com/nidhijain15" className="me-4 text-reset">
                                            <FaGithub></FaGithub>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 mt-4">
                                <h6>Connect with Aarushi Sharma via - </h6>
                                <div className="row justify-content-center">
                                    <div className="col-md-1">
                                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/aarushi-sharma1501/" className="me-4 text-reset">
                                            <IoLogoLinkedin></IoLogoLinkedin>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a rel="noreferrer" target="_blank" href="https://github.com/aaru15sharma" className="me-4 text-reset">
                                            <FaGithub></FaGithub>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
