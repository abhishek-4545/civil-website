import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "./components/Header";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallbackForm from "./components/CallbackForm";

function Home() {
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const homeDoc = await getDoc(doc(db, "homepage", "content"));
        if (homeDoc.exists()) {
          setHomeData(homeDoc.data());
        }
        setError(null);
      } catch (error) {
        console.error("Error fetching home data: ", error);
        setError("Failed to load homepage content");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading homepage...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {homeData.heroTitle || "Building Tomorrow's Infrastructure Today"}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                {homeData.heroSubtitle || "Expert Civil Engineering Solutions"}
              </p>
              <p className="text-lg mb-8 text-blue-200">
                {homeData.heroDescription || "We specialize in construction, infrastructure development, and civil engineering projects. Our experienced team delivers quality results on time and within budget."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
                  View Projects
                </button>
              </div>
            </div>
            {homeData.heroImage && (
              <div className="hidden lg:block">
                <img 
                  src={homeData.heroImage} 
                  alt="Civil Engineering" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {homeData.aboutTitle || "About Our Company"}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {homeData.aboutDescription || "We are a leading civil engineering company with years of experience in construction, infrastructure development, and project management. Our commitment to quality and innovation sets us apart in the industry."}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            {homeData.aboutImage && (
              <div>
                <img 
                  src={homeData.aboutImage} 
                  alt="About Us" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {homeData.servicesTitle || "Our Services"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {homeData.servicesSubtitle || "Comprehensive civil engineering solutions for all your construction needs"}
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {homeData.projectsTitle || "Our Projects"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {homeData.projectsSubtitle || "Explore our portfolio of successful construction and infrastructure projects"}
            </p>
          </div>
          <ProjectsSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {homeData.contactTitle || "Ready to Start Your Project?"}
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                {homeData.contactDescription || "Contact us today to discuss your project requirements and get a free consultation. Our team is ready to help bring your vision to life."}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    📞
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    📧
                  </div>
                  <span>info@civilengineering.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    📍
                  </div>
                  <span>123 Construction Ave, City, State 12345</span>
                </div>
              </div>
            </div>
            {homeData.contactImage && (
              <div>
                <img 
                  src={homeData.contactImage} 
                  alt="Contact Us" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallbackForm />
        </div>
      </section>
    </div>
  );
}

export default Home;

