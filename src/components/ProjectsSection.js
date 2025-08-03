import React from "react";

const projects = [
  {
    title: "Residential Villa Construction",
    category: "Residential",
    description: "Complete 3-bedroom villa with modern amenities",
    image: "🏠"
  },
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    description: "Multi-story office building with parking",
    image: "🏢"
  },
  {
    title: "Road Infrastructure Project",
    category: "Infrastructure",
    description: "Highway construction and bridge development",
    image: "🛣️"
  }
];

function ProjectsSection() {
  return (
    <div className="py-20 bg-gray-50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See some of our completed construction projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">{project.image}</div>
              <div className="mb-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
