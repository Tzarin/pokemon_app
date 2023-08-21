// Index.jsx
import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        {/* Map through your pokemon array and display data */}
        {this.props.pokemon.map(poke => (
          <div key={poke.name}>
            <h2>{poke.name}</h2>
            <img src={poke.img} alt={poke.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default Index;

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/pokemon', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.jsx'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
