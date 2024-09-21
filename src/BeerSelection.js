import React from 'react';

function BeerSelection({ onSelectBeer }) {
  return (
    <div className="beer-selection">
      <h2>Select a Beer to Quiz</h2>
      <button onClick={() => onSelectBeer('Follow the Sun')}>Follow the Sun</button>
      <button onClick={() => onSelectBeer('Windansea')}>Windansea</button>
      <button onClick={() => onSelectBeer('Red Trolley')}>Red Trolley</button>
      <button onClick={() => onSelectBeer('Mosaic IPA')}>Mosaic IPA</button>
      <button onClick={() => onSelectBeer('Aurora Hoppyalis')}>Aurora Hoppyalis</button>
      <button onClick={() => onSelectBeer('Tower X IPA')}>Tower X IPA</button>
      <button onClick={() => onSelectBeer('Boat Shoes')}>Boat Shoes</button>
      <button onClick={() => onSelectBeer('Wreck Alley')}>Wreck Alley</button>
      <button onClick={() => onSelectBeer('all')}>All Beers</button>
    </div>
  );
}

export default BeerSelection;
