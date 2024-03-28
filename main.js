const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("Volume");
const massEl = document.getElementById("Mass");
let lengthhTofeet = 3.281;
let volumeTogallon = 0.264;
let massTopounds = 2.204;
//
let feetTolength = 0.3048;
let gallonTovolume = 3.78541;
let poundTomass = 0.453592;

btnEl.addEventListener("click", function () {
  let baseValue = inputEl.value;
  //
  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * lengthhTofeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetTolength).toFixed(
    3
  )} meters`;
  //
  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * volumeTogallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonTovolume
  ).toFixed(3)} liters`;
  //
  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * massTopounds
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * poundTomass
  ).toFixed(3)} kilos`;
});
