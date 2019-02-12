import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../common/NavBar.jsx';
import Footer from '../../common/Footer.jsx';
import ClientsReview from '../components/Clients_Review.jsx';
import performance from '../../images/performance.png';
import sequrity from '../../images/security.png';
import spam from '../../images/spam-guard.png';
import support from '../../images/support.png';
import '../components/Homepage.css';
import $ from "jquery";

class Home extends Component{
    componentDidMount() {
        var mainBanner = $('.main-banner');

        mainBanner.on('click', '.scroll-down p', function(){
            var target = mainBanner.next();

            if ( target.length ) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
            }
        });
    }

  render(){
	return (
		<div>
			<NavBar/>
            <section className="main-banner main-banner-style-two text-white">
                <div className="container">
                    <div className="row banner-content align-items-center">
                        <div className="col-lg-8">
                            <span>Making World Digital</span>
                            <h2>Discover the joy of your <br/>own Website</h2>
                            <p>At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis raesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias.</p>
                            <ul className="list-inline">
                                <li><a className="btn" href="#">Check Features</a></li>
                                <li><a className="btn btn-primary" href="#">Explore More</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="scroll-down">
                    <p>
                        <span>scroll down</span>
                        <i className="fa fa-angle-down scrollBounce"></i>
                    </p>
                </div>
            </section>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="section-title">
                        <h2 data-animate="fadeInUp" data-delay=".1">Who We Are ?</h2>
                        <span data-animate="fadeInUp" data-delay=".2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</span>
                    </div>

                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-reason" data-animate="fadeInUp" data-delay=".1">
                                <img src={performance} alt="" />
                                    <h3>High Performance</h3>
                                    <p>Sed ut perspiciatis unde omnis isterror sit accusantium</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-reason" data-animate="fadeInUp" data-delay=".3">
                                <img src={sequrity} alt="" />
                                    <h3>Enhance Security</h3>
                                    <p>Sed ut perspiciatis unde omnis isterror sit accusantium</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-reason" data-animate="fadeInUp" data-delay=".5">
                                <img src={spam} alt="" />
                                    <h3>Spam Guard</h3>
                                    <p>Sed ut perspiciatis unde omnis isterror sit accusantium</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-reason" data-animate="fadeInUp" data-delay=".7">
                                <img src={support} alt="" />
                                    <h3>Unbeatable Support</h3>
                                    <p>Sed ut perspiciatis unde omnis isterror sit accusantium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientsReview/>
            <Footer/>
	  </div>
	);
  }
}
export default Home;
