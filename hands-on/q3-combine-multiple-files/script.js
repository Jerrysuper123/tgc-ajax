// alert("hello");

//wrong way of doing it
document
  .querySelector("#load-btn")
  .addEventListener("click", async function () {
    //wrong way of doing
    // let file1Response = await axios.get("file1.txt");
    // let response1 = file1Response.data;

    // let file2Response = await axios.get("file2.txt");
    // let response2 = file2Response.data;

    //correct way of concurrent fetching
    let request1 = axios.get("file1.txt");
    let request2 = axios.get("file2.txt");

    let response1 = await request1;
    let response2 = await request2;

    //how do we make 2 files to complete loading before use them

    let content = document.querySelector("#content");
    content.innerHTML = response1.data + response2.data;
  });
