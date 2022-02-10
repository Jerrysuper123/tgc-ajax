// alert("hello");

let BASE_URL = "http://openlibrary.org/search.json";

document
  .querySelector("#searchBtn")
  .addEventListener("click", async function () {
    let searchString = document.querySelector("#searchby").value;
    console.log(searchString);
    let response = await axios.get(BASE_URL + "?title=" + searchString);
    let bookArray = response.data.docs;
    let content = document.querySelector("#content");
    content.innerHTML = "";

    for (let book of bookArray) {
      content.innerHTML += `
            <li>title: ${book.title} author: ${book.author_name} pages: ${book.number_of_pages_median}</li>
        `;
    }
    // console.log(response.data.docs);
    // console.log(response.data.docs[0].title);
    // console.log(response.data.docs[0].author_name);
    // console.log(response.data.docs[0].number_of_pages_median);
  });
