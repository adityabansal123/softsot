import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import $ from "jquery";

class Footer extends Component{
    componentDidMount() {
        var backToTopBtn = $('.back-to-top');

        if (backToTopBtn.length) {
            var scrollTrigger = 400, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        backToTopBtn.addClass('show');
                    } else {
                        backToTopBtn.removeClass('show');
                    }
                };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }
    render() {
        return (
            <footer className="footer text-light bg-secondary">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer">
                                    <h2 data-animate="fadeInUp" data-delay="0">Contact Us</h2>
                                    <ul className="footer-contact-info">
                                        <li data-animate="fadeInUp" data-delay=".05">
                                            <i className="fa fa-phone"></i>
                                            <a href="tel:+123456789">(+1) 123-456-789</a>,
                                            <a href="tel:+123456789">(+1) 987-654-321</a>
                                        </li>
                                        <li data-animate="fadeInUp" data-delay=".1">
                                            <i className="fa fa-envelope-o"></i>
                                            <a href="mailto:john-doe@example.com">john-doe@example.com</a>
                                        </li>
                                        <li data-animate="fadeInUp" data-delay=".15"><i
                                            className="fa fa-map-marker"></i>0123
                                            Cameron Road, Niagara Falls, NY 0123
                                        </li>
                                    </ul>
                                    <ul className="footer-social-icons">
                                        <li data-animate="fadeInUp" data-delay=".2"><a href="#" target="_blank"><i
                                            className="fa fa-facebook"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".25"><a href="#" target="_blank"><i
                                            className="fa fa-twitter"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".3"><a href="#" target="_blank"><i
                                            className="fa fa-google-plus"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".35"><a href="#" target="_blank"><i
                                            className="fa fa-linkedin"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".4"><a href="#" target="_blank"><i
                                            className="fa fa-feed"></i></a></li>
                                        <li data-animate="fadeInUp" data-delay=".45"><a href="#" target="_blank"><i
                                            className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer">
                                    <h2 data-animate="fadeInUp" data-delay=".4">Recent News</h2>
                                    <div className="single-footer-post" data-animate="fadeInUp" data-delay=".45">
                                        <a href="#">Microsoft announces general availability of Azure Event Grid</a>
                                        <span><i className="fa fa-calendar-o"></i><a href="#">Jan 19, 2018</a></span>
                                    </div>
                                    <div className="single-footer-post" data-animate="fadeInUp" data-delay=".5">
                                        <a href="#">Top 6 trends impacting enterprise mobility arround world in 2018</a>
                                        <span><i className="fa fa-calendar-o"></i><a href="#">Jan 19, 2018</a></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer">
                                    <h2 data-animate="fadeInUp" data-delay=".5">Resource & Support</h2>
                                    <ul className="footer-links">
                                        <li data-animate="fadeInUp" data-delay=".55"><a href="#"><i
                                            className="fa fa-angle-right"></i>How to Transfer a Website</a></li>
                                        <li data-animate="fadeInUp" data-delay=".6"><a href="#"><i
                                            className="fa fa-angle-right"></i>Search Advertising</a></li>
                                        <li data-animate="fadeInUp" data-delay=".65"><a href="#"><i
                                            className="fa fa-angle-right"></i>Affiliate Program</a></li>
                                        <li data-animate="fadeInUp" data-delay=".7"><a href="#"><i
                                            className="fa fa-angle-right"></i>Start Watch Tutorials</a></li>
                                        <li data-animate="fadeInUp" data-delay=".75"><a href="#"><i
                                            className="fa fa-angle-right"></i>Start a Web Hosting Business</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer">
                                    <h2 data-animate="fadeInUp" data-delay=".75">Newsletter</h2>
                                    <p data-animate="fadeInUp" data-delay=".8">Sign up to Newsletter to get our Latest
                                        News &
                                        Special Offers</p>
                                    <form className="needs-validation" data-animate="fadeInUp" data-delay=".85" action="" method="post" name="mc-embedded-subscribe-form" target="_blank">
                                        <input className="form-control" type="email" name="EMAIL" autoComplete="off" placeholder="Your E-mail Address" required />
                                            <button type="submit"><i className="fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <p data-animate="fadeInDown" data-delay=".9">Copyright &copy; 2018. All rights reserved <a href="#">fairoxservices</a>.</p>
                    </div>
                </div>
            <div className="back-to-top"><a href="#"><i className="fa fa-hand-pointer-o"></i></a></div>
            </footer>
    );
    }
}
export default Footer