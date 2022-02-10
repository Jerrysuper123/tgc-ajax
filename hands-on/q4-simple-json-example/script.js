async function main() {
  let response = await axios.get("artwork.json");
  console.log(response);
  let dataObject = response.data;

  let content = document.querySelector("#artwork");
  content.innerHTML = `
    <h1>${dataObject.title}</h1>
    <img src="${dataObject.image_url}">
  `;
}
main();
