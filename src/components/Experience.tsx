
import { Building2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Patna",
      duration: "Summer 2023",
      location: "Patna, India",
      description: "Conducted advanced research in explainable AI and machine learning",
      achievements: [
        "Created comprehensive datasets for spatiotemporal analysis research",
        "Developed explainable AI models for urban planning applications",
        "Collaborated with faculty on cutting-edge research in machine learning",
        "Published findings in academic conferences and journals"
      ]
    },
    {
      title: "AI Product Engineer Intern",
      company: "DataVoice Solutions",
      duration: "2023",
      location: "Remote",
      description: "Specialized in computer vision and AI model deployment",
      achievements: [
        "Implemented computer vision algorithms for real-time image processing",
        "Deployed machine learning models in production environments",
        "Optimized model performance and reduced inference time by 40%",
        "Collaborated with cross-functional teams on AI product development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Work Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional journey in AI research and product development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-gray-900 border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Building2 size={18} />
                    <span className="text-lg font-medium">{exp.company}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                </div>
                <div className="flex flex-col lg:items-end text-sm text-gray-500">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
