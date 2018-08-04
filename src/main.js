'use strict';

function main() {
  console.log("JS Running");

  AOS.init({
    duration: 1000,
  })
}



window.addEventListener('load', main);