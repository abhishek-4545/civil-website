import React, { useEffect, useState, useRef } from 'react';
// ServicesSection import removed from Home.js

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
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-800 text-3xl font-bold">Vijay Civil Works</span>
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
            <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <div className="text-xs text-gray-500">Office Address</div>
                <div className="font-semibold text-gray-800">123 Main St, City, State 12345</div>
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
                <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 text-sm font-medium">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  Professional Civil Construction Services
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-800">
                    Building
                  </span>
                  <br />
                  <span className="text-yellow-600">
                    Dreams
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Together
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional civil construction services for residential and commercial projects. Quality construction, timely delivery, and excellence in every project.
              </p>
              {/* Inspirational Quote and Civil Work Description */}
              <div className="bg-yellow-50 py-8 px-4 shadow-inner">
                <div className="max-w-3xl mx-auto text-center">
                  <blockquote className="text-2xl italic font-semibold text-yellow-800 mb-4">“Great buildings begin with a strong foundation and a vision for the future.”</blockquote>
                  <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Civil work is the backbone of modern infrastructure, encompassing the design, construction, and maintenance of buildings, roads, bridges, and essential facilities. Our expertise ensures every project is built to last, combining quality craftsmanship with innovative solutions for a better tomorrow.
                  </p>
                </div>
              </div>
              

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
            <span className="inline-block bg-yellow-200 text-yellow-800 font-bold px-4 py-2 rounded-full text-lg mb-4">🛠️</span>
            <h2 className="mb-2 text-orange-600 font-semibold tracking-widest uppercase text-sm text-center">Why Choose Us</h2>
            <p className="text-black font-bold text-2xl md:text-3xl mb-4">Experience quality, reliability, and expert solutions for every project.<br/>Our dedicated team ensures your satisfaction from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">All-in-One Services</h3>
              <p className="text-gray-600">From plumbing and electrical work to painting, tiling, event lighting, and full-scale renovations — we cover it all under one roof.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">Affordable & Transparent Pricing</h3>
              <p className="text-gray-600">We believe in fair prices with no hidden costs. Quality work doesn’t have to come at a premium.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">Skilled & Experienced Team</h3>
              <p className="text-gray-600">Our professionals are trained, certified, and experienced across multiple trades to deliver top-notch workmanship.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">On-Time Project Delivery</h3>
              <p className="text-gray-600">We respect your time and commitments. Our team ensures punctual delivery without compromising on quality.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">Every space is unique. We tailor our services to meet your specific needs and vision.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">Reliable Customer Support</h3>
              <p className="text-gray-600">We’re always just a call away — whether it’s a new project, a repair, or post-service support.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">✅</span>
              <h3 className="text-xl font-bold mb-2">Quality Materials & Tools</h3>
              <p className="text-gray-600">We use only trusted materials and the latest tools to ensure lasting results.</p>
            </div>
          </div>
        </div>
      </div>

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
        <button className="group bg-yellow-600 hover:bg-yellow-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
          <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;

