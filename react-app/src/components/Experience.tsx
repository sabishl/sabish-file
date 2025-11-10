import { useState } from 'react';
import type { FC } from 'react';
import webCert from '../assets/certificates/8queens-web.jpg';
import mobileCert from '../assets/certificates/8queens-mobile.jpg';
import openWeaverCert from '../assets/certificates/openweaver.jpg';

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
    certificateImages?: string[];
    certificateTitle?: string;
    certificatePeriod?: string;
    points?: string[];
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
    certificateImages: ["https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Certificate"]
  },
  {
    id: 2,
    company: "8Queens Software Technologies",
    logo: "https://via.placeholder.com/150/8B5CF6/FFFFFF?text=8Q",
    role: "Web Developer Intern",
    duration: "July 2023 & Oct-Nov 2024",
    duringCollege: true,
    description: [
      "Completed two internships focusing on web and mobile technologies",
      "Built full-stack applications with modern web technologies",
      "Gained practical experience in both web and mobile development",
      "Worked in an agile development environment",
      "Collaborated with senior developers on real-world projects"
    ],
    points: [
      "Web Technology Internship (10/07/2023 to 22/07/2023)",
      "• Focused on frontend development with React",
      "• Implemented responsive designs using Tailwind CSS",
      "• Learned version control with Git",
      "",
      "Mobile Application Internship (18/10/2024 to 30/11/2024)",
      "• Developed mobile-first web applications",
      "• Worked on cross-platform compatibility",
      "• Implemented progressive web apps (PWAs)"
    ],
    certificateImages: [webCert, mobileCert]
  },
  {
    id: 4,
    company: "Open Weaver – ICT Academy",
    logo: "https://via.placeholder.com/150/10B981/FFFFFF?text=OW",
    role: "Full Stack Development Intern",
    duration: "October 2023",
    duringCollege: true,
    description: [
      "Completed 4-Week Virtual Internship Program in Full Stack Development",
      "Submitted an industry-ready project",
      "Learned HTML, CSS, JavaScript, SQL, and RESTful APIs",
      "Explored full application workflow with modern web technologies",
      "Received certification under #Ready2GoDigital program"
    ],
    certificateTitle: "Full Stack Development Certificate",
    certificatePeriod: "October 2023",
    certificateImages: [openWeaverCert]
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
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

            {/* Certificate Images */}
            {selectedExperience.certificateImages && selectedExperience.certificateImages.length > 0 && (
              <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-t-2xl">
                {selectedExperience.certificateImages && selectedExperience.certificateImages.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {selectedExperience.certificateImages.map((cert, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl opacity-25 group-hover:opacity-50 blur transition-all duration-300"></div>
                        <div className="relative bg-white p-4 rounded-xl shadow-xl">
                          <img 
                            src={cert} 
                            alt={`Certificate ${idx + 1}`}
                            className="w-full h-auto rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 object-contain max-h-[60vh]"
                          />
                          {selectedExperience.company === "8Queens Software Technologies" && (
                            <div className="mt-3 text-center">
                              <h4 className="text-slate-800 font-semibold">
                                {idx === 0 ? "Web Technology Internship" : "Mobile Application Internship"}
                              </h4>
                              <p className="text-slate-600 text-sm">
                                {idx === 0 ? "July 2023" : "October-November 2024"}
                              </p>
                            </div>
                          )}
                          {selectedExperience.company === "Open Weaver – ICT Academy" && (
                            <div className="mt-3 text-center">
                              <h4 className="text-slate-800 font-semibold">
                                Full Stack Development Certificate
                              </h4>
                              <p className="text-slate-600 text-sm">
                                October 2023
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

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

              {/* Detailed Points */}
              {selectedExperience.points && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Internship Details
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                    {selectedExperience.points.map((point, idx) => (
                      <p key={idx} className={`text-slate-700 ${point === "" ? "mt-4" : "ml-4"}`}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Contact info (bottom of modal) */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
                <div className="text-slate-700 space-y-1">
                  <p>
                    Email: <a className="text-blue-600 hover:underline" href="mailto:lsabish2001@gmail.com">lsabish2001@gmail.com</a>
                  </p>
                  <p>
                    Phone: <a className="text-blue-600 hover:underline" href="tel:+919095399164">+91 90953 99164</a>
                  </p>
                  <p>
                    LinkedIn: <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/sabish-l" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sabish-l</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
