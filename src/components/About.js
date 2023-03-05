import React from "react";

export default function About(props) {

  let mode = props.mode;
  return (
    <div className="container border p-5" style={{color:(mode?"white":"black")}}>
      <p>
        TextHive is a powerful text utility application that helps you
        manipulate and analyze text easily. With Textify, you can count the
        number of words and characters in your text, calculate the reading time,
        and convert your text to uppercase or lowercase. You can also remove
        extra spaces and copy and paste text effortlessly. Plus, with the dark
        mode feature, you can work comfortably in low-light environments.
      </p>

      <p>
        Whether you're a student, writer, or just someone who works with text
        frequently, Textify is the perfect tool to simplify your work and
        enhance your productivity. Try it today and experience the power of text
        manipulation at your fingertips!
      </p>

      <p>
        This is a mini React project done by Maanas Bhardwaj. The referance and inspiration for this mini project is taken from a Code With Harry's YouTube Video. 
      </p>
    </div>
  );
}
