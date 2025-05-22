import './style.css'
import { setupCounter } from './counter.js'
import { setupRotAndContent } from './setupRoot.js';

document.querySelector('#app').innerHTML = setupRotAndContent();


setupCounter(document.querySelector('#counter'))
