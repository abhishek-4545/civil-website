import React, { useState } from "react";

const testimonials = [
	{
		name: "Priya S.",
		feedback: "Vijay Civil Works transformed our home with their expert renovation services. The team was professional, timely, and the quality exceeded our expectations! Highly recommended.",
		location: "Chennai, TN",
	},
	{
		name: "Rahul M.",
		feedback: "We hired them for a commercial office project. The attention to detail and commitment to deadlines was impressive. Will definitely work with them again!",
		location: "Bangalore, KA",
	},
	{
		name: "Anita D.",
		feedback: "From plumbing to painting, every service was handled with care and expertise. The team is friendly and always ready to help.",
		location: "Hyderabad, TS",
	},
	{
		name: "Suresh K.",
		feedback: "Their event lighting and sound setup made our family function memorable. Hassle-free and creative solutions!",
		location: "Coimbatore, TN",
	},
	{
		name: "Meena P.",
		feedback: "I appreciate their transparent pricing and honest advice. The callback service is prompt and the staff is knowledgeable.",
		location: "Madurai, TN",
	},
];

function TestimonialsSection() {
	const [startIdx, setStartIdx] = useState(0);
	const testimonialsPerPage = 3;
	const canGoBack = startIdx > 0;
	const canGoForward = startIdx + testimonialsPerPage < testimonials.length;

	const handlePrev = () => {
		if (canGoBack) setStartIdx(startIdx - testimonialsPerPage);
	};
	const handleNext = () => {
		if (canGoForward) setStartIdx(startIdx + testimonialsPerPage);
	};

	return (
		<div className="py-10 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	   <div className="text-center mb-12">
		   <h2 className="mb-2 text-yellow-500 font-bold tracking-widest uppercase text-2xl md:text-3xl text-center">
			   What Our Clients Say
		   </h2>
	   </div>
				<div className="flex items-center justify-center gap-4">
					<button
						onClick={handlePrev}
						disabled={!canGoBack}
						className={`rounded-full p-2 text-2xl font-bold bg-white shadow border border-gray-200 transition hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed`}
						aria-label="Previous testimonials"
					>
						&#8592;
					</button>
					<div className="relative w-full">
						<div
							key={startIdx} // force re-mount for animation
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-700 ease-in-out animate-testimonial-slide"
							style={{ minHeight: 220 }}
						>
							{testimonials
								.slice(startIdx, startIdx + testimonialsPerPage)
								.map((t, idx) => (
									<div
										key={idx}
										className="bg-gray-100 rounded-2xl p-4 shadow-lg border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-gold-soft hover:border-yellow-300 hover:z-10"
									>
										<div className="text-yellow-500 text-3xl mb-2">“</div>
										<p className="text-gray-700 text-lg mb-4 italic line-clamp-3">
											{t.feedback}
										</p>
										<div className="font-bold text-gray-900">{t.name}</div>
										<div className="text-sm text-gray-500">
											{t.location}
										</div>
									</div>
								))}
						</div>
					</div>
					<button
						onClick={handleNext}
						disabled={!canGoForward}
						className={`rounded-full p-2 text-2xl font-bold bg-white shadow border border-gray-200 transition hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed`}
						aria-label="Next testimonials"
					>
						&#8594;
					</button>
				</div>
			</div>
		</div>
	);
}

export default TestimonialsSection;

if (typeof window !== 'undefined') {
  let style = document.getElementById('testimonial-gold-shadow');
  if (!style) {
	style = document.createElement('style');
	style.id = 'testimonial-gold-shadow';
	document.head.appendChild(style);
  }
  style.innerHTML = `
	.hover\\:shadow-gold-soft:hover {
	  box-shadow: 0 0 20px 0 rgba(255, 215, 0, 0.25), 0 2px 8px 0 rgba(0,0,0,0.06);
	}
	.animate-testimonial-slide {
	  animation: testimonialSlide 0.7s cubic-bezier(0.4,0,0.2,1);
	}
	@keyframes testimonialSlide {
	  0% { opacity: 0; transform: translateX(40px); }
	  100% { opacity: 1; transform: translateX(0); }
	}
  `;
}
