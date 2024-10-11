import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.myStyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    };
  }

  componentDidMount() {
    // Start loading progress
    this.props.setProgress(70);
    console.log("About component has been opened");

    // Simulate an API call or data fetching
    setTimeout(() => {
      // After data fetching is complete
      this.props.setProgress(100);
    }, 500); // Adjust the delay as needed
  }

  componentWillUnmount() {
    console.log("About component is closing");
  }

  render() {
    return (
      <>
        <div className="container" style={this.myStyle}>
          <h1 className="text-center mt-4 mb-4">About Our NewsApp</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  style={this.myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Our Mission
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={this.myStyle}>
                  <strong>Delivering Real-Time News at Your Fingertips.</strong> Our
                  mission is to provide the latest, most accurate, and relevant
                  news from across the world, delivered right to your screen. From
                  breaking news to in-depth analysis, we aim to keep you informed
                  and engaged with current affairs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  style={this.myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Features
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={this.myStyle}>
                  <strong>Stay Updated with These Powerful Features:</strong>
                  <ul>
                    <li>Real-time updates on breaking news stories</li>
                    <li>
                      Customizable news feed based on your preferences and
                      interests
                    </li>
                    <li>In-depth articles on politics, business, sports, and more</li>
                    <li>
                      Notification alerts for major events and important headlines
                    </li>
                    <li>Offline mode for reading news even without an internet connection</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  style={this.myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Why Choose Us?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={this.myStyle}>
                  <strong>Your Trusted News Source.</strong> We understand the
                  importance of reliable information in today's fast-paced world.
                  Our team of experienced journalists works around the clock to
                  bring you factual, unbiased reporting, ensuring that you're
                  always in the loop with the most credible sources available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
