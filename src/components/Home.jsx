'use client';

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';
import BookingModal from './BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');

  const openBooking = (car) => {
    setSelectedCar(car);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />
      <Hero openBooking={() => openBooking('Luxury Sedan')} />
      <Services />
      <CarSelection openBooking={openBooking} />
      <Testimonials />
      <ContactForm />
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        closeModal={() => setIsBookingOpen(false)}
        selectedCar={selectedCar}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Malik Car Rent</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a></li>
          <li><a href="#cars" className="text-gray-600 hover:text-blue-600 transition duration-300">Cars</a></li>
          <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition duration-300">Testimonials</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a></li>
        </ul>
        <button className="md:hidden text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Hero({ openBooking }) {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"></div>
        <img src="https://img.indianautosblog.com/2015/07/2016-Toyota-Fortuner-side-revealed-Australian-spec.jpg" alt="Luxury car" className="object-cover w-full h-full" />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">Experience Luxury on Wheels</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">Discover the best car rental service in Chandigarh Tricity</p>
        <button
          onClick={openBooking}
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: 'Wide Selection', description: 'Choose from our diverse fleet of vehicles', icon: '🚗' },
    { title: 'Affordable Rates', description: 'Competitive pricing for all budgets', icon: '💰' },
    { title: '24/7 Support', description: 'Round-the-clock customer assistance', icon: '🕰️' },
    { title: 'Easy Booking', description: 'Simple online reservation process', icon: '📱' },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarSelection({ openBooking }) {
  const cars = [
    { name: 'Ciaz', image: 'https://imgd.aeplcdn.com/1056x594/n/f2r6isa_1467592.jpg?q=80', price: '₹3200/day' },
    { name: 'Fortuner', image: 'https://th.bing.com/th/id/R.d7c0c7bd91d53be49ea52c0427e200ee?rik=bicnXxEXTDe71A&riu=http%3a%2f%2fwww.fastmotoring.com%2fwp-content%2fuploads%2f2012%2f08%2fFortuner.jpg&ehk=B1A%2feOD8DOc1oPvDBcMM7Go3OFv%2bHTgEPGBhKIw86D8%3d&risl=&pid=ImgRaw&r=0', price: '₹4000/day' },
    { name: 'i20', image: 'https://media.autoexpress.co.uk/image/private/s--qEd4X_J---/v1582106115/autoexpress/2020/02/01_29.jpg', price: '₹3000/day' },
    { name: 'Scorpio', image: 'https://www.financialexpress.com/wp-content/uploads/2022/09/mahindra-thar-updated-with-new-logo-colours-controls.jpg?resize=300', price: '₹4000/day' },
  ];

  return (
    <section id="cars" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.price}</p>
                <button
                  onClick={() => openBooking(car.name)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: 'Yajbir Malik', comment: 'Excellent service! The car was in perfect condition and the staff was very helpful.', rating: 5 },
    { name: 'Tushar', comment: 'Great experience with Malik Car Rent. Will definitely use their services again.', rating: 4 },
    { name: 'Ritesh', comment: 'Affordable prices and a wide range of cars to choose from. Highly recommended!', rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              <p className="mt-4 font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg p-3" />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg p-3" />
            <textarea placeholder="Your Message" className="border border-gray-300 rounded-lg p-3 h-32"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <p>© 2024 Malik Car Rent. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
