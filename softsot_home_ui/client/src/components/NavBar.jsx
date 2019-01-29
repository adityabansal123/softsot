import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
// import './style.css';

class Navbar extends Component{
    componentDidMount() {
        var headerContainer = $('.header-container');

        $(window).on('scroll', function(){
            if($(window).scrollTop() >= 15){
                headerContainer.addClass('sticking');
            }
            else {
                headerContainer.removeClass('sticking');
            }
        });


    }
    render(){
        return(
            <header className="header">
                <div className="header-container header-style-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5 col-9">
                                <div className="logo">
                                    <a to="index.html">

                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-6 col-sm-3 col-3">
                                <nav>
                                    <div className='header-menu'>
                                        <ul>
                                            <li className="active">
                                                <a to='#'>Home <i className="fa fa-angle-down"></i></a>
                                                <ul>
                                                    <li className="active"><a to="index.html">Home V1</a></li>
                                                    <li><a to="home-2.html">Home V2</a></li>
                                                    <li><a to="home-3.html">Home V3</a></li>
                                                </ul>
                                            </li>
                                            <li><a to='domain.html'>Domain</a></li>
                                            <li><a
                                                to='http://billing.ywhmcs.com/cart.php?systpl=CryptoCloud'>WHMCS</a>
                                            </li>
                                            <li>
                                                <a to='#'>Pages <i className="fa fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a to="about.html">About</a></li>
                                                    <li><a to="team.html">Team</a></li>
                                                    <li><a to="testimonials.html">Testimonials</a></li>
                                                    <li><a to="data-centers.html">Data Centers</a></li>
                                                    <li><a to="">404</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a to='#'>Blog <i className="fa fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a to="blog.html">Full width Blog</a></li>
                                                    <li><a to="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                                                    <li><a to="blog-sidebar-right.html">Blog Sidebar Right</a></li>
                                                    <li><a to="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a to='contact.html'>Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 d-none d-sm-block">
                                <div className="register-button">
                                    <a className="btn btn-primary" to="">Client
                                        Area</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Navbar