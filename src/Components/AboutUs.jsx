import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f0f8ff] text-gray-800 px-4 py-10 lg:px-20">
      {/* About Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
          About Us
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Welcome to our Service Portal! We’re dedicated to providing reliable, efficient,
          and friendly services tailored to your needs. Our team values trust,
          quality, and customer satisfaction above all.
        </p>
        <p className="text-md text-gray-700 text-center mt-4 max-w-2xl mx-auto">
          With a focus on innovation and support, we aim to make your experience smooth and stress-free.
        </p>
      </section>

      {/* Mission Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Our mission is to empower individuals and businesses through top-notch services and unwavering
          support. We believe in building relationships based on trust, transparency, and results.
        </p>
      </section>

      {/* Core Values */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
          <p>We always act with honesty and uphold high ethical standards in everything we do.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
          <p>We are committed to consistently delivering high-quality services that exceed expectations.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Support</h3>
          <p>We’re here for our clients — offering guidance, care, and responsive solutions.</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-primary text-white py-10 px-4 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6">Have questions or need our help? Get in touch today!</p>
        <a
          href="/contact"
          className="btn bg-white text-primary font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
