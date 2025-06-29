import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <img 
            src="uploads/d508ddea-80f4-4d23-adbb-e18a6e50edff.png"
            alt="Krish Bharucha Background"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center right, black 30%, transparent 70%)'
            }}
          />
        </div>
      </div>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white animate-fade-in">
                
                <br />
                <span className="text-gray-400"></span>
              </h1>

              <div className="flex flex-col space-y-2">
  <div className="flex space-x-1 text-5xl lg:text-7xl font-bold text-white">
    {"KRISH".split("").map((char, i) => (
      <span
        key={i}
        className="inline-block animate-fade-in"
        style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
      >
        {char}
      </span>
    ))}
  </div>
  <div className="flex space-x-1 text-5xl lg:text-7xl font-bold text-gray-400">
    {"BHARUCHA".split("").map((char, i) => (
      <span
        key={i}
        className="inline-block animate-fade-in"
        style={{ animationDelay: `${(i + 5) * 0.1}s`, animationFillMode: "both" }}
      >
        {char}
      </span>
    ))}
  </div>
</div>
              
              <p className="text-xl lg:text-2xl text-gray-300 animate-fade-in">
                Data Scientist, AI Developer, Product Manager and Consultant
              </p>
              <p className="text-lg text-gray-400 max-w-2xl animate-fade-in">
              At the intersection of Artificial Intelligence, Machine Learning, and Data Science, I am driven by a passion for innovation and discovery. I specialize in transforming complex data landscapes into groundbreaking solutions that propel organizations forward. My expertise lies in building intelligent, adaptive systems that not only solve today's challenges but anticipate tomorrow's opportunities. 
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in">
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
            </div> */}

            <div className="flex gap-6 justify-start animate-fade-in">
              <a
                href="https://github.com/krishbharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">

                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/krish-bharucha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">

                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krishb17@uw.edu"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white flex items-center justify-center hover:from-rose-500 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">


                <Mail size={24} />
              </a>
              <a
  href="https://drive.google.com/file/d/1sUxa6P4ykzB4V-8LRxXzpbIv99xRKGXp/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
  aria-label="Resume"
>
  <FileText size={24} />
</a>
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
