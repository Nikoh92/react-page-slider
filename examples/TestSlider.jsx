import React from 'react';
import PageSlider from '../lib/index.min';

class TestSlider extends React.Component {

  constructor() {
    super();
    this.state={ 'sliderActivated' : false , 'count': 0 };
    this._closeClick = this._closeClick.bind(this);
    this._handleClick = this._handleClick.bind(this);    
  }

  _closeClick(e) {
    e.preventDefault();
    this.setState({ 'count': (this.state.count+1) % 4 });
    this.setState({ 'sliderActivated' : false });    
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({ 'sliderActivated' : true });    
  }

  render() {
    const text = this.state.sliderActivated ? 'Activated' : 'not Activated';
    const slide = [ 'left','right','top','bottom' ][this.state.count];

    const customStyle = {
      backgroundColor: '#009cde'
    };

    return (      
      <div>        
        <div>
            <h1>{`Page Slider ${text}`}</h1>
            <button onClick={this._handleClick}>
                {'Click to activate Slider.'}
            </button>
        </div>
        <PageSlider customStyle={customStyle} show={this.state.sliderActivated} slideFrom={slide}>
            <div>
              {'This is overlay div'}<br/>
              <button onClick={this._closeClick}>
                {'Close'}
              </button>
            </div>
        </PageSlider>
      </div>
    );
  }
};

export default TestSlider;
