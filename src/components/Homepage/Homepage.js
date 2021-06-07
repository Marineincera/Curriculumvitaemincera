import React from "react";
import "./homepage.css";
import Skills from "../../resumeDatas/skillsDatas";
import SectionComponent from "../SectionComponent/SectionComponent";
import WebExperience from "../../resumeDatas/professionnalDatas";
import Education from "../../resumeDatas/educationDatas";
import { FaUserCircle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import PresentationSection from "../PresentationComponent/Presentation";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presentationOpened: false
    };
  }

  openPresentation() {
    let newOpenState = !this.state.presentationOpened;
    this.setState((state) => ({ presentationOpened: newOpenState }));
  }

  render() {
    return (
      <div id="homepage">
        <div className="menu-item">
          <FaUserCircle onClick={() => this.openPresentation()}></FaUserCircle>
        </div>
        <h1>Développeuse web junior</h1>
        <FaLaptopCode className="laptop"></FaLaptopCode>
        <div className="subtitles">
          <h2>JavaScript</h2>
          <h2>Angular</h2>
          <h2>React.js</h2>
          <h2>Node Js</h2>
          <h2>React Native</h2>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="presentation responsive-presentation ">
              <PresentationSection></PresentationSection>
            </div>
            {this.state.presentationOpened === true ? (
              <div className="presentation ">
                <PresentationSection></PresentationSection>
              </div>
            ) : null}
          </div>
          <div className="responsive">
            <SectionComponent
              title="Compétences"
              list={Skills[0].skillsList}
            ></SectionComponent>
            <SectionComponent
              title="Experiences"
              list={WebExperience[0]}
            ></SectionComponent>
            <SectionComponent
              title="Education"
              list={Education}
            ></SectionComponent>
            <SectionComponent
              title="Autres Experiences"
              list={WebExperience[1]}
            ></SectionComponent>
            <SectionComponent
              title="Autres Compétences"
              list={Skills[1]}
            ></SectionComponent>
            <PresentationSection></PresentationSection>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
