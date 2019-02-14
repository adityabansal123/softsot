import React, { Component } from 'react';
import './stylesheet/NeedAssistance.css';

class NeedAssistance extends Component{
    render(){
        return(
            <section className="assistance bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-8">
                            <div className="assistant-title">
                                <h2 data-animate="fadeInUp" data-delay=".1">Need Assistance ?</h2>
                                <span data-animate="fadeInUp" data-delay=".2">Call Our Expert Customer Care Executive <a
                                    href="tel:123456789">(1) 123-456-789</a> 24/7 in a Day</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="expert-button">
                                <a href="contact.html" className="btn btn-primary" data-animate="fadeInUp"
                                   data-delay=".3">Contact With Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default NeedAssistance