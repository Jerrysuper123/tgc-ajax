let userArray;

document
  .querySelector("#load-users-btn")
  .addEventListener("click", async function () {
    let response = await axios.get("users.json");
    userArray = response.data.users;
    console.log(userArray);

    for (let user of userArray) {
      let listElement = document.createElement("li");
      let content = document.querySelector("#all-users");
      listElement.innerHTML = `
        ${user.firstName}
        ${user.lastName}
        ${user.emailAddress}
      `;
      content.appendChild(listElement);
    }
  });

document.querySelector("#searchBtn").addEventListener("click", function () {
  let searchKey = Number(document.querySelector("#searchKey").value);
  //   console.log(searchKey);
  //   for(let user of )
  //   console.log(userArray);
  let result;
  for (let user of userArray) {
    if (user.userId === searchKey) {
      result = user;
    }
  }
  let filteredContent = document.querySelector("#filteredUsers");
  filteredContent.innerHTML = result.firstName + " " + result.lastName;
  //   console.log(result);
});

//   emailAddress: "krish.lee@learningcontainer.com"
// firstName: "Krish"
// lastName: "Lee"
// phoneNumber: "123456"
// userId: 1
