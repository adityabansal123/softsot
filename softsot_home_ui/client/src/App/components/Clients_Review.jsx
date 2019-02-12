import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './stylesheet/swiper.min.css';
import './stylesheet/ClientsReview.css';

class ClientsReview extends Component{
    render(){
        const params = {
            slidesPerView: 3,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            spaceBetween: 30
        }
        return(
            <section className="pt-120 pb-120 bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2 data-animate="fadeInUp" data-delay=".1">What Client’s Say About Us</h2>
                        <span data-animate="fadeInUp" data-delay=".2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</span>
                    </div>

                    <div className="swiper-container home-review-slider home-review-slider-two">
                        <div className="swiper-wrapper">
                            <Swiper {...params}>
                            <div className="swiper-slide">
                                <p>On the other hand, we denounce with us indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment</p>
                                <h3>Tina D. Warner <span>(Australia)</span></h3>
                            </div>

                            <div className="swiper-slide">
                                <p>On the other hand, we denounce with us indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment</p>
                                <h3>Tina D. Warner <span>(Australia)</span></h3>
                            </div>

                            <div className="swiper-slide">
                                <p>On the other hand, we denounce with us indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment</p>
                                <h3>Tina D. Warner <span>(Australia)</span></h3>
                            </div>

                            <div className="swiper-slide">
                                <p>On the other hand, we denounce with us indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment</p>
                                <h3>Tina D. Warner <span>(Australia)</span></h3>
                            </div>
                            </Swiper>
                        </div>
                    </div>

                    <div className="swiper-pagination review-swiper-pagination"></div>
                </div>
            </section>
        );
    }
}
export default ClientsReview