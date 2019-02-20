import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../common/NavBar";
import Footer from "../../common/Footer";
import News from '../../images/news.jpg';
import '../components/stylesheet/Blog.css';

class Blog extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <section className="bg-primary top-spacing">
                    <div className="container">
                        <div className="page-title text-white text-center">
                            <h2 data-animate="fadeInUp" data-delay="1.2">Blog</h2>
                            <ul className="list-inline" data-animate="fadeInUp" data-delay="1.4">
                                <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                                <li>/</li>
                                <li><a href="/blog">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-120 pb-120">
                    <div className="container">
                        <div className="blog">
                            <div className="row isotope">
                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".1">
                                        <a href="#">
                                            <img src={News} alt=""/>
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">Juniper and TIM collaborate to work infrastructure</a></h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".2">
                                        <a href="#">
                                            <img src={News} alt="" />
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">Cisco unveils its own container platform for multicloud
                                            environments</a></h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".1">
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">Apple adopts the AI move, introduces new machine learning API
                                            framework</a></h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".2">
                                        <a href="#">
                                            <img src={News} alt="" />
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">5 Cloud Computing Predicions for 2018 that will define.</a></h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".1">
                                        <a href="#">
                                            <img src={News} alt="" />
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">Megaport unveils virtual cloud router for cloud Hosting.</a>
                                        </h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".2">
                                        <a href="#">
                                            <img src={News} alt="" />
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">5 Cloud Computing Predicions for 2018 that will define.</a></h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".1">
                                        <a href="#">
                                            <img src={News} alt="" />
                                        </a>
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">Megaport unveils virtual cloud router for cloud Hosting.</a>
                                        </h2>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-latest-news" data-animate="fadeInUp" data-delay=".2">
                                        <ul className="post-details list-inline">
                                            <li><i className="fa fa-calendar-o"></i><a href="#">Jan 04, 2018</a></li>
                                            <li><i className="fa fa-comment-o"></i><a href="#">0 Comment</a></li>
                                        </ul>
                                        <h2><a href="#">The ransomware attack continues, affecting systems worldwide</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="pagination">
                            <li data-animate="fadeInUp" data-delay=".1"><a href="#"><i className="fa fa-angle-left"></i>Newest</a>
                            </li>
                            <li className="active" data-animate="fadeInUp" data-delay=".15"><a href="#">01</a></li>
                            <li data-animate="fadeInUp" data-delay=".2"><a href="#">02</a></li>
                            <li data-animate="fadeInUp" data-delay=".25"><a href="#">03</a></li>
                            <li data-animate="fadeInUp" data-delay=".3"><a href="#">04</a></li>
                            <li data-animate="fadeInUp" data-delay=".35"><a href="#">05</a></li>
                            <li data-animate="fadeInUp" data-delay=".4"><a href="#">oldest<i
                                className="fa fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Blog