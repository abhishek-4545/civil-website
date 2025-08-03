import React from "react";

function AboutUsSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images and Experience Badge */}
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="flex flex-row space-x-6 mb-8 w-full justify-center lg:justify-start">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Plumber at work" className="w-48 h-64 object-cover rounded-2xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Plumber with tools" className="w-48 h-64 object-cover rounded-2xl shadow-lg" />
            </div>
            <div className="absolute left-1/2 lg:left-24 -bottom-8 transform -translate-x-1/2 lg:translate-x-0 z-10 min-w-[220px]">
              <div className="bg-gray-900 px-8 py-4 rounded-xl shadow-xl text-center">
                <span className="text-3xl font-bold text-orange-500">10+ Years</span>
                <div className="text-white text-lg font-semibold">Working Experience</div>
              </div>
            </div>
          </div>
          {/* Right: About Us Content */}
          <div className="pt-12 lg:pt-0">
            <div className="mb-2 text-orange-600 font-semibold tracking-widest uppercase text-sm text-center lg:text-left">About Us</div>
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight text-center lg:text-left">Complete Solutions for Every Corner of Your Home.</div>
            <p className="text-gray-600 text-lg mb-8 text-center lg:text-left">Vijay Civil Works is your one-stop solution for all civil and general maintenance needs. We specialize in a wide range of services including construction, electrical work, event lighting and sound, false ceiling installation, general maintenance, home renovation, painting, plumbing, tank cleaning, tiling, and wooden work. Our experienced team is committed to delivering quality, reliability, and customer satisfaction in every project—whether it's a new build, a renovation, or essential maintenance for your home or business.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-2 pl-4">
                  <li>Be the most trusted provider of comprehensive civil, electrical, and maintenance services</li>
                  <li>Set the standard for quality, innovation, and customer care in our community</li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-2 pl-4">
                  <li>Deliver exceptional construction, renovation, and maintenance solutions</li>
                  <li>Utilize skilled professionals and modern techniques</li>
                  <li>Commit to exceeding client expectations in every service we offer</li>
                </ul>
              </div>
            </div>
            <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300">Know Us More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
