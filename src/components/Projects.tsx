import { ExternalLink, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Enhancing Interpretability in Diverse Recommendation System through Explainable AI Techniques",
      description: "",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "XAI", "SHAP values"],
      type: "Research Publication",
      highlights: [
        "Published the research paper in the Journal of Computational Analysis and Applications (Vol. 32 No. 1 (2024)) which is Scopus Indexed.",
        "Explored various methods for making recommendation algorithms more interpretable such as the content-based filtering, collaborative filtering and matrix factorization.",
        "Utilized Shapley values to demonstrate how recommendations are made.",
        "Applied the Shapley values to GPT-4’s multimodal LLM."
      ],
      code: "https://github.com/krishbharucha/XAI.git",
      demo: null,
      publication: "https://eudoxuspress.com/index.php/pub/article/view/1427"
    },
    {
      title: "Spatiotemporal Ensemble Modeling for Urban Taxi Travel Time Prediction",
      description: "",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Geospatial Analysis", "Ensemble Models"],
      type: "Research Publication",
      highlights: [
        "Published the research paper in the Journal of Computational Analysis and Applications (Vol. 32 No. 1 (2024)) which is Scopus Indexed.",
        "Compared models like KNN Regressor (integrated with Hill Climb Racing), Random Forest, Decision Tree and Stacking model to predict taxi travel time.",
        "Achieved an accuracy of 99.999% for the Stacking model and 99.83% for Random Forest."
      ],
      code: "https://github.com/krishbharucha/SpatioTemporal-Ensemble.git",
      demo: null,
      publication: "https://eudoxuspress.com/index.php/pub/article/view/1411"
    },
    {
      title: "Federated Learning Approach for adressing Ethical Issues in AI",
      description: "",
      technologies: ["Python", "PyTorch", "Federated Models", "Confidence Scoring Mechanisms"],
      type: "Research Project",
      highlights: [
        "Published the research paper in the 6th International Conference of Data Science and Applications (ICDSA).",
        "Developed a Federated Learning framework with differential privacy for secure, fair data processing.",
        "Integrated a Decision Verification Layer and Confidence Scoring Mechanism to enhance accountability and transparency."
      ],
      code: "https://github.com/krishbharucha/Federated-Learning-for-addressing-Ethical-Issues-in-AI.git",
      demo: null,
      publication: ""
    },
    {
      title: "VetAssistant AI",
      description: "",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
      type: "Product Development",
      highlights: [
        "Developing an AI-driven web application using LangChain to assist pet owners in remote areas.",
        "Considers pet disease progression and then provides treatment recommendations based on multimodal inputs.",
        "Integrated TensorFlow models to analyze images of pet injuries or skin infections.",
        "Using the LeafLet API, user has access to nearby veterinary doctors."
      ],
      code: null,
      demo: null,
      publication: null
    },
    {
      title: "Cryptocurrency Framework for secured Blockchain",
      description: "",
      technologies: ["Python", "Blockchain", "SHA-256", "Flask"],
      type: "Framework",
      highlights: [
        "Built a secure cryptocurrency framework using Python and blockchain principles, featuring wallet creation, transaction handling, mining, and block validation through Proof of Work.",
        "Implemented custom block architecture with SHA-256 hashing and RSA encryption to ensure data integrity, transaction authenticity, and resistance to tampering.",
        "Simulated end-to-end cryptocurrency operations, including digital signatures and consensus mechanisms, to reflect decentralized and transparent transaction models.",
        "Designed a flexible platform allowing users to create their own currencies, showcasing the adaptability and scalability of the blockchain-based system."
      ],
      code: "https://github.com/krishbharucha/Cryptocurrency-Framework.git",
      demo: "",
      publication: null
    },
    {
      title: "TogetherNow Social Service App",
      description: "",
      technologies: ["Machine learning", "Node.js", "MongoDB", "Flutter"],
      type: "Product Development",
      highlights: [
        "Social service application designed to connect elderly individuals requiring assistance with young volunteers eager to offer support in banking, healthcare and daily chores.",
        "Integrated Generative AI technology in the form of a responsive chatbot tailored to assist elderly individuals which involves answering all the questions in all local languages efficiently.",
        "Implemented a robust SOS emergency button feature within the app, which would automatically alert designated kin of the elderly individual in critical situations.",
        "Integrated Aadhar Card Verification at the start of the application as a security measure."
      ],
      code: "https://github.com/krishbharucha/Aadhar-Verification.git",
      demo: null,
      publication: null
    },
    {
      title: "ClimaStat",
      description: "",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      type: "Data Analysis",
      highlights: [
        "Conducted EDA on a large climate dataset, extracting key metrics on temperature changes across cities and countries, hence ensuring data quality for accurate analysis.",
        "Applied time series analysis and statistical modelling techniques which includes ADF tests and ARIMA models, to identify trends and patterns in global temperature variations, predicting future climate changes.",
        "Visualized through graphs and heatmaps using Matplotlib and Seaborn, showcasing temporal and geographical temperature patterns."
      ],
      code: "https://github.com/krishbharucha/ClimaStat.git",
      demo: null,
      publication: null
    }
  ];

  const Btn = ({
    url,
    gradient,
    Icon,
    label,
    showIcon = true
  }: {
    url: string;
    gradient: string;
    Icon: React.ElementType;
    label: string;
    showIcon?: boolean;
  }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className={`bg-gradient-to-r ${gradient} text-gray-800 border-0 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
      >
        {showIcon && <Icon size={16} className="mr-2" />}
        {label}
      </Button>
    </a>
  );

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
          {projects.map((p, i) => (
            <Card
              key={i}
              className="p-6 bg-gray-900 border border-gray-700 hover:border-[#5c9ead] transition-all duration-300 hover:scale-[1.02] rounded-2xl"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{p.title}</h3>
                  <span className="px-3 py-1 bg-[#5c9ead]/10 text-[#5c9ead] rounded-full text-xs font-medium border border-[#5c9ead]/30 whitespace-nowrap">
                    {p.type}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5c9ead] mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((tech, t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 flex-wrap">
                  {p.code && (
                    <Btn
                      url={p.code}
                      gradient="from-mint-200 to-green-200 hover:from-mint-300 hover:to-green-300"
                      Icon={() => null}
                      label="Project Link"
                      showIcon={false}
                    />
                  )}
                  {p.demo && (
                    <Btn
                      url={p.demo}
                      gradient="from-blue-200 to-indigo-200 hover:from-blue-300 hover:to-indigo-300"
                      Icon={ExternalLink}
                      label="Demo"
                    />
                  )}
                  {p.publication && (
                    <Btn
                      url={p.publication}
                      gradient="from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300"
                      Icon={FileText}
                      label="Publication"
                    />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
