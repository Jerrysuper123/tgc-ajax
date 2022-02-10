// alert("hello");

document
  .querySelector("#load-btn")
  .addEventListener("click", async function () {
    let file1Response = await axios.get("file1.txt");
    let response1 = file1Response.data;

    let file2Response = await axios.get("file2.txt");
    let response2 = file2Response.data;

    let content = document.querySelector("#content");
    content.innerHTML = response1 + response2;
  });
