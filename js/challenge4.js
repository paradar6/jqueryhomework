
ch4form.onsubmit = function() {
      var validInput = true;
      var name = $("#fullname")
      var address = $("#streetaddr")

      if (name.val() == ""){
          $("#nameerrormsg").css("display", "block");
          validInput = false;
      }
      else {
          $("#nameerrormsg").css("display", "none");
      }

      if (address.val() == ""){
          $("#addrerrormsg").css("display", "block");
          validInput = false;
      }
      else {
          $("#addrerrormsg").css("display", "none");
      }

      return validInput;
  }
