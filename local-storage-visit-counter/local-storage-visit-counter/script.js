if (typeof Storage !== "undefined") {
  if (localStorage.visitcount) {
    document.getElementById("result").innerHTML =
      "Welcome back, you've been here " +
      localStorage.visitcount +
      " times before.";
    localStorage.visitcount = Number(localStorage.visitcount) + 1;
  } else {
    localStorage.visitcount = 1;
    document.getElementById("result").innerHTML =
      "This is your first time here! Welcome.";
  }
  // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
   alert("Sorry, your browser does not support web storage.  Changes will not be saved");
  document.getElementById("result").innerHTML =
    "Sorry, your browser does not support web storage...";
}

console.log("localstorage visit count now: " + localStorage.visitcount);

// localStorage.clear();