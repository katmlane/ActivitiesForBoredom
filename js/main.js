//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("activityName").innerText = data.activity
      document.getElementById("accessibilty").innerText = ` Accessibility Scale 0-1: ${data.accessibility}`
      document.getElementById("price").innerText = ` Price Scale 0-1: ${data.price}`
      document.getElementById("type").innerText = ` Kind of activity: ${data.type}`
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}




//want to change this so you can search by price or accessibility 