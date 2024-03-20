import React, { useState, useEffect } from 'react';
import './App.css';
import linasImage from '../linas.jpg';
import chadleadImage from '../chadlead.jpg';
import winImage from '../win.png';
import loseImage from '../losses.webp';

function App() {
  const flexOptions = [
    "I bench press 300 pounds daily.",
    "I code in my sleep.",
    "I have a black belt in React.",
    "I use arch btw",
    "I can refactor entire Windows alone.",
    "I made the library you uses.",
    "I don't need Google, I just consult my brain's stack overflow.",
    "I speak machine code. only x0",
    "If spaghetti code had a face, it would look like yours.",
    "I use KINESIS",
    "My 1st year project is now called Facebook.",
    "You are soo dumb , you just rm -rf your database.",
    "You are soo fat , your hard drive has a weight limit.",
    "You are soo dumb , you fell on computer and crashes production.",
    "You are soo poor , you share your projects on localhost"
    // Add more flex options as needed
  ];

  const linasResponses = [
    "I code, therefore I am... caffeinated.",
    "I've got 99 problems, but a bug ain't one... said no developer ever.",
    "I am a professional pest controller or best bug killer.",
    "I have a FANG internship.",
    "I speak three languages fluently: English, Code, and Sarcasm.",
    "My code is so clean, it makes Mr. Clean jealous.",
    "I can code in binary with my eyes closed... and my hands tied behind my back",
    "Your code is so inefficient, it could power a small country's heating bill.",
    "I write code so fast, my keyboard needs a seatbelt.",
    "I don't need computer , I can make my own",
    "I made Linux Distros.",
    "Your code is soo dump , God made you inherit over Dumb class",
    "You are so fat, when you step on the scale, it displays an IP address.",
    "You are so fat, you break the internet every time you log on.",
    "I commit 1000 lines every day."
    // Add more Linas responses as needed
  ];

  const [messages, setMessages] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [randomOptions, setRandomOptions] = useState([]);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  useEffect(() => {
    // Set random options when component mounts
    setRandomOptions(getRandomOptions());
  }, []);

  const getRandomOptions = () => {
    // Function to randomly select 3 options from the flexOptions array
    const shuffledOptions = flexOptions.sort(() => 0.5 - Math.random());
    return shuffledOptions.slice(0, 3);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleUserMessage = (selectedFlex) => {
    // This function handles the user's message and determines Linas' response
    let linasResponse = linasResponses[Math.floor(Math.random() * linasResponses.length)];

    // Display user's flex
    // setMessages(prevMessages => [...prevMessages, { text: selectedFlex, sender: 'user' }]);

    // Randomly determine if the user wins or loses
    const randomOutcome = Math.random() < 0.5; // 50% chance of winning
    if (randomOutcome) {
      // Increment win count
      setWinCount(prevWinCount => prevWinCount + 1);
    } else {
      // Increment lose count
      setLoseCount(prevLoseCount => prevLoseCount + 1);
    }

    // Display Linas' response
    setMessages(prevMessages => [...prevMessages, { text: linasResponse, sender: 'user' }]);

    // Randomly select the next flex option for Linas
    const linasOption = flexOptions[Math.floor(Math.random() * flexOptions.length)];
    setMessages(prevMessages => [...prevMessages, { text: linasOption, sender: 'linas' }]);

    // Get new random options for display
    setRandomOptions(getRandomOptions());
  };

  return (
    <div className="app">
      <h1>Soy Dev v/s Chad Lead 🗿</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`} style={{ backgroundColor: message.sender === 'user' ? '#26F7FD' : '#bb0a1e' }}>
            <img src={message.sender === 'user' ? chadleadImage : linasImage} alt="...someone" className="avatar" width="200" />
            <p className="text pd" style={{ backgroundColor: 'white' }}>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="options-container">
        {randomOptions.map((option, index) => (
          <button key={index} className="option" onClick={() => handleUserMessage(option)}>{option}</button>
        ))}
      </div>
      <div>
        <img src={winImage} alt="Win" width="100" /> <p style={{ paddingTop: "1rem" }}>Wins: {winCount}</p>
        <img src={loseImage} alt="Lose" width="100" /> <p>Loses: {loseCount}</p>
      </div>
    </div>
  );
}

export default App;
