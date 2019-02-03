import { API_URL } from './utility/constant.js';

let value = document.createElement('p');
value.textContent = `API URL : ${API_URL}`;

document.body.appendChild(value);