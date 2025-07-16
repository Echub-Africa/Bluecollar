import React, { useRef } from "react";
import styled from "styled-components";
import { Phone, MapPin, Clock } from 'lucide-react';


const ArinRap = styled.div`
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }

        .col-lg-4 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
            padding: 0 15px;
        }

        .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 15px;
        }

        .u-s-m-b-30 {
            margin-bottom: 30px;
        }

        .u-h-100 {
            height: 100%;
        }

        /* Header */
        .header {
            text-align: center;
            padding: 60px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            margin-bottom: 50px;
        }

        .header h1 {
            font-size: 3rem;
            color: black;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header p {
            font-size: 1.2rem;
            color: rgba(42, 42, 42, 0.9);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Contact Info Section */
        .section__content {
            padding: 20px 0;
        }

        .contact-o {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px 30px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .contact-o:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .contact-o__wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .contact-o__icon {
            width: 80px;
            height: 80px;
            background: #0067d0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            transition: all 0.3s ease;
            color: white;
        }

        .contact-o:hover .contact-o__icon {
            transform: scale(1.1);
        }

        .contact-o__icon i {
            font-size: 2rem;
            color: white;
        }

        .contact-o__info-text-1 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .contact-o__info-text-2 {
            font-size: 1rem;
            color: #666;
            font-weight: 500;
        }

        /* Contact Form Section */
        .contact-form-section {
            padding: 60px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            margin-top: 50px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color:black;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .section-title p {
            font-size: 1.1rem;
            color: black;
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-form {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
            font-size: 1rem;
        }

        .form-control {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: rgba(255,255,255,0.9);
        }

        .form-control:focus {
            outline: none;
            border-color: #0067d0;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            background: white;
        }

        .form-control:hover {
            border-color: #0067d0;
        }

        textarea.form-control {
            resize: vertical;
            min-height: 120px;
        }

        .form-row {
            display: flex;
            gap: 20px;
        }

        .form-row .form-group {
            flex: 1;
        }

        .btn {
            background: #0067d0;;
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn-container {
            text-align: center;
            margin-top: 30px;
        }

        /* Success Message */
        .success-message {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 1px solid #c3e6cb;
            display: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .col-lg-4 {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .col-md-6 {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .header h1 {
                font-size: 2.5rem;
            }

            .contact-form {
                padding: 30px 20px;
            }

            .form-row {
                flex-direction: column;
                gap: 0;
            }

            .section-title h2 {
                font-size: 2rem;
            }
        }

        /* Loading Animation */
        .loading {
            display: none;
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Floating Animation */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .contact-o {
            animation: float 6s ease-in-out infinite;
        }

        .contact-o:nth-child(2) {
            animation-delay: 2s;
        }

        .contact-o:nth-child(3) {
            animation-delay: 4s;
        }
`;

const Arin = () => {
  

  return (
    <ArinRap>

    <div className="header">
        <div className="container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
    </div>


    <div className="section__content">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                    <div className="contact-o u-h-100">
                        <div className="contact-o__wrap">
                            <div className="contact-o__icon"><Phone className="fas fa-phone-volume" /></div>
                            <span className="contact-o__info-text-1">LET'S HAVE A CALL</span>
                            <span className="contact-o__info-text-2">(+0) 900 901 904</span>
                            <span className="contact-o__info-text-2">(+0) 900 901 902</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                    <div className="contact-o u-h-100">
                        <div className="contact-o__wrap">
                            <div className="contact-o__icon"><MapPin className="fas fa-map-marker-alt" /></div>
                            <span className="contact-o__info-text-1">OUR LOCATION</span>
                            <span className="contact-o__info-text-2">4247 Ashford Drive VA-20006</span>
                            <span className="contact-o__info-text-2">Virginia US</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                    <div className="contact-o u-h-100">
                        <div className="contact-o__wrap">
                            <div className="contact-o__icon"><Clock className="far fa-clock" /></div>
                            <span className="contact-o__info-text-1">WORK TIME</span>
                            <span className="contact-o__info-text-2">5 Days a Week</span>
                            <span className="contact-o__info-text-2">From 9 AM to 7 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section">
        <div className="container">
            <div className="section-title">
                <h2>Send Us a Message</h2>
                <p>Have a question or want to work together? Fill out the form below and we'll get back to you.</p>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="contact-form">
                        <div className="success-message" id="successMessage">
                            <i className="fas fa-check-circle"></i> Thank you for your message! We'll get back to you soon.
                        </div>
                        
                        <form id="contactForm">
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label for="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" className="form-control" required />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" id="email" name="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="form-control" />
                                </div>
                            </div>
                            
                          
                            
                            <div className="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" className="form-control" rows="5" required placeholder="Tell us about your project or inquiry..."></textarea>
                            </div>
                            
                            <div className="btn-container">
                                <button type="submit" className="btn">
                                    Send Message
                                    <span className="loading" id="loading"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

     
    </ArinRap>
  );
};

export default Arin;
