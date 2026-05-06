import React from 'react';

const projects = [
  {
    title: 'University of California\nat San Francisco',
    category: 'Institute of Global Health Sciences',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-[#3b5ebb]', // Match screenshot blue
    textColor: 'text-white',
    imgStyle: 'object-cover rounded-xl',
  },
  {
    title: 'GRIP\nTraining Institute',
    category: 'Branding & Marketing Collateral',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-[#232525]', // Match screenshot dark gray
    textColor: 'text-white',
    imgStyle: 'object-cover rounded-[2.5rem]',
  },
  {
    title: 'Scarlett&Ameera',
    category: 'E-commerce / Branding and Website',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80',
    bgColor: 'bg-[#7f4a3c]', // Match screenshot brown
    textColor: 'text-white',
    imgStyle: 'object-cover rounded-xl',
  }
];

export default function Work() {
  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col h-[70vh] lg:h-[85vh] min-h-[600px] relative overflow-hidden cursor-pointer ${project.bgColor} ${project.textColor}`}
            >
              {/* Image Container - takes up top portion */}
              <div className="flex-1 w-full flex items-center justify-center p-8 lg:p-16 overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-[1.03]">
                   <img 
                     src={project.image} 
                     alt="Project preview" 
                     className={`w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${project.imgStyle}`}
                   />
                </div>
              </div>

              {/* Text Content - at the bottom */}
              <div className="w-full px-8 pb-12 lg:pb-16 text-center shrink-0">
                <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-serif mb-3 lg:mb-4 leading-[1.1] whitespace-pre-line tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base opacity-80 tracking-widest uppercase font-medium">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
