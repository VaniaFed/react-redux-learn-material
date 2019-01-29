"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

{
  var name = "Ivan";
  var age = 18;
  var Person = {
    name: name,
    age: age,
    surname: 'Fedyakov',
    country: 'Russia' // деструктивное присваивание

  };
  var surname = Person.surname,
      country = Person.country;
  country = 'USA';
  surname = 'No Fedyakov';
  console.log(surname, country); // Fedyakov USA
  // при изменении локальной переменной значение в объекте не изменяется

  console.log(Person.surname, Person.country); // Fedyakov Russia
  // деструктурировать поступающий в аргументы объект

  var printBye = function printBye(_ref) {
    var name = _ref.name;
    var greeting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bye,';
    return "".concat(greeting, " ").concat(name);
  };

  console.log(printBye(Person)); // Bye, Ivan
} // деструризация значений из массивов

{
  var _ref2 = ['first', 'second', 'third'],
      firstArray = _ref2[0];
  console.log(firstArray); // first
}
{
  var _ref3 = ['first', 'second', 'third'],
      _firstArray = _ref3[1];
  console.log(_firstArray); // second
}
{
  var _ref4 = ['first', 'second', 'third'],
      _firstArray2 = _ref4[2];
  console.log(_firstArray2); // third
} // расширение объектных литералов

{
  var _name = 'Ivan';
  var _age = 18;
  var list = {
    name: _name,
    age: _age
  };
  console.log(list); // {name: "Ivan", age: 18}

  console.log(_typeof(list)); // object
} // оператор распространения (...)

{
  var animals = ['Wolf', 'Fox', 'Dog', 'Duck'];
  var fruit = ['Apple', 'Orange'];
  var result = [].concat(animals, fruit, ['Human']);
  console.log(result.join(', ')); // другой пример: берем последний айтем в last, а все остальное кладем в rest

  var _reverse = [].concat(animals).reverse(),
      _reverse2 = _toArray(_reverse),
      last = _reverse2[0],
      rest = _reverse2.slice(1);

  console.log(last);
  console.log(rest); // преобразование аргументов функции в массив

  var f = function f() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arr = args.map(function (item) {
      var min = 0;
      var max = 100;
      return item *= Math.round(min - 0.5 + Math.random() * (max - min + 1));
    });
    console.log(arr);
  };

  f.apply(void 0, [1, 2, 3, 4].concat([1, 2, 3, 4]));
} // оператор распространения для объектов

{
  var someField = 'Some value';
  var Book = {
    name: 'React и Redux - функциональная разработка',
    pages: 335,
    starts: 5
  };

  var newBook = _objectSpread({}, Book, {
    someField: someField
  });

  console.log(newBook);
} // промисы

{
  var getFakeMembers = function getFakeMembers(count) {
    return new Promise(function (resolves, rejects) {
      var api = "https://api.randomuser.me/?nat=US&results=".concat(count);
      var request = new XMLHttpRequest();
      request.open('GET', api);

      request.onload = function () {
        return request.status === 200 ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
      };

      request.onerror = function (err) {
        return rejects(err);
      };

      request.send();
    });
  };

  getFakeMembers(55).then(function (members) {
    return console.log(members);
  }, function (err) {
    return console.error(new Error("cannot load members from randomuser.me"));
  }).then(console.log());
}