import Vue from 'vue/dist/vue.js';
import './index.html';
import './style.css';

new Vue({
  el: '#app',
  data: {

  }
});


let upLikes = 0;
let downLikes = 0;

const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');

btnUp.addEventListener('click', () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
});

btnDown.addEventListener('click', () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
});

