import React from "react";
import "./sectionComponent.css";

class SectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webSkillsOpenState: true,
      experienceOpenState: true,
      educationOpenState: true,
      othersExperiencesOpenState: true,
      othersSkillsOpenState: true
    };
  }

  renderWebSkillsList(list) {
    return list.map((element) => {
      return (
        <p key={element} className="list-element">
          {" "}
          - {element}
        </p>
      );
    });
  }

  renderWebExperience(list) {
    return list.map((element) => {
      return (
        <div key={element.company} className="webExperienceElement">
          <h2 className="date">{element.date}</h2>
          <h3 className="company">{element.company}</h3>
          <h3>{element.description}</h3>
          {element.projects.map((project) => {
            return (
              <div key={project.projectTitle} className="web-project">
                <h3 className="project-title"> {project.projectTitle}</h3>
                <p>{project.description}</p>
                {project.githubLinks ? (
                  <a href={project.githubLinks[0]}>Lien Front</a>
                ) : null}
                <br></br>
                {project.githubLinks && project.githubLinks[1] ? (
                  <a href={project.githubLinks[1]}>Lien API</a>
                ) : null}
              </div>
            );
          })}
        </div>
      );
    });
  }

  renderEducation(list) {
    return list.map((formation) => {
      return (
        <div key={formation.title} className="formation">
          <h3 className="formation-title">{formation.title}</h3>
          <h3 className="formation-title">{formation.school}</h3>
          <p>{formation.date}</p>
          <p>{formation.level}</p>
          <p>{formation.description}</p>
        </div>
      );
    });
  }

  renderOthersExperience(list) {
    let num = 0;
    return list.map((element) => {
      num = num + 1;
      return (
        <div key={num} className="formation">
          <h2 className="date">{element.workTitle}</h2>
          <h3 className="company">{element.company}</h3>
          <h2 className="date">{element.date}</h2>
          <h3>{element.description}</h3>
        </div>
      );
    });
  }

  renderOthersSkillsOpenState(list) {
    let num = 0;
    return list.map((element) => {
      num = num + 1;
      return (
        <div key={num} className="others-skills">
          <h2 className="date">{element.title}</h2>
          {element.skillsList.map((skill) => {
            if (skill.name) {
              return (
                <div key={skill.name}>
                  <p>{skill.name}</p>
                </div>
              );
            } else {
              return <p key={skill}>- {skill}</p>;
            }
          })}
        </div>
      );
    });
  }

  openCloseSection(title) {
    if (title === "Compétences") {
      let newOpenState = !this.state.webSkillsOpenState;
      this.setState((state) => ({ webSkillsOpenState: newOpenState }));
    }
    if (title === "Experiences") {
      let newOpenState = !this.state.experienceOpenState;
      this.setState((state) => ({ experienceOpenState: newOpenState }));
    }
    if (title === "Education") {
      let newOpenState = !this.state.educationOpenState;
      this.setState((state) => ({ educationOpenState: newOpenState }));
    }
    if (title === "Autres Experiences") {
      let newOpenState = !this.state.othersExperiencesOpenState;
      this.setState((state) => ({ othersExperiencesOpenState: newOpenState }));
    }
    if (title === "Autres Compétences") {
      let newOpenState = !this.state.othersSkillsOpenState;
      this.setState((state) => ({ othersSkillsOpenState: newOpenState }));
    }
  }

  render() {
    return (
      <div className="section">
        <div
          className="title"
          onClick={() => this.openCloseSection(this.props.title)}
        >
          {this.props.title}
        </div>
        <div className="content">
          {this.props.title === "Compétences" &&
          this.state.webSkillsOpenState === true
            ? this.renderWebSkillsList(this.props.list)
            : null}
          {this.props.title === "Experiences" &&
          this.state.experienceOpenState === true
            ? this.renderWebExperience(this.props.list)
            : null}
          {this.props.title === "Education" &&
          this.state.educationOpenState === true
            ? this.renderEducation(this.props.list)
            : null}
          {this.props.title === "Autres Experiences" &&
          this.state.othersExperiencesOpenState === true
            ? this.renderOthersExperience(this.props.list)
            : null}
          {this.props.title === "Autres Compétences" &&
          this.state.othersSkillsOpenState === true
            ? this.renderOthersSkillsOpenState(this.props.list)
            : null}
        </div>
      </div>
    );
  }
}

export default SectionComponent;
