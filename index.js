// Import stylesheets
import "./style.css";

import ".webvr/three.min.js";
import "./webvr/webvr-polyfill.min.js";
import "./pano2vr_player.js";
import { pano2vrSkin } from "./skin.js";

const container = document.querySelector("#container");

// import * as pano2vrSkin from './skin.js'
// import './webvr/three.min.js'

// const pano=new pano2vrPlayer("container");

// const skin=new pano2vrSkin(pano);

// create the panorama player with the container
const pano = new pano2vrPlayer("container");
// add the skin object
const skin = new pano2vrSkin(pano);
// load the configuration

window.addEventListener("load", function() {
  pano.readConfigUrlAsync("../output/pano.xml");
});

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
