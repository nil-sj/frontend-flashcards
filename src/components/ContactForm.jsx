import React from "react";
import messageImage from '../assets/Message-Illustration.png'; // Replace with actual image path

const ContactForm = () => (
    <section className="sec-py bg-light">
      <div className="container">
        <h2 className="section-heading text-center">Get in Touch!</h2>
            <p className="lead text-muted text-center mb-5">
            Encountering issues or errors in our flashcards? Have a question or suggestion? Or just want to share your thoughts and feedback? Whatever the reason, we'd love to hear from you! Your input helps us improve the platform and create the best possible experience for our users.
            </p>
        <div className="row align-items-center">
          {/* Illustration Column */}
          <div className="col-md-6 text-center">
            <img
              src={messageImage}
              alt="Send Us Your Message"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>
          {/* Text Column */}
          <div className="col-md-6">
            <div className="mx-auto text-center p-4 bg-white shadow rounded">
                <form name="contact" method="POST" data-netlify="true">
                    <div className="mb-3">
                        <input type="text" name="name" placeholder="Your Name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" placeholder="Your Email" className="form-control" required />
                        <input type="hidden" name="form-name" value="name_of_my_form" />
                    </div>
                    <div className="mb-3">
                        <select name="subject" className="form-select" required>
                            <option value="">Select Subject</option>
                            <option value="support">Support Request</option>
                            <option value="error">Error Reporting</option>
                            <option value="testimonial">Testimonial</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="message" placeholder="Your Message" className="form-control" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default ContactForm;
