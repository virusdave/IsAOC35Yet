import * as CSS from 'csstype';
import React from 'react';
import './App.css';
import ReachedDate from './components/ReachedDate';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <p>
          Has <a
            href="http://twitter.com/aoc"
            style={styles.link}
          >AOC</a> turned 35 yet?
        </p>
        <ReachedDate />
      </header>
    </div>
  );
}

const styles: { link: CSS.Properties } = {
  link: {
    color: "#4040f0",
    fontStyle: "normal",
    // width: '10px',
    // margin: '1em',
  }
};

export default App;
