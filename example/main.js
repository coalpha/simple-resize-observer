/// <reference types="../src/lib.iife"/>

const d = document;

const resizeBox = d.getElementById("resize-box");

const resizeBoxText = d.getElementById("resize-box-text");

let counter = 0;

new SimpleResizeObserver(resizeBox, box => {
   const { width, height } = box.contentRect;
   const dimensions = `${width|0}px by ${height|0}px`;
   const date = new Date().toLocaleTimeString();
   const updatedAt = `Updated at ${date}`;
   const counterString = `Counter: ${++counter}`;
   resizeBoxText.innerText = `${dimensions}\n${updatedAt}\n${counterString}`;
});

hljs.initHighlightingOnLoad();
