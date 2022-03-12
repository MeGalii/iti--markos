import "./style.css";
import "./doggy.png";

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementsByClassName("container")[0];
const header_right = document.getElementsByClassName("header-right")[0];
const input = document.getElementsByTagName("input")[0];
const searchBtn = document.getElementById("search");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});

searchBtn.addEventListener("click", () => {
  header_right.classList.toggle("active");
  input.focus();
});
