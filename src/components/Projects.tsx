
import { ExternalLink, Github, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Enhancing Interpretability in Diverse Recommendation System through Explainable AI Techniques",
      description: "Advanced machine learning model for predicting taxi travel times using spatiotemporal data analysis and ensemble methods.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "XAI"],
      type: "Research Publication",
      highlights: [
        "Published the research paper in the Journal of Computational Analysis and Applications (Vol. 32 No. 1 (2024)) which is Scopus Indexed.",
        "Explored various methods for making recommendation algorithms more interpretable such as the content-based filtering, collaborative filtering and matrix factorization.",
"Utilized Shapley values to demonstrate how recommendations are made.",
"Applied the Shapley values to GPT-4’s multimodal LLM."

      ]
    },
    {
      title: "Spatiotemporal Ensemble Modeling for Urban Taxi Travel Time Prediction",
      description: "Advanced machine learning model for predicting taxi travel times using spatiotemporal data analysis and ensemble methods.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Geospatial Analysis"],
      type: "Research Publication",
      highlights: [
        "Developed novel ensemble modeling approach",
        "Achieved 15% improvement in prediction accuracy",
        "Published in academic conference",
        "Applied to real-world urban planning scenarios"
      ]
    },
    {
      title: "VetAssistant AI",
      description: "AI-driven veterinary diagnosis application that assists veterinarians in making accurate diagnoses using computer vision and machine learning.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "Mobile App"],
      type: "Product Development",
      highlights: [
        "Computer vision for symptom detection",
        "Machine learning diagnosis recommendations",
        "User-friendly mobile interface",
        "Real-time image processing capabilities"
      ]
    },
    {
      title: "Federated Learning for Ethical AI",
      description: "Research project exploring federated learning approaches to ensure privacy-preserving and ethical AI model training.",
      technologies: ["Python", "PyTorch", "Federated Learning", "Privacy Tech"],
      type: "Research Project",
      highlights: [
        "Privacy-preserving model training",
        "Distributed learning architecture",
        "Ethical AI framework development",
        "Performance benchmarking studies"
      ]
    },
    {
      title: "Bus Damage Detection System",
      description: "Computer vision system for automated detection and assessment of bus damage using deep learning techniques.",
      technologies: ["Python", "OpenCV", "YOLO", "Deep Learning", "Image Processing"],
      type: "Academic Project",
      highlights: [
        "Real-time damage detection",
        "95% accuracy in damage classification",
        "Automated reporting system",
        "Cost-effective maintenance solution"
      ]
    },
    {
      title: "TogetherNow Social Service App",
      description: "Social platform connecting volunteers with community service opportunities, featuring matching algorithms and impact tracking.",
      technologies: ["React Native", "Node.js", "MongoDB", "Machine Learning"],
      type: "Social Impact",
      highlights: [
        "AI-powered volunteer matching",
        "Impact measurement dashboard",
        "Community engagement features",
        "Scalable architecture design"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative AI and data science projects with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30 whitespace-nowrap">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-mint-200 to-green-200 hover:from-mint-300 hover:to-green-300 text-gray-800 border-0 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-200 to-indigo-200 hover:from-blue-300 hover:to-indigo-300 text-gray-800 border-0 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 text-gray-800 border-0 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FileText size={16} className="mr-2" />
                    Paper
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
