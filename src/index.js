/* 
  It's More Fun To Compute sample player. 

  Loads samples from the Kraftwerk song "Its More Fun To Compute",
  in a drum machine like grid. Samples are triggered by clicking, or 1-9 keys. 

  KEYBOARD TRIGGEDRING ADDED!! on 9/21/20
  TODO: figure out a way to preload the samples so there isn't a delay
  with the first played sample in a series.

  V 1.1 September 2020
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Gridbox(props) {
  return (
      <button className="gridbox" onClick={ props.onClick }>
        {props.label}
      </button>
  );
}

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridboxes: Array(9).fill(null),
      sampleURLs: [
        "https://www.rob-watson-designs.com/lmftc_Kick.mp3",
        "https://www.rob-watson-designs.com/lmftc_LazerSnare.mp3",
        "https://www.rob-watson-designs.com/lmftc_OpenHat.mp3",
        "https://www.rob-watson-designs.com/lmftc_KickWithHat.mp3",
        "https://www.rob-watson-designs.com/lmftc_BLIAUU1.mp3",
        "https://www.rob-watson-designs.com/lmftc_BLIAUU2.mp3",
        "https://www.rob-watson-designs.com/lmftc_BLIAUU3.mp3",
        "https://www.rob-watson-designs.com/lmftc_BLIAUU4.mp3",
        "https://www.rob-watson-designs.com/lmftc_BLIAUU5.mp3",
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  buttonClicked(i) {
   const audioElement = document.getElementById("sample" + i);
   audioElement.play();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  // 1-9 keys trigger samples:
  handleKeyPress(e) {
    switch(e.keyCode) {
      case 49:
        document.getElementById("sample0").play();
        break;
      case 50:
        document.getElementById("sample1").play();
        break;
      case 51:
        document.getElementById("sample2").play();
        break;
      case 52:
        document.getElementById("sample3").play();
        break;
      case 53:
        document.getElementById("sample4").play();
        break;
      case 54:
        document.getElementById("sample5").play();
        break;
      case 55:
        document.getElementById("sample6").play();
        break;
      case 56:
        document.getElementById("sample7").play();
        break;
      case 57:
        document.getElementById("sample8").play();
        break;
      default:
        break;
    }
  }
  
  renderGridbox(i) {
    return (
      <Gridbox
        label = { i + 1 }
        gridbox={ this.state.gridboxes[i] }
        onClick={ () => {this.buttonClicked(i)} }
      />
    );
  }

  render() {
    var kwSamples = this.state.sampleURLs.map (
      (sampleURL, i) => (
        <audio id = { "sample" + i } key = { i.toString() }>
          <source src = {sampleURL} type="audio/mpeg"/>
        </audio>
      )
    )
    return (
      <>
        <header>
          <h1>It's More Fun to Compute</h1>
          <h2>Kraftwerk Sample Player</h2>
          <h4>1-9 Keys trigger samples</h4>
        </header>
        <div className="grid-container">
          {this.renderGridbox(0)}
          {this.renderGridbox(1)}
          {this.renderGridbox(2)}
          {this.renderGridbox(3)}
          {this.renderGridbox(4)}
          {this.renderGridbox(5)}
          {this.renderGridbox(6)}
          {this.renderGridbox(7)}
          {this.renderGridbox(8)}
        </div>
        {kwSamples}
        <footer>
          <h3>RIP Florian Schneider</h3>
          <p>Rob Watson 2020</p>
          <h5>v1.1</h5>
        </footer>
      </>
    )
  }
}

ReactDOM.render (
  <Console />,
  document.getElementById('root')
);
