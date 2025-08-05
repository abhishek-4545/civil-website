import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const testimonialsQuery = query(collection(db, "testimonials"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(testimonialsQuery);
        const testimonialsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTestimonials(testimonialsData);
        setError(null);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading testimonials...</p>
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
          What Our <span className="text-yellow-600">Clients Say</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about our services.
        </p>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No testimonials available yet.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for customer reviews!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name?.charAt(0) || "C"}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">{testimonial.name || "Anonymous"}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location || "Location"}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.message || "Great service!"}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Join our satisfied customers and experience the difference quality makes.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
