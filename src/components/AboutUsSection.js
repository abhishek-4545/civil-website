import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

function AboutUsSection() {
  const [aboutData, setAboutData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const aboutDoc = await getDoc(doc(db, "about-us", "content"));
        if (aboutDoc.exists()) {
          setAboutData(aboutDoc.data());
        }
        setError(null);
      } catch (error) {
        console.error("Error fetching about data: ", error);
        setError("Failed to load about us content");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading about us...</p>
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-16 px-2">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-2 mt-8">
          {aboutData.title || "About Us"}
        </h1>
        {aboutData.subtitle && (
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {aboutData.description || "We are a leading civil engineering company dedicated to delivering exceptional construction and infrastructure solutions. With years of experience and a commitment to quality, we transform visions into reality."}
            </p>
            
            {aboutData.mission && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">{aboutData.mission}</p>
              </div>
            )}
            
            {aboutData.vision && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">{aboutData.vision}</p>
              </div>
            )}
            
            {aboutData.values && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">{aboutData.values}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {aboutData.companyImage && (
              <div>
                <img 
                  src={aboutData.companyImage} 
                  alt="Our Company" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}
            
            {aboutData.teamImage && (
              <div>
                <img 
                  src={aboutData.teamImage} 
                  alt="Our Team" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
