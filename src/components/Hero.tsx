
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in">
              <a
                href="https://github.com/krishbharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/krish-bharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krish.bharucha@email.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
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
        <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-200">
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};
