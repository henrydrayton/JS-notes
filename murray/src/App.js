import React from 'react';
import { getProducts } from './api/products';
import './App.css';

class App extends React.Component {
  state = { 
    products: null,
    token: null
  }

  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  componentDidMount() {
    getProducts()
      .then(products => {
        console.dir(products);
        return Promise.resolve(products);
        // return products; // same same
      })
      .then(products => {
        this.setState({ products: products });
      });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({ token: '666' })
  // } 


  handleSubmit = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span>Murray</span>
            <span>The Store of Not Much</span>
          </h1>
        </header>
        <main>
          {
            !this.state.token &&
            <form onSubmit={this.handleSubmit} >
              <fieldset>
                <label>Email</label>
                <input name='email' type='text' />
              </fieldset>
              <fieldset>
                <label>Password</label>
                <input name='password' type='password' />
              </fieldset>
              <input type='submit' value='Sign In' />
            </form>
          }
          <hr />
          {
            this.state.products ?
              (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.products.map(product => (
                        <tr key={product.id} >
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              ) : (
                <div>Loading&hellip;</div>
              )
          }
        </main>
      </div>
    );
  }
}

export default App;
