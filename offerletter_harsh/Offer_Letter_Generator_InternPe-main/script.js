function generate_offer_letter() {
  var offerletter = document.getElementById("offer_letter");
  var fsalutation = document.getElementById("txtsalutation");
  var fname = document.getElementById("txtname");
  var femail = document.getElementById("txtemail");
  var fdomain = document.getElementById("txtdomain");
  var fsdate = document.getElementById("txtsdate");
  var fedate = document.getElementById("txtedate");
  var printletter = document.getElementById("print_letter");

  // Check if any required field is empty
  if (
    fsalutation.value === "" ||
    fname.value === "" ||
    femail.value === "" ||
    fdomain.value === "" ||
    fsdate.value === "" ||
    fedate.value === ""
  ) {
    alert("Please fill in all the required fields.");
    return;
  }

  if (offerletter.style.display === "none") {
    var lsalutation = document.getElementById("lblName");
    var lname = document.getElementById("lblname");

    // Check if label elements exist
    if (lsalutation && lname) {
      lsalutation.innerHTML = fsalutation.value + " " + fname.value;
      lname.innerHTML = fname.value;
    }
  }

  if (offerletter.style.display === "none") {
    var lsalutation = document.getElementById("lblName");
    var lname = document.getElementById("lblname");
    var lemail = document.getElementById("txtemail");
    var ldomain = document.getElementById("lbldomain");
    var lsdate = document.getElementById("lblsdate");
    var ledate = document.getElementById("lbledate");

    if (lsalutation && lname && lemail && ldomain && lsdate && ledate) {
      lsalutation.innerHTML = fsalutation.value;
      lname.innerHTML = fname.value;
      lemail.innerHTML = femail.value;
      ldomain.innerHTML = fdomain.value;
      lsdate.innerHTML = fsdate.value;
      ledate.innerHTML = fedate.value;

      // Display today's date
      var currentDate = new Date();
      document.getElementById("currentDate").innerHTML =
        "Date: " +
        currentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

      offerletter.style.display = "block";
      printletter.style.display = "block";
    } else {
      console.error("One or more elements not found.");
    }
  } else {
    offerletter.style.display = "none";
    printletter.style.display = "none";
  }
}

function print_offer_letter() {
  var printContent = document.getElementById("offer_letter").innerHTML;
  var originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;

  window.print();

  document.body.innerHTML = originalContent;
}
s;
