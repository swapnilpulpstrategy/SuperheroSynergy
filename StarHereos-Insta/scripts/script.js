/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Materials = require('Materials');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');
const backgroundRect = Scene.root.find('backgroundRect');

// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {
    // The index of the selected item in the picker
    selectedIndex: index,
    
    items: [
        {image_texture: Textures.get('Button_1')},
        {image_texture: Textures.get('Button_2')},
        {image_texture: Textures.get('Button_3')}
    ],

    mats: [
        {material: Materials.get('mat_wonderWomen')},
        {material: Materials.get('mat_groot')},
        {material: Materials.get('mat_thor')},
    ]
};

// Create uor picker
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val)
{
   backgroundRect.material = configuration.mats[val.newValue].material;
});


// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
