import React, { useEffect, useState, useRef } from 'react';
// ServicesSection import removed from Home.js
import TestimonialsSection from "./components/TestimonialsSection";

// Intersection Observer for scroll-reveal
function useSectionInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Home() {
  // Section refs and visibility
  const [heroRef, heroVisible] = useSectionInView();

  // No scroll handler needed for SERVICES
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar (no working time) */}
      
      {/* Info Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo3.png" alt="Vijay Civil Works Logo" className="w-12 h-12 mr-4 rounded-lg border-2 border-white object-contain" />
            <span className="text-gray-600 text-3xl font-bold">Vijay Civil Works</span>
          </div>
          {/* Info Items */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10">
            <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M8 5H6a2 2 0 00-2 2v3a2 2 0 002 2h2m0 0v6m0 0H6a2 2 0 01-2-2v-3a2 2 0 012-2h2m0 0h8" /></svg>
              <div>
                <div className="text-xs text-gray-500">Send Your Mail</div>
                <div className="font-semibold text-gray-800">support@vijaycivilworks.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <div>
                <div className="text-xs text-gray-500">Phone Number</div>
                <div className="font-semibold text-gray-800">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Bar - White and Gold, only 4 items */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-10">
              <button type="button" className="text-yellow-600 font-bold border-b-2 border-yellow-500 px-4 py-1 transition-colors duration-200">HOME</button>
              <button
                type="button"
                className="text-gray-800 hover:text-yellow-600 font-semibold px-4 py-1 transition-colors duration-200"
                onClick={() => window.location.href = '/about'}
              >
                ABOUT US
              </button>
              <button
                type="button"
                className="text-gray-800 hover:text-yellow-600 font-semibold px-4 py-1 transition-colors duration-200"
                onClick={() => window.location.href = '/services'}
              >
                SERVICES
              </button>
              <button
                type="button"
                className="text-gray-800 hover:text-yellow-600 font-semibold px-4 py-1 transition-colors duration-200"
                onClick={() => window.location.href = '/projects'}
              >
                PROJECTS
              </button>
            </div>
            <button
              className="ml-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg text-base font-semibold shadow transition-all duration-300"
              onClick={() => window.location.href = '/callback'}
            >
              Request Callback
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative bg-gradient-to-r from-yellow-50 to-amber-50 py-20 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-left text-blue-100" style={{ color: '#3b82f6' }}>
                  <span className="block text-yellow-500" style={{ color: '#BA8A00' }}>We Build. We Fix. We Upgrade.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl text-left">
                Ghar Se Ghar Tak — Complete Civil Solutions. Quality craftsmanship, reliable service, and competitive pricing for all your construction needs.
              </p>
              

              {/* Contact Info */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Call Us</div>
                    <div className="font-semibold text-gray-800">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Project Timeline</div>
                    <div className="font-semibold text-gray-800">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section moved to AboutUsSection.js and will be shown via navigation */}

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-200 text-yellow-500 font-bold px-4 py-2 rounded-full text-lg mb-4">🛠️</span>
            <h2 className="mb-2 text-yellow-500 font-bold text-4xl md:text-3xl text-center uppercase tracking-wider">WHY CHOOSE US</h2>
            <p className="text-black font-semibold text-base md:text-lg mb-4">We deliver reliable, affordable, and customized civil solutions for your every need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">All-in-One Services</h3>
              <p className="text-gray-600">From plumbing and electrical work to painting, tiling, event lighting, and full-scale renovations — we cover it all under one roof.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">💰</span>
              <h3 className="text-xl font-bold mb-2">Affordable & Transparent Pricing</h3>
              <p className="text-gray-600">We believe in fair prices with no hidden costs. Quality work doesn’t have to come at a premium.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">🧑‍�</span>
              <h3 className="text-xl font-bold mb-2">Skilled & Experienced Team</h3>
              <p className="text-gray-600">Our professionals are trained, certified, and experienced across multiple trades to deliver top-notch workmanship.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">⏱️</span>
              <h3 className="text-xl font-bold mb-2">On-Time Project Delivery</h3>
              <p className="text-gray-600">We respect your time and commitments. Our team ensures punctual delivery without compromising on quality.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">🎯</span>
              <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">Every space is unique. We tailor our services to meet your specific needs and vision.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
              <span className="text-3xl mb-4">🔒</span>
              <h3 className="text-xl font-bold mb-2">Quality Materials & Tools</h3>
              <p className="text-gray-600">We use only trusted materials and the latest tools to ensure lasting results.</p>
            </div>
          </div>
        </div>
      </div>



      <TestimonialsSection />

      {/* Services Section removed: now on its own page */}



      {/* Pricing Section removed as requested */}

      {/* Team Section removed as requested */}

      {/* Projects/Portfolio Section moved to ProjectsSection.js and will be shown via navigation */}


      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                                 <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                                 <span className="text-xl font-bold">Vijay Civil Works</span>
              </div>
                             <p className="text-gray-300 mb-4">
                 Professional civil construction services for residential and commercial projects.
               </p>
              <div className="flex space-x-4">
                <button type="button" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button type="button" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button type="button" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
              </div>
            </div>
            
                         <div>
               <h3 className="text-lg font-semibold mb-4">Services</h3>
               <ul className="space-y-2 text-gray-300">
                 <li><button type="button" className="hover:text-white transition-colors duration-300">Residential Construction</button></li>
                 <li><button type="button" className="hover:text-white transition-colors duration-300">Commercial Construction</button></li>
                 <li><button type="button" className="hover:text-white transition-colors duration-300">Infrastructure Projects</button></li>
                 <li><button type="button" className="hover:text-white transition-colors duration-300">Road Construction</button></li>
                 <li><button type="button" className="hover:text-white transition-colors duration-300">Bridge Development</button></li>
               </ul>
             </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button type="button" className="hover:text-white transition-colors duration-300">About Us</button></li>
                <li><button type="button" className="hover:text-white transition-colors duration-300">Our Team</button></li>
                <li><button type="button" className="hover:text-white transition-colors duration-300">Careers</button></li>
                <li><button type="button" className="hover:text-white transition-colors duration-300">Blog</button></li>
                <li><button type="button" className="hover:text-white transition-colors duration-300">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Main St, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                                     <span>info@vijaycivilworks.com</span>
                </div>
              </div>
            </div>
          </div>
          
                     <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
             <p>&copy; 2024 Vijay Civil Works. All rights reserved.</p>
           </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.688-1.938A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.09 0-4.13-.547-5.91-1.583l-.423-.25-4.563 1.146 1.188-4.438-.275-.434C5.547 18.13 5 16.59 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.01-7.26c-.33-.165-1.95-.963-2.25-1.073-.3-.11-.52-.165-.74.165-.22.33-.85 1.073-1.04 1.293-.19.22-.38.247-.71.082-.33-.165-1.39-.513-2.65-1.635-.98-.872-1.64-1.948-1.83-2.278-.19-.33-.02-.508.145-.673.15-.15.33-.39.495-.585.165-.195.22-.33.33-.55.11-.22.055-.413-.027-.578-.082-.165-.74-1.78-1.01-2.44-.267-.64-.54-.55-.74-.56-.19-.008-.413-.01-.635-.01-.22 0-.578.082-.88.413-.3.33-1.15 1.123-1.15 2.74 0 1.617 1.18 3.18 1.345 3.4.165.22 2.32 3.55 5.63 4.83.788.31 1.403.495 1.883.633.792.225 1.513.193 2.08.117.635-.082 1.95-.797 2.23-1.566.275-.77.275-1.43.192-1.566-.082-.137-.3-.22-.63-.385z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;

