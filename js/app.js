'use strict';

// Verify script works
console.log("app.js loaded");

// Enable verbose mode
let verbose = true;

// Currently active pane
let currentlyActivePane = "None";
const activePane = (pane) => currentlyActivePane = pane;

// Vars of DOM links
const link1 = document.getElementById("linkTolink1");
const link2 = document.getElementById("linkTolink2");
const link3 = document.getElementById("linkTolink3");
const link4 = document.getElementById("linkTolink4");
const link5 = document.getElementById("linkTolink5");

// Vars of Panes
const pane1 = document.getElementById("link1");
const pane2 = document.getElementById("link2");
const pane3 = document.getElementById("link3");
const pane4 = document.getElementById("link4");


const allPanesHide = () => {
  pane1.style.display = "none";
  pane2.style.display = "none";
  pane3.style.display = "none";
  pane4.style.display = "none";
}

const switchPane = (pane) => {
  allPanesHide();
  pane.style.display = "block";
  (verbose) ? console.log("Hiding all panes") : "";
}

// addEventListeners for all links
link1.addEventListener("click", () => {
  switchPane(document.getElementById("link1"));
  activePane("Link1");
  (verbose) ? console.log("Showing pane one") : "";
});

link2.addEventListener("click", () => {
  switchPane(document.getElementById("link2"));
  activePane("Link2");
  (verbose) ? console.log("Showing pane two") : "";
});

link3.addEventListener("click", () => {
  switchPane(document.getElementById("link3"));
  activePane("Link3");
  (verbose) ? console.log("Showing pane three") : "";
});

link4.addEventListener("click", () => {
  switchPane(document.getElementById("link4"));
  activePane("Link4");
  (verbose) ? console.log("Showing pane four") : "";
});

link5.addEventListener("click", () => {
  allPanesHide();
  activePane("None");
  (verbose) ? console.log("Hiding all panes") : "";
});