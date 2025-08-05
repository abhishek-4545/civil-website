import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const servicesQuery = query(collection(db, "services"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(servicesQuery);
        const servicesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setServices(servicesData);
        setError(null);
      } catch (error) {
        console.error("Error fetching services: ", error);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
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
          Our <span className="text-yellow-600">Services</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We offer comprehensive civil engineering services to meet all your construction and infrastructure needs.
        </p>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services available yet.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for our service offerings!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                    {service.icon || "🏗️"}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                {service.imageUrl && (
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-300">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
