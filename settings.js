function updateRoles() {
  const sri = document.getElementById("sriRole");
  const ranga = document.getElementById("rangaRole");
  const lasya = document.getElementById("lasyaRole");

  for (let option of sri.options) option.disabled = false;
  for (let option of ranga.options) option.disabled = false;
  for (let option of lasya.options) option.disabled = false;

  if (sri.value === "Wife") {
    disableOption(ranga, "Husband");
    disableOption(lasya, "Wife");
  }

  if (ranga.value === "Husband") {
    disableOption(sri, "Wife");
    disableOption(lasya, "Wife");
  }

  if (lasya.value === "Wife") {
    disableOption(sri, "Wife");
    disableOption(ranga, "Husband");
  }
}

function disableOption(selectElement, roleName) {
  for (let option of selectElement.options) {
    if (option.value === roleName) {
      option.disabled = true;
    }
  }
}

function saveSettings() {
   const sriAge = Number(document.getElementById("sriAge").value);
   const rangaAge = Number(document.getElementById("rangaAge").value);
   const lasyaAge = Number(document.getElementById("lasyaAge").value);

   if (sriAge < 16 || rangaAge < 16 || lasyaAge < 16) {
   alert("Companion age must be 16 or older.");
   return;
   }
  localStorage.setItem("sriRole", document.getElementById("sriRole").value);
  localStorage.setItem("rangaRole", document.getElementById("rangaRole").value);
  localStorage.setItem("lasyaRole", document.getElementById("lasyaRole").value);

  localStorage.setItem("sriAge", document.getElementById("sriAge").value);
  localStorage.setItem("rangaAge", document.getElementById("rangaAge").value);
  localStorage.setItem("lasyaAge", document.getElementById("lasyaAge").value);
  alert("Relationship settings saved.");
}

function loadSettings() {
  const sriRole = localStorage.getItem("sriRole");
  const rangaRole = localStorage.getItem("rangaRole");
  const lasyaRole = localStorage.getItem("lasyaRole");

  if (sriRole) document.getElementById("sriRole").value = sriRole;
  if (rangaRole) document.getElementById("rangaRole").value = rangaRole;
  if (lasyaRole) document.getElementById("lasyaRole").value = lasyaRole;

  const sriAge = localStorage.getItem("sriAge");
  const rangaAge = localStorage.getItem("rangaAge");
  const lasyaAge = localStorage.getItem("lasyaAge");

  if (sriAge) document.getElementById("sriAge").value = sriAge;
  if (rangaAge) document.getElementById("rangaAge").value = rangaAge;
  if (lasyaAge) document.getElementById("lasyaAge").value = lasyaAge; 

  document.getElementById("profileSriAge").textContent =
  localStorage.getItem("sriAge") || "20";

  document.getElementById("profileRangaAge").textContent =
  localStorage.getItem("rangaAge") || "20";

  document.getElementById("profileLasyaAge").textContent =
  localStorage.getItem("lasyaAge") || "20";

  document.getElementById("profileSriRole").textContent =
  localStorage.getItem("sriRole") || "Friend";

  document.getElementById("profileRangaRole").textContent =
  localStorage.getItem("rangaRole") || "Friend";

  document.getElementById("profileLasyaRole").textContent =
  localStorage.getItem("lasyaRole") || "Friend";
  updateRoles();
}

window.onload = loadSettings;