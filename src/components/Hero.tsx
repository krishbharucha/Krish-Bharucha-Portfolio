
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white animate-fade-in">
                Krish
                <br />
                <span className="text-blue-400">Bharucha</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 animate-fade-in">
                AI & Data Science Professional
              </p>
              <p className="text-lg text-gray-400 max-w-2xl animate-fade-in">
                Aspiring AI researcher and product engineer specializing in machine learning, 
                spatiotemporal modeling, and computer vision. Currently pursuing MSIM at 
                University of Washington, Seattle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-gray-800 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
              >
                Get In Touch
              </Button>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="bg-gradient-to-r from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300 border-0 text-gray-800 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in">
              <a
                href="https://github.com/krishbharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-green-200 to-emerald-200 flex items-center justify-center text-gray-700 hover:from-green-300 hover:to-emerald-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/krish-bharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 flex items-center justify-center text-gray-700 hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krish.bharucha@email.com"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 flex items-center justify-center text-gray-700 hover:from-rose-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 animate-fade-in">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold text-white">KB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 flex items-center justify-center text-gray-700 hover:from-indigo-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};
