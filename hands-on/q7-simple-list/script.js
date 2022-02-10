// alert("hello");

document
  .querySelector("#loadButton")
  .addEventListener("click", async function () {
    let response = await axios.get("https://anapioficeandfire.com/api/books/");
    // console.log(response.data);
    // console.log(response.data.numberOfPages);

    //get of array of url into an array first

    let content = document.querySelector("#content");
    let bookArray = response.data;

    for (el of bookArray) {
      let listElement = document.createElement("li");
      listElement.innerHTML = el.name + " " + el.numberOfPages;
      //to append all the names of the pov character
      let unorderList = document.createElement("ul");
      let listNameElement = document.createElement("li");
      //how to retrieve all names
      listNameElement.innerHTML = "name";
      unorderList.appendChild(listNameElement);

      content.appendChild(listElement);
      content.appendChild(unorderList);
    }

    // console.log(bookArray);
    //get all urlarray into an array
    // console.log(response.data[0].povCharacters);

    let urlArray = [];
    for (el of bookArray) {
      urlArray.push(el.povCharacters);
    }
    //[[url, url, url],[url,url,url]]
    console.log(urlArray);
    console.log(urlArray[0][0]);
    // console.log(urlArray[8]);
    let movieList = [];
    let eachMovie;
    for (let i = 0; i < urlArray.length; i++) {
      eachMovie = [];
      for (let j = 0; j < urlArray[i][j]; j++) {
        let charResponce = await axios.get(urlArray[0][0]);
        console.log(i, j, charResponce.data.name);
        eachMovie.push(charResponce.data.name);
      }
      movieList.push(eachMovie);
    }

    console.log(movieList);

    let charResponce = await axios.get(urlArray[0][0]);
    console.log(charResponce.data.name);
  });

//   authors: ['George R. R. Martin']

// country: "United States"
// isbn: "978-0785126508"
// mediaType: "Hardcover"
// name: "The Sworn Sword"
// numberOfPages: 152
// povCharacters: ['https://anapioficeandfire.com/api/characters/329']
// publisher: "Marvel"
// released: "2008-06-18T00:00:00"
// url: "https://anapioficeandfire.com/api/books/6"
// [[Prototype]]: Object
