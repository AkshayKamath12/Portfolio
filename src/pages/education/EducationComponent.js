import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";

class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
