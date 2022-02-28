import React, { Component } from "react";
import {
  Drop,
  DropTitle,
  Form,
  Span,
  FormInput,
  InputText,
  InputEmail,
  Textarea,
  InputSub,
  Submit
} from "./style";

const Contact = () => {
  return (
    <Drop>
      <div class="container">
        <DropTitle>
          <Span>Drop </Span>Me A line
        </DropTitle>
        <Form action="">
          <FormInput>
            <InputText type="text" placeholder="Your Name" />
            <InputEmail type="email" placeholder="Your Email" />
          </FormInput>
          <InputSub type="text" class="sub" placeholder="Your Subject" />
          <Textarea cols="30" rows="10" placeholder="Your Message" />
          <Submit type="submit" value="Send Message" />
        </Form>
      </div>
    </Drop>
  );
};

export default Contact;
