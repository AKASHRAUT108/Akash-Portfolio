export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <div className="links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo →
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  );
}