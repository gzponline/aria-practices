/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

'use strict';

/**
 * ARIA Grid Examples
 * @function onload
 * @desc Initialize the grid examples once the page has loaded
 */

window.addEventListener('load', function () {
  if (document.querySelector('#ex1-grid')) {
    var ex1Grid = new aria.Grid(document.querySelector('#ex1-grid'));
  }

  if (document.querySelector('#ex2-grid')) {
    var ex2Grid = new aria.Grid(document.querySelector('#ex2-grid'));
  }

  if (document.querySelector('#ex3-grid')) {
    var ex3Grid = new aria.Grid(document.querySelector('#ex3-grid'));
    var toggleButton = document.getElementById('toggle_column_btn');
    var toggledOn = true;

    toggleButton.addEventListener('click', function (event) {
      toggledOn = !toggledOn;

      ex3Grid.toggleColumn(2, toggledOn);
      ex3Grid.toggleColumn(4, toggledOn);

      if (toggledOn) {
        toggleButton.innerText = 'Hide Type and Category';
      } else {
        toggleButton.innerText = 'Show Type and Category';
      }
    });
  }
});
