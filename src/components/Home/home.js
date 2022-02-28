import React, { Component } from "react";
import {
  HomeSection,
  HomeInfo,
  HomeTitle,
  HomeInfoHeader,
  HomeDesc,
  Span,
  Btn
} from "./style";

const Home = () => {
  return (
    <HomeSection>
      <div class="container">
        <HomeInfo>
          <HomeTitle>Hamza Nabil</HomeTitle>
          <HomeInfoHeader>Creative Director</HomeInfoHeader>
          <HomeDesc>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
          <Btn>Let's Begin</Btn>
        </HomeInfo>
      </div>
    </HomeSection>
  );
};

export default Home;
