/* global document */

var dogImage = document.querySelector('img');

dogImage.onClick = function () {
    'use strict';
    var myImages = dogImage.getAttribute('src');
    if (myImages === 'images/puppy.jpg') {
        dogImage.setAttribute('src', 'images/dog.jpg');
    } else {
        dogImage.setAttribute('src', 'images/puppy.jpg');  
    } 
};
