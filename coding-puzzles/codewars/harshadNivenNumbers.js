  'use strict';

var Harshad = ( function() {

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
    }
  };

} () );



function isValid(num){
  var numStr = String(num);
  var digitSum = 0;
  for(let i = 0; i < numStr.length; i++){
    digitSum += Number(numStr[i]);
  }
  return num % digitSum == 0;
}

function getNext(num){
  var harshad = false;
  while(!harshad){
    num += 1;
    harshad = isValid(num);
  }
  return num;
}

function getSerie(count, start){
  if(start === undefined) start = 0;
  var serieArr = [];
  while(serieArr.length < count){
    serieArr.push(getNext(start));
    start = getNext(start);
  }
  return serieArr;
}

console.log(getSerie(17))
console.log(getSerie(19))

