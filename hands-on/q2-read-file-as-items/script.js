// alert("hellow");

async function main() {
  let response = await axios.get("items.txt");
  let fruits = response.data.split(",");
  //   console.log(fruits);
  let content = document.querySelector("#content");
  //   let listElement = document.createElement("li");
  for (let fruit of fruits) {
    let listElement = document.createElement("li");
    listElement.innerHTML = fruit;
    content.appendChild(listElement);
  }
}

main();
