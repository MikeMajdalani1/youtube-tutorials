import "./project.scss";

function Project({ name, picture, content, url }) {
  return (
    <div className="projectCard">
      <a className="testimonialLink" href={url}>
        <img className="projectImage" alt="project" src={picture}></img>
      </a>
      <div className="projectInfo">
        <span className="projectTitle">{name}</span>
        <span className="projectContent">{content}</span>
      </div>
    </div>
  );
}
export default Project;
