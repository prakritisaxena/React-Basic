/**
 * Created by TTND on 1/6/2017.
 */
"use strict";
//required babel to transpile the code to es5
require('babel-register')();

let jsdom = require('jsdom');
//no operation function
let noop=()=> {
  return null
};


// the test cases for this files are not required
require.extensions[".scss"]=noop;
require.extensions[".jpg"]=noop;
require.extensions[".css"]=noop;
require.extensions[".png"]=noop;


//creates virtual dom and it will not show image creates object model of the string
global.document=jsdom.jsdom({src:'<!doctype html><head></head<body></body></html>'});
global.window=global.document.defaultView;


// enzyme will mount the component over jsdom
Object.keys(global.document.defaultView).forEach((property)=>{
  if(typeof(global[property])==='undefined')
    global[property]=global.document.defaultView[property]

});