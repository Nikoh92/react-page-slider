import React from 'react';

export default class TestSlider extends React.Component{

  constructor() {
    super();
    this.state={'sliderActivated' : false};
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
     this.setState({'sliderActivated' : true});
  }

  render() {
    var text = this.state.sliderActivated ? 'Slider activated' : 'Slider not activated';
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this._handleClick}>
          Click to show Slider.
        </button>
      </div>
    );
  }
};