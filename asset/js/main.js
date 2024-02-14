const AddSidebar = document.querySelector(".btn-addsidbar");
const overlay = document.querySelector(".overlay");
const Close = document.querySelector(".btn-closeSidbar");
AddSidebar.onclick = () => {
  overlay.classList.toggle("show");
};

Close.onclick = () => {
  overlay.classList.toggle("show");
};
