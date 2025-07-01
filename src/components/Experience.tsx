import { Building2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Patna",
      duration: "Aug 2024 – Jan 2025",
      location: "Remote",
      image: "/uploads/Deepfake-Detection-Techniques.jpg",
      description: [
        "Created a multimodal deepfake dataset using OpenAI DALL-E 3 API with labels for fake & violent word positions.",
        "Categorized data into: violent fake, non‑violent fake, violent real, non‑violent real.",
        "Integrated Shapley values (SHAP) for model interpretability using Explainable AI (XAI)."
      ]
    },
    {
      title: "AI Product Engineer Intern",
      company: "DataVoice Solutions",
      duration: "Jun 2024 – Aug 2024",
      location: "Mumbai, India",
      image: "/uploads/bus.PNG",
      description: [
        "Built a real‑time bus damage detection system (95% accuracy) using OpenCV and Fast R‑CNN on live VVMT feeds.",
        "Implemented OCR for license‑plate recognition.",
        "Containerized the entire pipeline using Docker for consistent deployments."
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional journey in AI research and product development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <Card className="p-6 bg-gray-900 border border-gray-700 hover:border-[#5c9ead] shadow-xl rounded-2xl transition-transform duration-300 hover:scale-[1.015]">
                <div className="lg:flex gap-6 items-start">
                  {/* Image Section */}
                  <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                    <img
                      src={exp.image}
                      alt={`${exp.title} image`}
                      className="rounded-xl w-full h-48 object-cover shadow-md"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#5c9ead] mb-1">
                      <Building2 size={18} />
                      <span className="text-lg font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
