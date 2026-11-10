import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* 1. Hero Section */}
      <header className="hero">
        <h1>Akash Kumar</h1>
        <p>AI/ML engineer building practical ML systems.</p>
        <div className="hero-links">
          <a href="https://github.com/AKASHRAUT108" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akash-kumar-76274436a/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:akashraut8851@gmail.com">Email</a>
        </div>
      </header>

      {/* 2. Projects Section */}
      <section className="projects">
        <h2>Selected Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. About Section */}
      <section className="about">
        <h2>About</h2>
        <p>
          I'm an AI/ML candidate focused on building and shipping ML-powered
          applications. My work spans NLP, computer vision, and deployment.
        </p>
      </section>

      {/* 4. Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Reach me at <a href="mailto:you@email.com">you@email.com</a></p>
      </section>
    </div>
  );
}

export default App;