import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const services = [
  {
    icon: "🏗️",
    title: "Construction",
    description: "Residential and commercial construction, including new builds, extensions, and structural work.",
    longDescription: "Our construction services cover every aspect of building, from the initial design to the final touches. We handle both residential and commercial projects, ensuring quality, safety, and timely delivery. Our experienced team manages all phases, including site preparation, foundation, and finishing. We use only the best materials and follow industry standards for every build.",
    bullets: [
      "New home and office construction",
      "Extensions and structural modifications",
      "Quality materials and skilled labor",
      "On-time project completion"
    ]
  },
  {
    icon: "💡",
    title: "Electrical Work",
    description: "Safe and reliable electrical installations, repairs, and upgrades for homes and businesses.",
    longDescription: "Our certified electricians provide comprehensive electrical solutions for all property types. We ensure all installations and repairs meet safety codes and regulations. From wiring and lighting to panel upgrades and troubleshooting, we deliver efficient and lasting results. Our team is available for both scheduled projects and emergency repairs.",
    bullets: [
      "Complete wiring and rewiring",
      "Lighting installation and upgrades",
      "Electrical panel and circuit repairs",
      "Emergency electrical services"
    ]
  },
  {
    icon: "🎤",
    title: "Event Lighting & Sound",
    description: "Professional lighting and sound setup for events, functions, and celebrations.",
    longDescription: "We offer state-of-the-art lighting and sound solutions for all types of events. Our team handles setup, operation, and teardown, ensuring your event runs smoothly. We use high-quality equipment to create the perfect ambiance and audio experience. Whether it's a wedding, corporate event, or party, we tailor our services to your needs.",
    bullets: [
      "Custom lighting design",
      "Professional sound systems",
      "Setup and technical support",
      "Solutions for all event sizes"
    ]
  },
  {
    icon: "🏢",
    title: "False Ceiling & Interiors",
    description: "False ceiling design, installation, and interior finishing for modern spaces.",
    longDescription: "Transform your interiors with our expert false ceiling and finishing services. We design and install a variety of ceiling styles to enhance aesthetics and functionality. Our team also handles painting, lighting integration, and decorative elements. We work with you to create a modern, comfortable, and stylish environment.",
    bullets: [
      "Gypsum and POP ceiling options",
      "Integrated lighting solutions",
      "Decorative and acoustic designs",
      "Professional installation"
    ]
  },
  {
    icon: "🛠️",
    title: "General Maintenance",
    description: "Routine and emergency maintenance for all types of properties.",
    longDescription: "Keep your property in top condition with our general maintenance services. We handle everything from minor repairs to major fixes, ensuring your home or business runs smoothly. Our team is available for scheduled maintenance and urgent repairs, providing reliable and prompt service every time.",
    bullets: [
      "Plumbing and electrical repairs",
      "Carpentry and painting touch-ups",
      "Preventive maintenance checks",
      "Emergency response"
    ]
  },
  {
    icon: "🏡",
    title: "Home Renovation",
    description: "Complete home makeovers, remodeling, and upgrades to enhance your living space.",
    longDescription: "Our renovation experts turn your vision into reality, whether it's a single room or an entire home. We manage every aspect, from design and demolition to construction and finishing. Our focus is on quality, efficiency, and customer satisfaction, ensuring your renovated space meets your needs and style.",
    bullets: [
      "Kitchen and bathroom remodeling",
      "Flooring and tiling upgrades",
      "Space optimization and redesign",
      "Modern finishes and fixtures"
    ]
  },
  {
    icon: "🎨",
    title: "Painting",
    description: "Interior and exterior painting services for a fresh, vibrant look.",
    longDescription: "Refresh your property with our professional painting services. We use high-quality paints and proven techniques for a flawless finish. Our team prepares surfaces, repairs imperfections, and applies paint with care. We offer color consultations and work efficiently to minimize disruption.",
    bullets: [
      "Interior and exterior painting",
      "Surface preparation and repair",
      "Wide range of color options",
      "Clean and efficient work"
    ]
  },
  {
    icon: "🔧",
    title: "Plumbing",
    description: "Plumbing installation, repairs, and maintenance for leak-free living.",
    longDescription: "Our plumbing team handles everything from new installations to emergency repairs. We fix leaks, clogs, and water pressure issues quickly and effectively. We also install fixtures, water heaters, and filtration systems. Our goal is to ensure safe, reliable, and efficient plumbing in your property.",
    bullets: [
      "Leak detection and repair",
      "Pipe and fixture installation",
      "Drain cleaning and maintenance",
      "Water heater services"
    ]
  },
  {
    icon: "🧹",
    title: "Tank Cleaning",
    description: "Professional water tank cleaning for safe and hygienic water storage.",
    longDescription: "Ensure your water supply is clean and safe with our tank cleaning services. We use specialized equipment and eco-friendly methods to remove sediment, algae, and contaminants. Our team cleans all types and sizes of tanks, providing thorough and hygienic results.",
    bullets: [
      "Cleaning of all tank types",
      "Removal of sediment and algae",
      "Eco-friendly cleaning methods",
      "Safe and hygienic results"
    ]
  },
  {
    icon: "🧱",
    title: "Tiling",
    description: "Floor and wall tiling for kitchens, bathrooms, and all living spaces.",
    longDescription: "Upgrade your floors and walls with our expert tiling services. We install a wide range of tiles, including ceramic, porcelain, and natural stone. Our team ensures precise alignment, secure adhesion, and beautiful finishes. We handle both new installations and repairs.",
    bullets: [
      "Ceramic, porcelain, and stone tiles",
      "Precision installation",
      "Repairs and replacements",
      "Custom patterns and designs"
    ]
  },
  {
    icon: "🪵",
    title: "Wooden Work",
    description: "Custom carpentry, furniture, and woodwork for homes and offices.",
    longDescription: "Our skilled carpenters create custom woodwork to enhance your space. We design and build furniture, cabinets, doors, and decorative elements. Using quality materials and craftsmanship, we deliver durable and beautiful results tailored to your needs.",
    bullets: [
      "Custom furniture and cabinetry",
      "Door and window installation",
      "Decorative woodwork",
      "Repairs and refinishing"
    ]
  }

];

