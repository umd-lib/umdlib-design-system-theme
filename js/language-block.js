function showList() {
  let btn = document.getElementById("langugae-block");

  if (btn.classList.contains("expand")) {
    btn.classList.remove("expand");
  } else {
    btn.classList.add("expand");
  }
}
