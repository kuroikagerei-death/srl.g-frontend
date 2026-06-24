function setupPlan() {
  if (!localStorage.getItem("trialStart")) {
    localStorage.setItem("trialStart", Date.now());
    localStorage.setItem("plan", "Premium Trial");
  }

  const trialStart = Number(localStorage.getItem("trialStart"));
  const now = Date.now();

  const daysPassed = Math.floor(
    (now - trialStart) / (1000 * 60 * 60 * 24)
  );

  const daysLeft = Math.max(0, 7 - daysPassed);

  if (daysLeft <= 0) {
    localStorage.setItem("plan", "Basic");
  } else {
    localStorage.setItem("plan", "Premium Trial");
  }

  localStorage.setItem("daysLeft", daysLeft);
}

function getPlan() {
  setupPlan();
  return localStorage.getItem("plan") || "Basic";
}

function getDaysLeft() {
  setupPlan();
  return localStorage.getItem("daysLeft") || "0";
}

setupPlan();