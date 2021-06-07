import React from "react";
import "./presentation.css";
import Presentation from "../../resumeDatas/presentationDatas";

class PresentationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="presentation">
        <div className="presentation-lil-section">
          <img
            className="avatar-cv"
            src="https://marineincerapro.github.io/pictures/incera-marine-photo.jpg"
            alt="picture"
            title="picture"
          />
          <div>
            <h2 className="presentation-text">{Presentation.name}</h2>
            <h3 className="presentation-text">{Presentation.phone}</h3>
            <h3 className="presentation-text">{Presentation.mail}</h3>
          </div>
        </div>
        <div className="big-skills">
          {Presentation.fondamentalsSkills.map((skill) => {
            return (
              <p className="big-skill" key={skill}>
                {skill}
              </p>
            );
          })}
        </div>
        {Presentation.personnalSkills.map((skill) => {
          return <p key={skill}>{skill}</p>;
        })}
        <div className="hobbies">
          {Presentation.hobbies.map((hobby) => {
            return (
              <p className="hobby" key={hobby.name}>
                {hobby.name}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PresentationSection;
