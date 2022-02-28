import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  WorkTitle,
  Span,
  Part,
  Icon,
  PartTitle,
  Line,
  PartDesc
} from "./style";

class Work extends React.Component {
  state = {
    works: []
  };
  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({
        works: res.data.works
      });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map(workItem => {
      return (
        <Part first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name} />
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </Part>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
