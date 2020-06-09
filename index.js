/** *
 * @author Quimby africana <z.anthony@yahoo.com>
 * @version: 1.0.0
 * @license: MIT *
 **/

//modern Browsers no longer need the explicit use of Document.GetElement or QuerySelector
//the browser automatically detects it by id, the same applies in this script

window.addEventListener('DOMContentLoaded', () => {
  //getting DOM element
  let output = '';

  //getting list of countries from flags.js
  let countriesName = (entries = Object.values(countries));
  countriesName.forEach((countryName) => {
    output += `<option value="${countryName}">${countryName}</option>`;
  });

  //rendering countries to DOM
  countriesList.innerHTML = output;

  //func to get flag image
  function flagImage(country, imageElement, countryNameElement) {
    //countries object coming from flag.js
    entries = Object.entries(countries);

    //filter based on the input
    let countryName = entries.filter((data) => {
      return data.includes(country);
    });

    countryName = countryName.join();
    countryFullName = countryName.substring(7);

    //slicing to country short code
    if (countryName === 'gb-eng,England') {
      flag = countryName.substring(0, 6);
      countryNameElement.value = countryFullName;
    } else if (countryName === 'gb-nir,Northern Ireland') {
      flag = countryName.substring(0, 6);
      countryNameElement.value = countryFullName;
    } else if (countryName === 'gb-sct,Scotland') {
      flag = countryName.substring(0, 6);

      countryNameElement.value = countryFullName;
    } else if (countryName === 'gb-wls,Wales') {
      flag = countryName.substring(0, 6);

      countryNameElement.value = countryFullName;
    } else {
      flag = countryName.substring(0, 2);

      countryFullName = countryName.substring(3);
      countryNameElement.value = countryFullName;
    }

    //console.log(flag);

    //changing img-src attr on event change
    flag = imageElement.setAttribute('src', `flags/${flag}.png`);
  }

  let count = 1;

  //listener for change event
  countriesList.addEventListener('change', () => {
    let country = countriesList.selectedOptions[0].text;
    let flag;

    if (count == 1) {
      flag = flagImage(country, countryFlag1, countryName1);
      count++;
    } else if (count == 2) {
      flag = flagImage(country, countryFlag2, countryName2);
      count++;
    } else {
      flag = flagImage(country, countryFlag3, countryName3);
      count = 1;
    }

    rgbChange();
  });

  function rgbChange() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randomColorRGB = `rgb(${red},${green},${blue})`;
    document.body.style.background = randomColorRGB;
  }
});