function ServicesSection({ refProp, visible }) {
  const [modalIndex, setModalIndex] = useState(null);
  const navigate = useNavigate();
  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (modalIndex !== null) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [modalIndex]);
  // Default to visible if not provided (for /services page)
  const isVisible = typeof visible === 'undefined' ? true : visible;

  return (
    <div
      ref={refProp}
      className={`py-20 bg-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-orange-600 font-semibold tracking-widest uppercase text-sm text-center">Our Services</h2>
          <p className="text-black font-bold text-2xl md:text-3xl mb-4">Comprehensive solutions for construction, renovation, and all your property maintenance needs.Delivered by experts you can trust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300 service-card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <button
                className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 mb-4"
                type="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setModalIndex(index)}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Modal popup for service details */}
        {modalIndex !== null && ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 transition-opacity duration-300"
            onClick={() => setModalIndex(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-3xl border-2 border-yellow-500 max-w-2xl w-full mx-auto p-6 sm:p-8 relative animate-fade-in service-popup"
              style={{
                maxHeight: '90vh',
                overflowY: 'auto',
                transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                transform: 'scale(1)',
                opacity: 1,
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={() => setModalIndex(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-5xl mb-4 text-center">{services[modalIndex].icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{services[modalIndex].title}</h3>
              <div className="text-gray-700 text-base mb-4 leading-relaxed text-center break-words font-medium">
                {services[modalIndex].longDescription}
              </div>
              <hr className="my-3 border-gray-300 w-full" />
              <ul className="list-disc list-inside text-gray-800 text-base space-y-2 pl-4 text-left font-normal w-full">
                {services[modalIndex].bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button
                className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all duration-200 text-lg"
                onClick={() => navigate('/callback')}
              >
                Request Callback
              </button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

export default ServicesSection;
