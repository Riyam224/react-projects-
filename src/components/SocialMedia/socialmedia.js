import React, { Component } from "react";
import "./style.css";
class SocialMedia extends React.Component {
  render() {
    return (
      <div class="social-media">
        <div class="social face">
          <i class="icon fa fa-facebook fa-lg" />
          <p>
            <span class="info1">Follow Me on</span>
            <span class="info2">Social Facebook</span>
          </p>
        </div>

        <div class="social twitter">
          <i class="icon fa fa-twitter fa-lg" />
          <p>
            <span class="info1">Tweet Me on</span>
            <span class="info2">Social twitter</span>
          </p>
        </div>

        <div class="social pin">
          <i class="icon fa fa-pinterest fa-lg" />
          <p>
            <span class="info1">Pin Me on</span>
            <span class="info2">Social Pinterest</span>
          </p>
        </div>
      </div>
    );
  }
}
export default SocialMedia;
