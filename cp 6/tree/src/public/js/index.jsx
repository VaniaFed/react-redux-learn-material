import '../sass/index.sass';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

const data = [
  {
    "name": "Baked Salmon",
    "ingredients": [
      { "name": "Salmon", "amount": 1, "measurement": "l lb" },
      { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
      { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
      { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
      { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ],
    "steps": [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  },
  {
    "name": "Fish Tacos",
    "ingredients": [
      { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
      { "name": "Cheese", "amount": 1, "measurement": "cup" },
      { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Tomatoes", "amount": 2, "measurement": "large"},
      { "name": "Tortillas", "amount": 3, "measurement": "med" }
    ],
    "steps": [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese"
    ]
  }
];

class Summary extends Component {
  render() {
    const { ingredients, steps, title } = this.props;
    return (
      <div className="summary">
        <h1>{title}</h1> 
        <p>
          <span>{ingredients} Ingredients | </span>
          <span>{steps} Steps</span>
        </p>
      </div>
    )
  }
}
// проверки на типы и расширенная проверка
Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error('A title must be a string') :
      (props[propName].length > 20) ?
        new Error('Title is over 20 characters') :
        null
}

// props by default
Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: 'recipe'
}

// в функциональных компонентах значения по умолчанию можно указывать в аргументах
// const Summary = ({ingrediends = 0, steps = 0, title='[recipe]'}) => {
//   return (
//     <div className="summary">
//       <h1>{title}</h1> 
//       <p>
//         <span>{ingredients} Ingredients | </span>
//         <span>{steps} Steps</span>
//       </p>
//     </div>
//   )
// }
// в функциональном стиле аналогично
// Summary.propTypes = {
//   ingredients: PropTypes.number.isRequired,
//   steps: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired
// }

// и свойства по умолчанию
// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: 'recipe'
// }

render(
  // <Summary />,
  <Summary ingredients={5} steps={4} title="Hello" />,
  document.querySelector('#react-app')
)