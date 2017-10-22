import React, {Component} from 'react';

export default class Recipe extends Component {

    render() {
        const ingridients = this.props.ingridients.map(ing => <li key={ing}>{ing}</li>)
        return (
          <div>
              <h1>{this.props.name}</h1>
              <img src={this.props.image}/>
              <p>{this.props.description}</p>
              <ul>
                  {ingridients}
              </ul>
          </div>
        );
    }
}