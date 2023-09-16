const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
let list = document.querySelectorAll(".list");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  });
}
