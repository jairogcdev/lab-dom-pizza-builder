// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document
    .querySelectorAll('.mushroom')
    .forEach((oneMushroom) =>
      state.mushrooms
        ? (oneMushroom.style.visibility = 'visible')
        : (oneMushroom.style.visibility = 'hidden')
    );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document
    .querySelectorAll('.green-pepper')
    .forEach((oneGreenPepper) =>
      state.greenPeppers
        ? (oneGreenPepper.style.visibility = 'visible')
        : (oneGreenPepper.style.visibility = 'hidden')
    );
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    state.whiteSauce
      ? (oneSauce.style.visibility = 'visible')
      : (oneSauce.style.visibility = 'hidden');
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustGlutenFree = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustGlutenFree.classList.add('crust-gluten-free');
  } else {
    crustGlutenFree.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni === true) {
    document.querySelector('.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }
  if (state.mushrooms === true) {
    document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }
  if (state.greenPeppers === true) {
    document.querySelector('.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }
  if (state.whiteSauce === true) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }
  if (state.glutenFreeCrust === true) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = document.querySelector('.panel.price strong');
  let priceList = document.querySelector('.panel.price ul');
  const priceListItems = priceList.querySelectorAll('li');
  priceListItems.forEach((item) => {
    if (state.mushrooms && item.textContent === '$1 mushrooms') {
      item.style.display = 'block';
    } else if (state.pepperoni && item.textContent === '$1 pepperoni') {
      item.style.display = 'block';
    } else if (state.greenPeppers && item.textContent === '$1 green peppers') {
      item.style.display = 'block';
    } else if (state.whiteSauce && item.textContent === '$3 white sauce') {
      item.style.display = 'block';
    } else if (
      state.glutenFreeCrust &&
      item.textContent === '$5 gluten-free crust'
    ) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  price.innerHTML = `$${
    basePrice +
    (state.pepperoni ? ingredients.pepperoni.price : 0) +
    (state.mushrooms ? ingredients.mushrooms.price : 0) +
    (state.greenPeppers ? ingredients.greenPeppers.price : 0) +
    (state.whiteSauce ? ingredients.whiteSauce.price : 0) +
    (state.glutenFreeCrust ? ingredients.glutenFreeCrust.price : 0)
  }`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
