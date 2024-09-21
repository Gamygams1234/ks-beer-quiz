import React, { useState } from 'react';
import "./App.css";

import BeerSelection from './BeerSelection';
import Quiz from './Quiz';
import Result from './Result';

const beers = [
  {
    name: "Follow the Sun",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Follow the Sun?", 
        answer: "4.2%", 
        options: ["4.2%", "5.1%", "5.8%", "7.0%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Follow the Sun?", 
        answer: "Rice Lager", 
        options: ["Rice Lager", "Mexican Lager", "Hefeweizen", "IPA"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Follow the Sun?", 
        answer: "Bright, Crisp, Refreshing", 
        options: ["Bright, Crisp, Refreshing", "Citrus, Pine, Hoppy", "Dark, Toffee, Strong", "Smooth, Fruity, Light"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Follow the Sun?", 
        answer: "Sapporo, Ichiban", 
        options: ["Sapporo, Ichiban", "Stone IPA, Voodoo Ranger", "Old Rasputin, Samuel Smith", "Widmer Heff, Killians"]
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Follow the Sun?", 
        answer: "Seafood, Seared Ahi Salad", 
        options: ["Seafood, Seared Ahi Salad", "Steak, BBQ, Asada Fries", "Mac on Tap, Rich Foods", "Spicy Tacos, Desserts"]
      }
    ]
  },
  {
    name: "Windansea",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Windansea?", 
        answer: "5.1%", 
        options: ["5.1%", "4.2%", "6.5%", "7.3%"] 
      },
      { 
        key: "Style", 
        question: "What is the style of Windansea?", 
        answer: "Bavarian Hefeweizen", 
        options: ["Bavarian Hefeweizen", "Lager", "IPA", "Imperial Stout"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Windansea?", 
        answer: "Banana, Clove, Bubble Gum", 
        options: ["Banana, Clove, Bubble Gum", "Dark, Toffee, Espresso", "Citrus, Pine, Hoppy", "Smooth, Malty, Creamy"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Windansea?", 
        answer: "Widmer Heff", 
        options: ["Widmer Heff", "Sapporo", "Ballast Point Sculpin", "Old Rasputin"] 
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Windansea?", 
        answer: "Spiced dishes, Chicken tacos", 
        options: ["Spiced dishes, Chicken tacos", "Mac on Tap, Creamy Foods", "Seafood, Ahi Salad", "Steak, BBQ, Asada Fries"]
      }
    ]
  },
  {
    name: "Red Trolley",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Red Trolley?", 
        answer: "5.8%", 
        options: ["5.8%", "7.0%", "4.2%", "6.5%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Red Trolley?", 
        answer: "Irish Red Ale", 
        options: ["Irish Red Ale", "West Coast IPA", "San Diego IPA", "Lager"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Red Trolley?", 
        answer: "Toffee, Biscuity, Crisp", 
        options: ["Toffee, Biscuity, Crisp", "Citrus, Tropical, Juicy", "Dark, Chocolate, Strong", "Pineapple, Tangerine, Melon"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Red Trolley?", 
        answer: "Killians Irish Red, Smithwick", 
        options: ["Killians Irish Red, Smithwick", "Sapporo, Ichiban", "Stone IPA, Voodoo Ranger", "Old Rasputin, Samuel Smith"]
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Red Trolley?", 
        answer: "Savory, steaks, pork-chops", 
        options: ["Savory, steaks, pork-chops", "BBQ, Food Truck Burger", "Seafood, Rich Creamy Foods", "Mac on Tap, Desserts"]
      }
    ]
  },
  // Add the other beers in the same structure...
  {
    name: "Mosaic IPA",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Mosaic IPA?", 
        answer: "5.5%", 
        options: ["5.5%", "7.3%", "5.1%", "4.2%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Mosaic IPA?", 
        answer: "Session IPA", 
        options: ["Session IPA", "SD IPA", "Hazy IPA", "Hefeweizen"]
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Mosaic IPA?", 
        answer: "Grapefruit, Citrus, Tropical", 
        options: ["Grapefruit, Citrus, Tropical", "Dark, Malty, Strong", "Bright, Crisp, Light", "Banana, Clove, Bubble Gum"]
      },

      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Mosaic IPA?", 
        answer: "Richer, creamier foods, Mac on Tap", 
        options: ["Richer, creamier foods, Mac on Tap", "Seafood, Seared Ahi Salad", "Spiced dishes, Chicken Tacos", "Steak, BBQ, Asada Fries"]
      }
    ]
  }, {
    name: "Aurora Hoppyalis",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Aurora Hoppyalis San Diego IPA?", 
        answer: "7.0%", 
        options: ["7.0%", "4.2%", "5.8%", "7.3%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Aurora Hoppyalis?", 
        answer: "San Diego IPA", 
        options: ["San Diego IPA", "West Coast IPA", "Imperial Stout", "Lager"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Aurora Hoppyalis?", 
        answer: "Pineapple, Tangerine, Melon", 
        options: ["Pineapple, Tangerine, Melon", "Citrus, Pine, Tropical", "Dark, Toffee, Espresso", "Bright, Crisp, Refreshing"]
      },
  
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Aurora Hoppyalis?", 
        answer: "Richer, creamier foods, Mac on Tap", 
        options: ["Richer, creamier foods, Mac on Tap", "BBQ, Steak, Asada Fries", "Seafood, Ahi Salad", "Spicy Tacos, Chicken Dishes"]
      }
    ]
  },
  {
    name: "Tower X IPA",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Tower X IPA?", 
        answer: "7.3%", 
        options: ["7.3%", "5.1%", "6.5%", "9.0%"] 
      },
      { 
        key: "Style", 
        question: "What is the style of Tower X IPA?", 
        answer: "West Coast IPA", 
        options: ["West Coast IPA", "Hefeweizen", "Hazy IPA", "Lager"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Tower X IPA?", 
        answer: "Crisp, Pine, Citrus", 
        options: ["Crisp, Pine, Citrus", "Banana, Clove, Bubble Gum", "Grapefruit, Citrus, Tropical", "Toffee, Biscuity, Crisp"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Tower X IPA?", 
        answer: "Stone IPA, Ballast Point Sculpin", 
        options: ["Stone IPA, Ballast Point Sculpin", "Sapporo, Ichiban", "Old Rasputin, Samuel Smith", "Widmer Heff, Killians"]
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Tower X IPA?", 
        answer: "Steak, BBQ, Food Truck Burger", 
        options: ["Steak, BBQ, Food Truck Burger", "Seafood, Ahi Salad", "Rich Creamy Foods, Mac on Tap", "Desserts, Beermisu"]
      }
    ]
  },
  {
    name: "Boat Shoes",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Boat Shoes?", 
        answer: "7.2%", 
        options: ["7.2%", "7.0%", "5.5%", "4.2%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Boat Shoes?", 
        answer: "Hazy IPA", 
        options: ["Hazy IPA", "Irish Red Ale", "IPA", "Lager"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Boat Shoes?", 
        answer: "Citrus, Tropical, Juicy", 
        options: ["Citrus, Tropical, Juicy", "Pineapple, Tangerine, Melon", "Bright, Crisp, Refreshing", "Dark, Toffee, Strong"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Boat Shoes?", 
        answer: "Stone Hazy, Voodoo Ranger", 
        options: ["Stone Hazy, Voodoo Ranger", "Widmer Heff, Sapporo", "Old Rasputin, Samuel Smith", "Stone IPA, Ballast Point"]
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Boat Shoes?", 
        answer: "Seafood, rich cream/cheese sauces, Asada fries", 
        options: ["Seafood, rich cream/cheese sauces, Asada fries", "Steak, BBQ, Food Truck Burger", "Richer, creamier foods, Mac on Tap", "Desserts, Beermisu"]
      }
    ]
  },
  {
    name: "Wreck Alley",
    questions: [
      { 
        key: "ABV", 
        question: "What is the ABV of Wreck Alley?", 
        answer: "9.0%", 
        options: ["9.0%", "7.2%", "5.5%", "6.5%"]
      },
      { 
        key: "Style", 
        question: "What is the style of Wreck Alley?", 
        answer: "Imperial Stout", 
        options: ["Imperial Stout", "IPA", "Hefeweizen", "Lager"] 
      },
      { 
        key: "3 Word Descriptor", 
        question: "What are the 3 word descriptors for Wreck Alley?", 
        answer: "Dark chocolate, Toffee, Espresso", 
        options: ["Dark chocolate, Toffee, Espresso", "Citrus, Tropical, Pine", "Bright, Crisp, Refreshing", "Banana, Clove, Bubble Gum"]
      },
      { 
        key: "Similar Beers", 
        question: "Which beers are similar to Wreck Alley?", 
        answer: "Old Rasputin, Samuel Smith Imperial Stout", 
        options: ["Old Rasputin, Samuel Smith Imperial Stout", "Voodoo Ranger, Killians Irish Red", "Stone IPA, Ballast Point Sculpin", "Widmer Heff, Ichiban"]
      },
      { 
        key: "Pairing Options", 
        question: "What are the pairing options for Wreck Alley?", 
        answer: "Desserts, Beermisu", 
        options: ["Desserts, Beermisu", "Steak, BBQ, Asada Fries", "Mac on Tap, Rich Foods", "Seafood, Chicken Tacos"]
      }
    ]
  }
  // Continue for Aurora Hoppyalis, Tower X, Boat Shoes, and Wreck Alley...
];



function App() {
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0)

  const handleBeerSelection = (beerName) => {
    if (beerName === 'all') {
      // If user selects 'All Beers', combine all beer questions
      const allQuestions = beers.flatMap(beer => beer.questions);
      setSelectedBeer({ name: 'All Beers', questions: allQuestions });
    } else {
      // Otherwise, find the selected beer
      const beer = beers.find(b => b.name === beerName);
      setSelectedBeer(beer);
    }
  };

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setIsQuizFinished(true);
  };

  const handleRestart = () => {
    setSelectedBeer(null);
    setIsQuizFinished(false);
    setScore(0);
    setTotal(0)
  };

  const addTotal=()=>{
    setTotal(total +1)
  }

  return (
    <div className="app">
      {!selectedBeer && <BeerSelection onSelectBeer={handleBeerSelection} />}
      {selectedBeer && !isQuizFinished && (
        <Quiz addTotal = {addTotal} handleRestart= {handleRestart} beer={selectedBeer} onComplete={handleQuizCompletion} />
      )}
      {isQuizFinished && <Result score={score} onRestart={handleRestart} total={total} />}
    </div>
  );
}

export default App;