const istatus = document.querySelector("h5");
const addFriend = document.querySelector("#Friend");
const remove = document.querySelector("#remove");

addFriend.addEventListener("click", function () {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
});

remove.addEventListener("click", function () {
  istatus.innerHTML = "Stranger";
  istatus.style.color = "red";
});

