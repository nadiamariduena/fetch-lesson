//
// -----------------------------------------------
//          _  *  _  TEXT version      _  *  _
// -----------------------------------------------
/*
 TODAY Hadi will cover FETCH with response:

 ____RESPONSE or res is when you are grabbing DATA.
 ______REQUEST is when you are sending DATA.


  */
//
//
//
const fetchTextFile = () => {
  //fetch will grab data for you, so you have to tell where and what it is.
  fetch("plain.txt")
    // here comes the promise method part: with success as .then, and failure with .catch
    .then((response) => response.text())
    // grab the file , then CONVERT the text inside de plain.txt into an object text.
    //
    // NOW PROCESS THE converted obj text:
    .then((data) => {
      // and show it in the .result HTML using the innerHTML
      document.querySelector(".result").innerHTML = data;
    })
    // here you custom a failure
    .catch((err) => console.log(err));
};

//
//
//
//
//
//
//
// -----------------------------------------------
//            *      JASON version        *
// -----------------------------------------------
/*
  In this one you have to create a JSON file inside the SRC folder,
  then create an ARRAY OF OBJECTS, like in the movie project.
  */
//
//
//
//
const fetchJsonFile = () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2> All Users </h2>";
      data.forEach((user) => {
        userCard += ` 
        <div class='card' id=${user.id}>

        <div class='avatar'> ${user.photo}</div>
        ${user.name}, <span> ${user.age}</span> old, 
        and lives in <span> ${user.city}</span>
          </div>`;

        /*

   console.log(data);
      let userCard = "<h2> All Users </h2>";
      data.forEach((user) => {
        userCard += ` 
            <div class='card' id=${user.id}>
            
              <div class='avatar'> ${user.photo}</div>
              ${user.name}, <span> ${user.age}</span> old, 
              and lives in <span> ${user.city}</span>
            </div>
            `;

*/
      });

      document.querySelector(".result").innerHTML = userCard;
    });
};
//
//
//
//
// -----------------------------------------------
//          _  *  _  API version      _  *  _
// -----------------------------------------------
//
//

const fetchApi = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      let imgCard = "<h2> Images </h2>";
      data.forEach((img) => {
        imgCard += `
            <div id=${img.id}>
              <img src=${img.thumbnailUrl} alt=${img.title}>
              <h3>${img.title}</h3>
              <img src=${img.url} alt=${img.title}>
            </div>
            `;
      });
      document.querySelector(".result").innerHTML = imgCard;
    });
};
// CAREFUL , it contains 5000 images to load
// it takes a couple of seconds until the result appears
//
//
//
//
//
//
//
