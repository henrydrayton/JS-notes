import React from 'react';
import './App.css';
import StockInfo from "./StockInfo" ;

function loadQuoteForStock(symbol) {
  if (symbol) {
    const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_IEX_TOKEN}`;
    return fetch(url)
      .then(resp => resp.json())
  } else {
    return Promise.resolve(null);
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.handleSymbolChange = this.handleSymbolChange.bind(this);
    this.handleLoadButton = this.handleLoadButton.bind(this);
    this.state = {
      symbol: '',
      quote: null,
    }
  }

  componentDidMount() {
    loadQuoteForStock(this.state.symbol)
      .then(quote => { 
        this.setState(() => ({ quote }))
      });
  }

  handleSymbolChange(event) {
    const input = event.target;
    let value = input.value;
    value = value.trim().toUpperCase();
    this.setState(() => ({ symbol: value }));
  }

  handleLoadButton(event) {
    loadQuoteForStock(this.state.symbol)
      .then(quote => { 
        this.setState(() => ({ quote }))
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wolf of React</h1>
          <div>
            <input name='symbol' value={this.state.symbol} onChange={this.handleSymbolChange} />
            <button onClick={this.handleLoadButton}>Load Quote</button>
          </div>
          <StockInfo { ...this.state.quote } />
        </header>
        <main>
          &nbsp;
        </main>
      </div>
    );
  }
}

export default App;
