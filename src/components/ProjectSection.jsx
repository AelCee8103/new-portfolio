import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    title: "Resubro",
    description:
    "A cloud-native resume optimizer using React Router, Tailwind CSS, and Zustand, which integrates the Puter.js API for AI-driven analysis and secure cloud storage, while leveraging PDF.js for automated content extraction to generate actionable ATS feedback.",
    image: "/projects/resubro.png",
    tag: ["Web App", "Puter API", "React", "JavaScript", "TypeScript", "AI Integration", "Tailwind CSS"],
    demoUrl: "https://puter.com/app/aelcee-ai-resume-analyzer",
    githubUrl: "https://github.com/AelCee8103/ai-resume-analyzer",
  },

  {
    id: 3,
    title: "CornHub",
    description:
      "A responsive website that allows users to search for movies, view their trailers, list their favorites, and create their own watchlists using PHP, MySQL, and JavaScript.",
    image: "/projects/cornhub.png",
    tag: ["Web App", "PHP", "MySQL", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/AelCee8103/CornHub.git",

  },


  {
    id: 4,
    title: "BookWormsQ",
    description:
    "A Bubble.io trivia app using the Open Trivia DB API where users customize quizzes by category and difficulty, earn points to climb the leaderboard, and review past quiz snapshots.",
    image: "/projects/bookwormsQ.png",
    tag: ["Web App", "Bubble.io", "Trivia Quiz App", ""],
    demoUrl: "https://bookwormsqver2.bubbleapps.io/version-test/",
    githubUrl: "#",
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
  const { toast } = useToast();

  const handleDemoClick = (e, project) => {
    const hasDemo =
      project.demoUrl &&
      project.demoUrl.trim() !== "" &&
      project.demoUrl !== "#";

    if (!hasDemo) {
      e.preventDefault();
      toast({
        title: "Demo not available",
        description: `Live demo for "${project.title}" is currently not available.`,
      });
    }
  };

  const handleCodeClick = (e, project) => {
    const hasCode =
      project.githubUrl &&
      project.githubUrl.trim() !== "" &&
      project.githubUrl !== "#";

    if (!hasCode) {
      e.preventDefault();
      toast({
        title: "No source code available",
        description: `Source code for "${project.title}" is not available. It is possible that the code is missing or the app was built using a no-code platform like Bubble.io etc.`,
      });
    }
  };

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
          {projects.map((project, key) => {
            const hasDemo =
              project.demoUrl &&
              project.demoUrl.trim() !== "" &&
              project.demoUrl !== "#";

            const hasCode =
              project.githubUrl &&
              project.githubUrl.trim() !== "" &&
              project.githubUrl !== "#";

            return (
              <div
                key={key}
                className="group relative bg-card rounded-lg shadow-xs card-hover hover:z-20"
              >
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <a href={project.image} target="_blank" rel="noopener noreferrer">
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
                    <div className="flex space-x-3 items-center">
                      <div className="relative group/tooltip inline-flex items-center">
                        <a
                          target={hasDemo ? "_blank" : undefined}
                          rel={hasDemo ? "noopener noreferrer" : undefined}
                          href={project.demoUrl || "#"}
                          onClick={(e) => handleDemoClick(e, project)}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-flex items-center justify-center p-1 rounded-md"
                          aria-label={
                            hasDemo ? "Demo available" : "Demo not available"
                          }
                        >
                          <ExternalLink size={20} />
                        </a>
                        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col items-center z-30">
                          <div className="whitespace-nowrap rounded-md bg-card border border-border px-2.5 py-1 text-xs font-medium text-foreground shadow-md">
                            {hasDemo ? "Demo available" : "Demo not available"}
                          </div>
                          <div className="w-2 h-2 -mt-1 rotate-45 bg-card border-r border-b border-border"></div>
                        </div>
                      </div>

                      <div className="relative group/tooltip inline-flex items-center">
                        <a
                          target={hasCode ? "_blank" : undefined}
                          rel={hasCode ? "noopener noreferrer" : undefined}
                          href={project.githubUrl || "#"}
                          onClick={(e) => handleCodeClick(e, project)}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-flex items-center justify-center p-1 rounded-md"
                          aria-label={
                            hasCode ? "Source code available" : "No source code available"
                          }
                        >
                          <Github size={20} />
                        </a>
                        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col items-center z-30">
                          <div className="whitespace-nowrap rounded-md bg-card border border-border px-2.5 py-1 text-xs font-medium text-foreground shadow-md">
                            {hasCode ? "Source code available" : "No source code available"}
                          </div>
                          <div className="w-2 h-2 -mt-1 rotate-45 bg-card border-r border-b border-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
