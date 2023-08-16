// variables
const largometrajes = localStorage.getItem('largometrajes') ? JSON.parse(localStorage.getItem('largometrajes')) : [];
const cortometrajes = localStorage.getItem('cortometrajes') ? JSON.parse(localStorage.getItem('cortometrajes')) : [];

// Update local storage
const updateLocalStorage = () => {
  localStorage.setItem('largometrajes', JSON.stringify(largometrajes));
  localStorage.setItem('cortometrajes', JSON.stringify(cortometrajes));
};

// Function to add dynamic fields
function addPrizeField() {
  const input = document.createElement('input');
  input.classList.add('form-data');
  input.name = 'prizes';
  input.type = 'text';
  input.placeholder = 'ej. Selección Oficial de Chicago Latino Film Festival 2015';
  if (!hasDefaultPrizeInput) {
    input.required = true;
    hasDefaultPrizeInput = true;
  }
  prizesContainer.insertAdjacentElement('beforeend', document.createElement('br'));
  prizesContainer.insertAdjacentElement('beforeend', input);
  currentPrizeInput.removeEventListener('change', addPrizeField);
  currentPrizeInput = input;
  currentPrizeInput.addEventListener('change', addPrizeField);
}

function addSceneField() {
  const input = document.createElement('input');
  input.classList.add('form-data');
  input.name = 'scenes';
  input.type = 'text';
  input.placeholder = 'Enlace de imagen';
  if (!hasDefaultSceneInput) {
    input.required = true;
    hasDefaultSceneInput = true;
  }
  scenesContainer.insertAdjacentElement('beforeend', document.createElement('br'));
  scenesContainer.insertAdjacentElement('beforeend', input);
  currentSceneInput.removeEventListener('change', addSceneField);
  currentSceneInput = input;
  currentSceneInput.addEventListener('change', addSceneField);
}

function addBehindSceneField() {
  const input = document.createElement('input');
  input.classList.add('form-data');
  input.name = 'behind_scenes';
  input.type = 'text';
  input.placeholder = 'Enlace de imagen';
  if (!hasDefaultBehindSceneInput) {
    input.required = true;
    hasDefaultBehindSceneInput = true;
  }
  behindScenesContainer.insertAdjacentElement('beforeend', document.createElement('br'));
  behindScenesContainer.insertAdjacentElement('beforeend', input);
  currentBehindSceneInput.removeEventListener('change', addBehindSceneField);
  currentBehindSceneInput = input;
  currentBehindSceneInput.addEventListener('change', addBehindSceneField);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const inputFields = document.querySelectorAll('.form-data');
  const formData = {};

  inputFields.forEach((input) => {
    const field = input.name;
    const value = input.value;

    if (formData[field]) {
      if (Array.isArray(formData[field])) {
        if (value.trim() !== '') {
          formData[field].push(value);
        }
      } else {
        if (value.trim() !== '') {
          formData[field] = [formData[field], value];
        } else {
          formData[field] = [formData[field]];
        }
      }
    } else {
      formData[field] = value;
    }
  });

  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    const optionValue = selectedOption.value;

    if (optionValue === 'largometraje') {
      largometrajes.push(formData);
    } else {
      cortometrajes.push(formData);
    }
  }

  // Reset form
  form.reset();
  prizesContainer.innerHTML = `Premio(s)`;
  hasDefaultPrizeInput = false;
  addPrizeField();
  currentPrizeInput.addEventListener('change', addPrizeField);

  scenesContainer.innerHTML = `imagen(es)`;
  hasDefaultSceneInput = false;
  addSceneField();
  currentSceneInput.addEventListener('change', addSceneField);

  behindScenesContainer.innerHTML = `Detras de camara(s)`;
  hasDefaultBehindSceneInput = false;
  addBehindSceneField();
  currentBehindSceneInput.addEventListener('change', addBehindSceneField);

  updateLocalStorage();
}

// Attach event listeners
const prizesContainer = document.getElementById('prizesContainer');
let currentPrizeInput = document.querySelector('input[name="prizes"]');
let hasDefaultPrizeInput = true;
currentPrizeInput.addEventListener('change', addPrizeField);

const scenesContainer = document.getElementById('scenesContainer');
let currentSceneInput = document.querySelector('input[name="scenes"]');
let hasDefaultSceneInput = true;
currentSceneInput.addEventListener('change', addSceneField);

const behindScenesContainer = document.getElementById('behindScenesContainer');
let currentBehindSceneInput = document.querySelector('input[name="behind_scenes"]');
let hasDefaultBehindSceneInput = true;
currentBehindSceneInput.addEventListener('change', addBehindSceneField);

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);