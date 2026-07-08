function showList() {
  let btn = document.getElementById("language-block");

  if (btn.classList.contains("expand")) {
    btn.classList.remove("expand");
  } else {
    btn.classList.add("expand");
  }
}
