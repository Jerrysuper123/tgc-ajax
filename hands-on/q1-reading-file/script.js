document
  .querySelector("#load-btn")
  .addEventListener("click", async function () {
    let response = await axios.get("contact.txt");

    let content = document.querySelector("#content");
    content.innerHTML = response.data;
  });

// console.log("hello");
