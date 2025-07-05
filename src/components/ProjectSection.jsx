import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shiritori Versus",
    description:
      "An interactive two-player mobile word game based on Japanese wordplay called Shiritori using Dart, Flutter and Firebase.",
    image: "/projects/shiritori-versus.png",
    tag: ["Mobile App", "Game", "Dart", "Flutter", "Firebase"],
    demoUrl: "/demo/shiritori-versus-demo.mp4",
    githubUrl: "https://github.com/AelCee8103/shiritori-versus-prototype",
  },
  {
    id: 2,
    title: "CornHub",
    description:
      "A responsive website that allows users to search for movies, view their trailers, list their favorites, and create their own watchlists using PHP, MySQL, and JavaScript.",
    image: "/projects/cornhub.png",
    tag: ["Web App", "PHP", "MySQL", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/CornHub.git",
  },
  {
    id: 3,
    title: "Online GradeBook System",
    description:
      "An easy-to-use online gradebook system for teachers to manage student grades, attendance, and assigning of classes and subjects using Express, Node.js, MySQL and React.",
    image: "/projects/gradebook.png",
    tag: ["Web App", "Express", "Node.js", "MySQL", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/OnlineGradeBook",
  },
  {
    id: 4,
    title: "CodixsGo!",
    description:
      "CodixsGo is a platform for creating and taking coding quizzes with progress tracking and leaderboards using PHP and JavaScript.",
    image: "/projects/codixsgo.png",
    tag: ["Web App", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/CodixsGo",
  },
  {
    id: 5,
    title: "Library Management System",
    description:
      "Designed for small libraries, streamlining core operations such as book lending, returns, and inventory management to improve usability for both staff and administrators.",
    image: "/projects/slibrary.png",
    tag: ["Desktop App", "Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/SLibrary",
  },
  {
    id: 6,
    title: "Healthy Life Clinic",
    description:
      "HealthyLife is a web-based clinic management system built using the Django framework in Python.",
    image: "/projects/healthylife.png",
    tag: ["Web App", "Django", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/healthy-life.git",
  },
  {
    id: 7,
    title: "Movie Sentiment Analysis",
    description:
      "A Streamlit web app that predicts the sentiment of movie reviews using multiple machine learning models (Logistic Regression, Random Forest, SVM, Passive Aggressive, XGBoost). Trained on the IMDB dataset, it lets users input a review, select a model, and instantly see if the sentiment is positive or negative.",
    image: "/projects/movie_sentiment.png",
    tag: ["Web App", "Streamlit", "Python", "Machine Learning"],
    demoUrl:
      "https://aelcee8103-movie-review-sentiment-analysis-v2-app-qjr5yl.streamlit.app/#movie-sentiment-demo",
    githubUrl:
      "https://github.com/AelCee8103/movie_review-sentiment_analysis-v2.git",
  },
  {
    id: 8,
    title: "Heart Disease Prediction",
    description:
      "A Streamlit web app that predicts the presence of heart disease in patients using Random Forest machine learning model. Users can input patient data and receive instant predictions.",
    image: "/projects/heartdisease.png",
    tag: ["Web App", "Streamlit", "Python", "Machine Learning"],
    demoUrl:
      "https://aelcee8103-heart-disease-predictor-app-qp2txm.streamlit.app/",
    githubUrl: "https://github.com/AelCee8103/heart-disease-predictor.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          This here are some of my recent projects. Each one showcases different
          skills and technologies I've worked with, ranging from web
          applications to mobile games.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a href={project.image} target="_blank">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/15 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      target="_blank"
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title={
                        project.demoUrl === "#"
                          ? "Demo not available"
                          : "Demo available"
                      }
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/AelCee8103"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
