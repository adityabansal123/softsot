import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../common/NavBar";
import Footer from "../../common/Footer";
import '../components/stylesheet/ContactUs.css';

class ContactUs extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <section className="bg-primary top-spacing">
                    <div className="container">
                        <div className="page-title text-white text-center">
                            <h2 data-animate="fadeInUp" data-delay="1.2">Contact</h2>
                            <ul className="list-inline" data-animate="fadeInUp" data-delay="1.4">
                                <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                                <li>/</li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="pt-120">
                    {/*<div className="container">*/}
                        {/*<div className="map" data-trigger="map"*/}
                             {/*data-map-options='{"latitude": "37.386052", "longitude": "-122.083851", "zoom": "15", "api_key": "AIzaSyCjkssBA3hMeFtClgslO2clWFR6bRraGz0"}'></div>*/}
                    {/*</div>*/}
                </div>

                <section className="pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact-info">
                                    <h2 className="zigzag-border" data-animate="fadeInUp" data-delay=".1">Contact
                                        Information</h2>
                                    <p data-animate="fadeInUp" data-delay=".2">Temporibus autem quibusdam et aut
                                        officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>
                                    <ul className="footer-contact-info">
                                        <li data-animate="fadeInUp" data-delay=".1">
                                            <i className="fa fa-phone"></i>
                                            <a href="tel:+123456789">(+1) 123-456-789</a>,
                                            <a href="tel:+123456789">(+1) 987-654-321</a>
                                        </li>
                                        <li data-animate="fadeInUp" data-delay=".2">
                                            <i className="fa fa-envelope-o"></i>
                                            <a href="mailto:john-doe@example.com">john-doe@example.com</a>
                                        </li>
                                        <li data-animate="fadeInUp" data-delay=".3"><i className="fa fa-map-marker"></i>0123
                                            Cameron Road, Niagara Falls, NY 0123
                                        </li>
                                    </ul>
                                    <ul className="footer-social-icons">
                                        <li data-animate="fadeInUp" data-delay=".1"><a href="#" target="_blank"><i
                                            className="fa fa-facebook"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".2"><a href="#" target="_blank"><i
                                            className="fa fa-twitter"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".3"><a href="#" target="_blank"><i
                                            className="fa fa-google-plus"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".4"><a href="#" target="_blank"><i
                                            className="fa fa-linkedin"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".5"><a href="#" target="_blank"><i
                                            className="fa fa-feed"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".6"><a href="#" target="_blank"><i
                                            className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="comment-form">
                                    <form action="sendmail.php" method="post">
                                        <textarea rows="8" name="contactMessage" className="form-control"
                                                  placeholder="Write your text" data-animate="fadeInUp" data-delay=".1"
                                                  required></textarea>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <input type="text" name="contactName" className="form-control"
                                                       placeholder="Name" data-animate="fadeInUp" data-delay=".2"
                                                       required />
                                            </div>
                                            <div className="col-md-4">
                                                <input type="email" name="contactEmail" className="form-control"
                                                       placeholder="E-mail" data-animate="fadeInUp" data-delay=".3"
                                                       required />
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" name="contactSubject" className="form-control"
                                                       placeholder="Subject" data-animate="fadeInUp" data-delay=".4"
                                                       required />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" data-animate="fadeInUp" data-delay=".5">Post
                                            Comment
                                        </button>
                                    </form>
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

export default ContactUs