import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      author: ''
    }
  }
 componentDidMount() {
  this.getQuotes()
 }

getQuotes = () => {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
   .then( response => response.json())
   .then( data => {
    let getRandomNum = Math.floor(Math.random() * data.quotes.length); 
    const { quote, author } = data.quotes[getRandomNum]
    this.setState({
      quotes: quote,
      author: author
    })}
   )
   .catch(err => console.log(err))
}

  render() {
    const { quotes, author } = this.state;
    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${this.state.quotes}`

    return (
    <div className="App"  id="quote-box">
      <div className="card">
        <h1>Random Quotes App</h1>
        <h4 className="heading" id="text">{quotes}</h4>
        <h5 id="author">-- {author}</h5>
        <button className="button" id="new-quote" onClick = {this.getQuotes}><span>New Quote</span></button>
        <button className="button">
        <a id="tweet-quote" href = {tweetURL}>Tweet Quote</a>
        </button>
      </div>
    </div>
  );}
}

export default App;