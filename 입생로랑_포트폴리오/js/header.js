const header = document.getElementById("header");
const close_btn = document.getElementById("close_btn");
const open_btn = document.getElementById("open_btn");

// 페이지가 로드될 때, 'header'와 'close_btn'은 숨기고 'open_btn'만 보이도록 설정
window.onload = function () {
  header.style.display = "none"; // 'header' 숨기기
  close_btn.style.display = "none"; // 'close_btn' 숨기기
  open_btn.style.display = "block"; // 'open_btn' 보이기
};

// 'close_btn'을 클릭하면 'header'가 사라지고 'open_btn'이 나타남
close_btn.addEventListener("click", function () {
  header.style.display = "none";
  open_btn.style.display = "block"; // 'open_btn'을 보이게 함
  close_btn.style.display = "none"; // 'close_btn' 숨기기
});

// 'open_btn'을 클릭하면 'header'가 다시 나타나고 'open_btn'은 사라짐
open_btn.addEventListener("click", function () {
  header.style.display = "block";
  open_btn.style.display = "none"; // 'open_btn'을 숨김
  close_btn.style.display = "block"; // 'close_btn'을 보이게 함
});
