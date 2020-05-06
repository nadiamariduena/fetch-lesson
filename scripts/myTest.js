const fetchTextiFile = () => {
  fetch("../plain2.txt")
    // grab then convert
    .then((response) => response.text())
    // process the converted text with data
    .then((data) => {
      // append the converted and processed text to the .result with .innerHTML
      document.querySelector(".result2").innerHTML = data;
    })
    //never add semicolons if you will continue with catch or then, as it will break it.
    .catch((err) => console.log(err));
};
