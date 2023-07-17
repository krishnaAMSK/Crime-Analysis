document.getElementById("crimeType").addEventListener("change", function() {
    var ganjaFields = document.getElementById("ganjaFields");
    var robberyFields = document.getElementById("robberyFields");
    var kidnapFields = document.getElementById("kidnapFields");
    var murderFields = document.getElementById("murderFields");
    var sexualAssaultFields = document.getElementById("sexualAssaultFields");
  
    // Hide all additional fields
    ganjaFields.classList.add("hidden");
    robberyFields.classList.add("hidden");
    kidnapFields.classList.add("hidden");
    murderFields.classList.add("hidden");
    sexualAssaultFields.classList.add("hidden");
  
    // Show additional fields based on selected crime type
    var selectedType = this.value;
    if (selectedType === "ganja") {
      ganjaFields.classList.remove("hidden");
    } else if (selectedType === "robbery") {
      robberyFields.classList.remove("hidden");
    } else if (selectedType === "kidnap") {
      kidnapFields.classList.remove("hidden");
    } else if (selectedType === "murder") {
      murderFields.classList.remove("hidden");
    } else if (selectedType === "sexualassault") {
      sexualAssaultFields.classList.remove("hidden");
    }
  });
  
  // Initial hide of additional fields
  document.getElementById("ganjaFields").classList.add("hidden");
  document.getElementById("robberyFields").classList.add("hidden");
  document.getElementById("kidnapFields").classList.add("hidden");
  document.getElementById("murderFields").classList.add("hidden");
  document.getElementById("sexualAssaultFields").classList.add("hidden");
  