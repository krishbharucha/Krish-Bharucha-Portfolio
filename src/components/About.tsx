
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about leveraging AI and data science to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an aspiring AI and data science professional with a strong foundation in machine learning, 
              spatiotemporal modeling, and product engineering. Currently pursuing my Master of Science in 
              Information Management (MSIM) at the University of Washington, Seattle, I bring a unique blend 
              of technical expertise and research experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey began with a B.Tech in Computer Engineering from Dwarkadas J. Sanghvi College, 
              where I developed proficiency in Python, TensorFlow, OpenCV, and various AI frameworks. 
              I've contributed to cutting-edge research in explainable AI and have hands-on experience 
              building AI-driven applications like VetAssistant AI.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about creating ethical, transparent AI systems that can make a meaningful 
              impact on society. My research interests span federated learning, computer vision, and 
              spatiotemporal analysis, with a focus on practical applications in urban planning and healthcare.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-400 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-blue-400">
                        Master of Science in Information Management (MSIM)
                      </h4>
                      <p className="text-gray-400">University of Washington, Seattle</p>
                      <p className="text-gray-500">2025 - 2027</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-400">
                        B.Tech in Computer Engineering
                      </h4>
                      <p className="text-gray-400">Dwarkadas J. Sanghvi College</p>
                      <p className="text-gray-500">2021 - 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Seattle, Washington</p>
                  <p className="text-gray-500">Open to relocation and remote opportunities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
