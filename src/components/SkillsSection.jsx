import React, { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
  //Design skills
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 87, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "Dart", level: 60, category: "frontend" },

  //Backend and Database skills
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Python", level: 88, category: "backend" },
  { name: "MySQL", level: 95, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Express", level: 75, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Laravel", level: 62, category: "backend" },
  { name: "Java", level: 85, category: "backend" },
  { name: "JDBC", level: 53, category: "backend" },
  { name: "Firebase", level: 64, category: "backend" },

  //Tools
  { name: "Git/GitHub", level: 93, category: "tools" },
  { name: "Docker", level: 56, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Flutter", level: 78, category: "tools" },
  { name: "FlutterFlow", level: 88, category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className=" flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-fore-ground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-left text-lg">
                  {" "}
                  {skill.name}
                </h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm  text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
