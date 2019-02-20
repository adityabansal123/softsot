import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo_orange from '../images/softsot.svg';
import logo_white from '../images/softsot2.svg';

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

        $(document).on('click', '.header-menu ul li', function () {
            activeHeaderMenu();
        });

        function activeHeaderMenu() {
            var thisPageUrl = window.location.pathname;
            $(".header-menu ul li a").each(function(){
                var attr = $(this).attr('href');
                if (attr === thisPageUrl) {
                    $(this).parent().addClass('active');
                }
            });
        }
        activeHeaderMenu();

    }
    render(){
        return(
            <header className="header">
                <div className="header-container header-style-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5 col-9">
                                <div className="logo">
                                    <a to="/">
                                        <img src={logo_white} alt="Crypto Cloud" width="162" height="23" />
                                        <img src={logo_orange} alt="Crypto Cloud" width="0" height="0" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-6 col-sm-3 col-3">
                                <nav>
                                    <div className='header-menu'>
                                        <ul>
                                            <li>
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li>
                                                <Link to='/team'>Team</Link>
                                                {/*<Link to='#'>Pages <i className="fa fa-angle-down"></i></Link>*/}
                                                {/*<ul>*/}
                                                    {/*<li><Link to="/team">Team</Link></li>*/}
                                                    {/*<li><Link to="">Testimonials</Link></li>*/}
                                                    {/*<li><Link to="">Data Centers</Link></li>*/}
                                                    {/*<li><Link to="">404</Link></li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li>
                                                <Link to='/blog'>Blog</Link>
                                            </li>
                                            <li>
                                                <Link to='/about'>About us</Link>
                                            </li>
                                            <li><Link to='/contact'>Contact</Link></li>
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