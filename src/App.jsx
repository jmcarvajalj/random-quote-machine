import { useEffect, useState } from "react"
import data from "./quotes.json"

export default function App() {
  
  const [currentQuote, setCurrentQuote] = useState({})

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * data.quotes.length)
    setCurrentQuote(data.quotes[randomNumber])
    console.log(currentQuote)
  },[])
  

  function getNewQuote() {
    let randomNumber = Math.floor(Math.random() * data.quotes.length)
    setCurrentQuote(data.quotes[randomNumber])
  }

  return (
    <div id="quote-box">
      <div id="text">
        <h2>{currentQuote.quote}</h2>
      </div>
      <div id="author">
        <h4>- {currentQuote.author}</h4>
      </div>
      <div className="buttons">
        <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote" rel="noreferrer"><img id="twitter-logo" src="./src/assets/twitter-logo.png" alt="twitter-logo" /></a>
        <button onClick={getNewQuote} id="new-quote">New quote</button>
      </div>
    </div>
  )
}

// TODO: Instead of using local json file, 
//make api call: https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
  