console.log("SRL.G website started");
window.onload = function () {

  const sriAge = localStorage.getItem("sriAge");
  const rangaAge = localStorage.getItem("rangaAge");
  const lasyaAge = localStorage.getItem("lasyaAge");

  if (sriAge && document.getElementById("homeSriAge")) {
    document.getElementById("homeSriAge").textContent = sriAge;
  }

  if (rangaAge && document.getElementById("homeRangaAge")) {
    document.getElementById("homeRangaAge").textContent = rangaAge;
  }

  if (lasyaAge && document.getElementById("homeLasyaAge")) {
    document.getElementById("homeLasyaAge").textContent = lasyaAge;
  }

};
const joinDate = localStorage.getItem("joinDate");

if (joinDate) {

  const start = new Date(Number(joinDate));
  const today = new Date();

  const diffTime = today - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const daysLeft = Math.max(0, 30 - diffDays);

  document.getElementById("daysLeft").textContent = daysLeft;

  if (daysLeft === 0) {
    document.getElementById("planStatus").textContent = "Basic Plan";
  }
}