let url = "https://randomuser.me/api/?results=10";

// 3. Write code such that when a button is pressed, the code will fetch 10 random users from `https://randomuser.me/api/?results=10` and display all the ten users. For each user, display

//    * First name and last name together
//    * The city which the user is from
//    * The medium-sized image of the user
// alert("hello");
document
  .querySelector("#searchBtn")
  .addEventListener("click", async function () {
    let response = await axios.get(url);
    let dataArray = response.data.results;
    let content = document.querySelector("#content");

    for (el of dataArray) {
      content.innerHTML += `
            <div>name: ${el.name.first} ${el.name.last}<div>
            <div>city: ${el.location.city}</div>
            <img src=${el.picture.medium} />
        `;
    }
    // console.log(response.data.results[0].name.first);
    // console.log(response.data.results[0].name.last);
    // console.log(response.data.results[0].location.city);
    // console.log(response.data.results[0].picture.medium);
  });
