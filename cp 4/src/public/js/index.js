import '../sass/index.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import 'create-react-class';

const title = React.createElement(
  'h1',
  null,
  'Baked Salmon',
);

const list = React.createElement(
  'ul',
  { className: 'ingredients' },
  React.createElement('li', null, '1 литр морской воды'),
  React.createElement('li', null, '1 литр соды'),
  React.createElement('li', null, '5 ведер песка'),
  React.createElement('li', null, 'Пару книг по Web Dev'),
  React.createElement('li', null, 'Несска лет изучать иностранный язык'),
  React.createElement('li', null, 'Всю жизнь жить в твери'),
);

const items = [
  '1 lb Salmon',
  '1 cup Pine Nuts',
  '2 cups Butter Lettuce',
  '1 Yellow Squash',
  '1/2 cup Olive Oil',
  '3 cloves of Garlic',
];

const ingredients = React.createElement(
  'section',
  { className: 'instructions' },
  React.createElement('h2', null, 'Cooking instructions'),
  React.createElement(
    'ul',
    null,
    items.map((content, i) => React.createElement('p', { key: i }, content)), // key нужен для эффективного обновления DOM
  ),
);

// const ingredientsList = React.createClass({
//   displayName: 'IngredientLists',
//   render() {
//     return React.createElement(
//       'h2',
//       null, 
//       items.map((content, i) => 
//         React.createElement('p', { key: i }, content), // key нужен для эффективного обновления DOM
//       )
//     )
//   }
// })

const container = React.createElement(
  'section',
  { id: 'baked-salmon' },
  title,
  list,
  ingredients,
);

console.log(container)

ReactDOM.render(container, document.querySelector('#react-app'));