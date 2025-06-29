
import { Code, Database, Brain, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "R", level: 80 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "OpenCV", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas", level: 95 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 90 },
        { name: "Jupyter", level: 92 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 88 },
        { name: "Redis", level: 70 },
        { name: "Neo4j", level: 65 }
      ]
    }
  ];

  const interests = [
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Federated Learning",
    "Explainable AI",
    "Spatiotemporal Modeling",
    "Ethical AI",
    "Deep Learning",
    "Data Visualization",
    "Research & Development"
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical proficiencies and areas of specialization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gray-800 border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Areas of Interest</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
