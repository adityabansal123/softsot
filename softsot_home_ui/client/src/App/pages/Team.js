import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import placeholder from '../../images/member.jpg';
import '../components/Team.css';

class Team extends Component{
	render() {
	  return (
	    <div>
			<Navbar/>
            <section className="bg-primary top-spacing">
                <div className="container">
                    <div className="page-title text-white text-center">
                        <h2 data-animate="fadeInDown" data-delay="1.2">our team</h2>
                        <ul className="list-inline" data-animate="fadeInDown" data-delay="1.4">
                            <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                            <li>/</li>
                            <li><Link to="/team">Our team</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="team-members pt-120 pb-120">
                <div className="container">
                    <div className="section-title">
                        <h2 data-animate="fadeInDown" data-delay=".1">Our Team Members</h2>
                        <span data-animate="fadeInDown" data-delay=".3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</span>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".1">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Robert A. Frazier</h3>
                                        <span>Chief Operating Officer (CEO)</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Robert A. Frazier</h3>
                                            <span>Chief Operating Officer (CEO)</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><a href="#" target="_blank"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".2">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Jane Doe</h3>
                                        <span>Head of Creative</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Jane Doe</h3>
                                            <span>Head of Creative</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><a href="#" target="_blank"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".3">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Ricky T. Rodriguez</h3>
                                        <span>Cheif Technical Officer (CTO)</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Ricky T. Rodriguez</h3>
                                            <span>Cheif Technical Officer (CTO)</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><a href="#" target="_blank"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".4">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Natalia Petrovna</h3>
                                        <span>Senior Marketing Executive</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Natalia Petrovna</h3>
                                            <span>Senior Marketing Executive</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><a href="#" target="_blank"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".5">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Ricky T. Rodriguez</h3>
                                        <span>Cheif Technical Officer (CTO)</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Ricky T. Rodriguez</h3>
                                            <span>Cheif Technical Officer (CTO)</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><a href="#" target="_blank"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".6">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Natalia Petrovna</h3>
                                        <span>Senior Marketing Executive</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Natalia Petrovna</h3>
                                            <span>Senior Marketing Executive</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".7">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Robert A. Frazier</h3>
                                        <span>Chief Operating Officer (CEO)</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Robert A. Frazier</h3>
                                            <span>Chief Operating Officer (CEO)</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-member" data-animate="fadeInDown" data-delay=".8">
                                <img src={placeholder} alt="" />
                                    <div className="member-info">
                                        <h3>Jane Doe</h3>
                                        <span>Head of Creative</span>
                                    </div>
                                    <div className="member-hover-wrap bounceIn d-flex align-items-center">
                                        <div className="member-hover">
                                            <h3>Jane Doe</h3>
                                            <span>Head of Creative</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos</p>
                                            <ul className="list-inline">
                                                <li><Link to="" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                </li>
                                                <li><Link to="" target="_blank"><i className="fa fa-feed"></i></Link></li>
                                                <li><Link to="" target="_blank"><i className="fa fa-instagram"></i></Link>
                                                </li>
                                            </ul>
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
export default Team;
