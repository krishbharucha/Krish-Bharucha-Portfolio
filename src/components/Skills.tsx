export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Libraries, Frameworks & Databases",
      skills: [
        "TensorFlow", "PyTorch", "OpenCV", "Keras", "OCR", "Detectron3",
        "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn",
        "MySQL", "MongoDB",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git", "GitHub", "Canva", "Jupyter Notebook", "Colaboratory", "Tableau",
        "LaTeX", "Docker", "VS Code", "Visual Studio", "PyCharm", "IntelliJ",
        "MS Excel", "Agile Project Development", "Scrum",
      ],
    },
    {
      title: "Interests",
      skills: [
        "Data Science", "Artificial Intelligence", "Machine Learning",
        "Product Management", "Business Intelligence", "Data Analysis",
        "Data Mining", "Computer Vision", "Image Processing", "Deep Learning",
        "Neural Networks", "Natural Language Processing",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg">My core technical skills, tools, and interests</p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-[#5c9ead] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-200">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 px-3 py-1 rounded-full hover:bg-[#5c9ead] hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
