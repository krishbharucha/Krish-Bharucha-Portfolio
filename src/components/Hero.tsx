
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
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image Integration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <img 
            src="/lovable-uploads/d508ddea-80f4-4d23-adbb-e18a6e50edff.png"
            alt="Krish Bharucha Background"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* Floating Profile Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full overflow-hidden opacity-30 animate-fade-in">
        <img 
          src="/lovable-uploads/d508ddea-80f4-4d23-adbb-e18a6e50edff.png"
          alt="Krish Bharucha"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      <div className="absolute bottom-32 right-40 w-24 h-24 rounded-full overflow-hidden opacity-20 animate-fade-in">
        <img 
          src="/lovable-uploads/d508ddea-80f4-4d23-adbb-e18a6e50edff.png"
          alt="Krish Bharucha"
          className="w-full h-full object-cover blur-md"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
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

          {/* Main Profile Image with Blend Effect */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main Image with Gradient Blend */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/d508ddea-80f4-4d23-adbb-e18a6e50edff.png"
                    alt="Krish Bharucha - AI & Data Science Professional"
                    className="w-full h-full object-cover"
                    style={{
                      maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                    }}
                  />
                </div>
                
                {/* Gradient Overlay for Seamless Blending */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-transparent rounded-full"></div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-br from-blue-400/50 to-purple-400/50 animate-pulse"></div>
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
