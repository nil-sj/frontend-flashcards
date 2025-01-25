import React from 'react';

const FeaturedTestimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      name: 'John D.',
      feedback: 'Frontend Flashcards made it so easy to learn the fundamentals. Highly recommend it to anyone starting their web development journey!',
    },
    {
      name: 'Sarah T.',
      feedback: 'I love the simplicity and clarity of the flashcards. The examples really helped me understand CSS positioning!',
    },
    {
      name: 'Alex M.',
      feedback: 'The flashcards on JavaScript are perfect for quick revisions before interviews. A fantastic resource!',
    },
  ];

  return (
    <section className="sec-py bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">What Our Learners Say</h2>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 rounded shadow-sm border h-100">
                <p className="text-muted">"{testimonial.feedback}"</p>
                <h6 className="mt-3 fw-bold text-primary">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;