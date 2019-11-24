
$("#ch3form").submit(function(){
  var fruit_check= false;
  var fruit = $('input[name ="fruit"]');
  console.log(fruit);

  var standing_check = false;
  var standing= $ ('input[name="standing"]');

  fruit.each(function(){
    if(this.checked){
      console.log("fruit checked");
      fruit_check= true;

    }
  })

  standing.each(function(){
    if (this.checked){
      console.log("standing checked");
      standing_check= true;
    }
  })

  if (fruit_check && standing_check)
    return true;
  else{
    if (!fruit_check && !standing_check){
      alert("You must pick a fruit and standing!");
    }
    else if (fruit_check&& !standing_check ){
      alert("You must pick a standing!");
    }
    else{
      alert("You must pick a fruit!");
    }
    return false;
  }

})
