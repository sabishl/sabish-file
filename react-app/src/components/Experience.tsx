import { FC, useState } from 'react';

interface ExperienceData {
  id: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  duringCollege: boolean;
  techUsed?: string[];
  description: string[];
  projects?: { name: string; description: string }[];
  certificateImage?: string;
}

const experiencesData: ExperienceData[] = [
  {
    id: 1,
    company: "Wisright Technologies",
    logo: "https://via.placeholder.com/150/3B82F6/FFFFFF?text=WT",
    role: "Full Stack & AI Agent Developer",
    duration: "June 2025 – Present",
    duringCollege: false,
    techUsed: ["ReactJS", "Node.js", "Express.js", "PostgreSQL", "LLMs (Gemma, Kimi, Anthropic)"],
    description: [
      "Working on AI-integrated full stack development",
      "Experience with React–PostgreSQL–Express–Node architecture",
      "Hands-on with AI agent integration using LLMs"
    ],
    projects: [
      {
        name: "WaveX AI Translator",
        description: "Translates text, PDF, video, and audio from English to Indian languages using Gemma & FastWhisper."
      },
      {
        name: "Mano Crackers Application",
        description: "WordPress eCommerce site using XAMPP, MySQL, and WooCommerce."
      },
      {
        name: "True Friend Matrimony",
        description: "MERN Stack app with added features and database integration."
      }
    ],
    certificateImage: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Certificate"
  },
  {
    id: 2,
    company: "8 Queens Software Solutions",
    logo: "https://via.placeholder.com/150/8B5CF6/FFFFFF?text=8Q",
    role: "Web Developer",
    duration: "October 2024 – November 2024",
    duringCollege: true,
    description: [
      "Built a basic eCommerce site with JWT authentication",
      "Implemented CRUD operations (Add/Edit/Delete/View Products)",
      "Learned practical web app architecture and deployment"
    ],
    certificateImage: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Certificate"
  },
  {
    id: 3,
    company: "8 Queens Software Solutions",
    logo: "https://via.placeholder.com/150/8B5CF6/FFFFFF?text=8Q",
    role: "Web Development Intern",
    duration: "July 2024 (4 Weeks)",
    duringCollege: true,
    description: [
      "Worked on foundational web design tasks",
      "Understood frontend–backend data flow and layout structure"
    ],
    certificateImage: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Certificate"
  },
  {
    id: 4,
    company: "Open Weaver – ICT Academy",
    logo: "https://via.placeholder.com/150/10B981/FFFFFF?text=OW",
    role: "Web Developer Intern",
    duration: "During College",
    duringCollege: true,
    description: [
      "Learned HTML, CSS, JavaScript, SQL, and API (GET, POST, PUT, DELETE)",
      "Explored full application workflow"
    ],
    certificateImage: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Certificate"
  }
];

const Experience: FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

  const handleCardClick = (experience: ExperienceData) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="min-h-[60vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            🧑‍💻 Internship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencesData.map((exp) => (
              <div
                key={exp.id}
                onClick={() => handleCardClick(exp)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex flex-col h-full">
                  {/* Company Logo */}
                  <div className="h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-2xl flex items-center justify-center p-2">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-2.5 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-slate-800 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-0.5 text-xs">
                      {exp.role}
                    </p>
                    <p className="text-slate-600 text-xs mb-2">
                      {exp.duration}
                    </p>
                    
                    {exp.duringCollege && (
                      <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit">
                        During College
                      </span>
                    )}

                    <div className="mt-auto pt-2">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-1">
                        View Details 
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal Popup */}
      {selectedExperience && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            {selectedExperience.certificateImage && (
              <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-t-2xl">
                <img 
                  src={selectedExperience.certificateImage} 
                  alt="Certificate"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {selectedExperience.company}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-1">
                {selectedExperience.role}
              </p>
              <p className="text-slate-600 mb-4">
                {selectedExperience.duration}
              </p>

              {selectedExperience.duringCollege && (
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  During College
                </span>
              )}

              {/* Technologies Used */}
              {selectedExperience.techUsed && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.techUsed.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedExperience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              {selectedExperience.projects && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Projects Worked On
                  </h3>
                  <div className="space-y-4">
                    {selectedExperience.projects.map((project, idx) => (
                      <div 
                        key={idx}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100"
                      >
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {project.name}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
