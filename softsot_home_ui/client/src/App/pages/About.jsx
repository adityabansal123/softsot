import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../common/NavBar";
import Footer from "../../common/Footer";
import placeholder from '../../images/man-with-ipad.png';
import '../components/About.css';

class About extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <section className="bg-primary top-spacing">
                    <div className="container">
                        <div className="page-title text-white text-center">
                            <h2 data-animate="fadeInUp" data-delay="1.2">about us</h2>
                            <ul className="list-inline" data-animate="fadeInUp" data-delay="1.4">
                                <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                                <li>/</li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="about-us">
                                    <h2 data-animate="fadeInUp" data-delay=".1">About Crypto Cloud</h2>
                                    <ul className="nav" role="tablist" data-animate="fadeInUp" data-delay=".2">
                                        <li>
                                            <a data-toggle="tab" href="#ourHistory" data-secondary-target="#hostoryImage" role="tab">Our History</a>
                                        </li>
                                        <li>
                                            <a className="active" data-toggle="tab" href="#ourMission" data-secondary-target="#missionImage" role="tab">Mission</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#ourVision" data-secondary-target="#visionImage" role="tab">Vision</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" data-animate="fadeInUp" data-delay=".3">
                                        <div className="tab-pane fade" id="ourHistory" role="tabpanel">
                                            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                blanditiisyntium voluptatumniti atque corrupti quos dolores et quas
                                                molestias excepturi sint occaecati cupiditate non provident, similique
                                                sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                                dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                                man who chooses to enjoy a pleasure that has no annoying consequences,
                                                or one who avoids a pain that produces no Nam libero tempore, cum soluta
                                                nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                                placeat facere possimus, omnis voluptas assumenda dolor repellendus.</p>
                                            <blockquote>
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimm,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip Duis aute
                                                irure ex ea commodo consequat.
                                            </blockquote>
                                        </div>
                                        <div className="tab-pane fade show active" id="ourMission" role="tabpanel">
                                            <div className="tab-short-content">
                                                <blockquote>
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minimm, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    Duis aute irure ex ea commodo consequat.
                                                </blockquote>
                                                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiisyntium voluptatumniti atque corrupti quos dolores et quas
                                                    molestias excepturi sint occaecati cupiditate non provident,
                                                    similique sunt in culpa qui officia deserunt mollitia animi, id est
                                                    laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                    expedita distinctio. man who chooses to enjoy a pleasure that has no
                                                    annoying consequences, or one who avoids a pain that produces no Nam
                                                    libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                    impedit quo minus id quod maxime placeat facere possimus, omnis
                                                    voluptas assumenda dolor repellendus.</p>
                                                <a className="read-more" href="#">
                                                    <span>+</span>
                                                    Read More
                                                </a>
                                            </div>
                                            <div className="tab-long-content">
                                                <blockquote>
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minimm, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    Duis aute irure ex ea commodo consequat.
                                                </blockquote>
                                                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiisyntium voluptatumniti atque corrupti quos dolores et quas
                                                    molestias excepturi sint occaecati cupiditate non provident,
                                                    similique sunt in culpa qui officia deserunt mollitia animi, id est
                                                    laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                    expedita distinctio.</p>
                                                <p> man who chooses to enjoy a pleasure that has no annoying
                                                    consequences, or one who avoids a pain that produces no Nam libero
                                                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                                    quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                    assumenda dolor repellendus.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                                                    tenetur necessitatibus pariatur blanditiis, veritatis culpa
                                                    perspiciatis facere recusandae dolores aliquid sequi mollitia magni
                                                    eveniet esse. Quisquam nemo iusto, expedita deleniti.</p>
                                                <a className="read-more" href="#">
                                                    <span>-</span>
                                                    Read Less
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="ourVision" role="tabpanel">
                                            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                blanditiisyntium voluptatumniti atque corrupti quos dolores et quas
                                                molestias excepturi sint occaecati cupiditate non provident, similique
                                                sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                                dolorum fuga. Et harum quidem rerum facilis est et expedita
                                                distinctio.</p>
                                            <blockquote>
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimm,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip Duis aute
                                                irure ex ea commodo consequat.
                                            </blockquote>
                                            <p>Man who chooses to enjoy a pleasure that has no annoying consequences, or
                                                one who avoids a pain that produces no Nam libero tempore, cum soluta
                                                nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                                placeat facere possimus, omnis voluptas assumenda dolor repellendus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="hostoryImage" role="tabpanel">
                                        <div className="history-image double-bg">
                                            <img src={placeholder} alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="missionImage" role="tabpanel"
                                         data-animate="fadeInUp" data-delay=".1">
                                        <div className="history-image double-bg">
                                            <img src={placeholder} alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="visionImage" role="tabpanel">
                                        <div className="history-image double-bg">
                                            <img src={placeholder} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default About