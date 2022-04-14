//console.log(user_role);
let newRole = user_role;
if (newRole != "doctor" && newRole != "patient") {
  location.replace("/signup");
}
if (newRole === "doctor") {
  document.getElementById("doctor-field").innerHTML +=
    '<button type="button" id="schedule-editor" class="hide">Open Schedule Editor</button>';
  // Prompt the Schedule Editor when a user clicks on the button
  nylas.scheduler.show({
    auth: {
      // Account <ACCESS_TOKEN> with active calendar scope
      accessToken: "puFScl0BQTUpIbgKoXM8brdMcvpLOO",
    },
    style: {
      // Style the Schedule Editor
      tintColor: "#32325d",
      backgroundColor: "white",
    },
    defaults: {
      event: {
        title: "30-min Checkup",
        duration: 30,
      },
    },
  });
  document
    .getElementById("schedule-editor")
    .addEventListener("click", function () {
      // Prompt the Schedule Editor when a user clicks on the button
      nylas.scheduler.show({
        auth: {
          // Account <ACCESS_TOKEN> with active calendar scope
          accessToken: "puFScl0BQTUpIbgKoXM8brdMcvpLOO",
        },
        style: {
          // Style the Schedule Editor
          tintColor: "#32325d",
          backgroundColor: "white",
        },
        defaults: {
          event: {
            title: "30-min Checkup",
            duration: 30,
          },
        },
      });
    });
} else {
  document.getElementById(
    "selector-field"
  ).innerHTML = `<select class="form-select" id="doctor-select" aria-label="Doctor schedule select">
    <option value="" disabled selected>Select a Doctor's Schedule</option>
    <option value="1">Doctor Jordan</option>
    <option value="2">Doctor Jeff</option>
  </select>`;

  var select = document.getElementById("doctor-select");
  select.onchange = (event) => {
    event.preventDefault();
    console.log(select.options[select.selectedIndex].text);
    if (select.options[select.selectedIndex].text === "Doctor Jordan") {
      document.getElementById("doctor-field").innerHTML =
        '<iframe class="bg-light" id="scheduleView" title="schedule" height="600" width="800" src="https://schedule.nylas.com/jordan-ross-60min-1"></iframe>';
    } else {
      document.getElementById("doctor-field").innerHTML =
        '<iframe class="bg-light" id="scheduleView" title="schedule" height="600" width="800" src="https://schedule.nylas.com/jeff-45min-3"></iframe>';
    }
  };
}
