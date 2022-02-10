let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

document
  .querySelector("#loadButton")
  .addEventListener("click", async function () {
    let response = await axios.get(url);
    // console.log(response.data.en);
    let content = document.querySelector("#quote");
    content.innerHTML = response.data.en;
  });
