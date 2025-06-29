import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            About Me
          </h2>

          {/* ✨ Gradient line below heading */}
          <div className="h-1 w-28 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6 animate-pulse" />

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about AI and data science to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an aspiring AI Developer, Data Scientist, Business Analyst and Product Manager with a strong foundation in Artificial Intelligence, Machine Learning, 
              Data pipelines and Scrum. 
              I am currently pursuing my Master of Science in Information Management (MSIM) at the University of Washington, Seattle. I bring a unique blend 
              of Technical Expertise, Research Experience and Product Management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From my childhood, I was intrigued by computers and the technology driving them. In 2021, I commenced my B.Tech. degree in Computer Engineering with Honors in Intelligent Computing at the prestigious Dwarkadas J. Sanghvi College of Engineering. Here, I immersed myself into the college experience - holistically balancing my academics and extracurriculars. I particularly excelled in subjects like Advanced Algorithms, Data Mining and Warehouse, Advanced Database Management Systems, Big Data Infrastructure, and Machine Learning.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 shadow-xl rounded-2xl animate-fade-in transition-all duration-500 hover:scale-[1.02] hover:border-blue-400">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-400 mt-1 animate-bounce-slow" size={24} />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Education</h3>
                  <div className="space-y-5">
                    <div className="transition-transform hover:scale-[1.02]">
                      <h4 className="text-lg font-medium text-blue-400">
                        Master of Science in Information Management (MSIM)
                      </h4>
                      <p className="text-gray-400">University of Washington, Seattle</p>
                      <p className="text-gray-500">2025 - 2027</p>
                    </div>
                    <div className="transition-transform hover:scale-[1.02]">
                      <h4 className="text-lg font-medium text-blue-400">
                        B.Tech in Computer Engineering
                      </h4>
                      <p className="text-gray-400">Dwarkadas J. Sanghvi College of Engineering</p>
                      <p className="text-gray-500">2021 - 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-xl animate-fade-in transition-all duration-500 hover:scale-[1.02] hover:border-blue-400">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 mt-1 animate-bounce-slow" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 font-display tracking-wide">Location</h3>
                  <p className="text-gray-300 font-sans">Seattle, Washington</p>
                  <p className="text-sm text-gray-500">Open to relocation as well as remote opportunities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
