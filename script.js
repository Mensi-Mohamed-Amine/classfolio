
$(document).ready(function() {
  $("body > *").not(".initi").hide();

  $("#start").click(function() {
    let scor= $("#rng").val();
    if(scor<3 || scor>18){alert("The objective must be between 3 and 18 !!!!\n");return;}
    $(".initi").hide();                     // Hide the entire .initi div
    $("body > *").not(".initi").slideDown();  // Slide down all siblings of .initi
    $(".object").text("objective : "+ scor);
  });
});
////////////////////////////////
$(document).ready(function(){
    $("#back").click(function(){
        $("body > *").hide();
        $("body > *").filter(".initi").show();}
    );
});
function repeat(){
    $("body +").html("<input type='button' value='Repeat' class='repeat'>");
}
/////////////////////////////////////
function checkWinner(cmpscr,usrscr,objec) {
    if (cmpscr === objec) {
        alert("Game Over U lost 😭"); showRepeatButton();
        return true;
    } else if (usrscr === objec) {
        alert("Congratulations U win!!! 🎉 "); showRepeatButton();;
        return true;
    }
    return false;
}
//////////////////////////////////////////
$(document).ready(function(){
    $(".butt").click(
function (){
    var cmpscr = $(".cmpscr").text();
    var usrscr = $(".usrscr").text();
    var objec= $("#rng").val();
    if (cmpscr == objec){
        alert("Game Over U lost 😭");return;
    }
    else if(usrscr == objec){
        alert("Congratulations U win!!! 🎉 ");return;}
        
    $(".computerchoice").html("<span>Computer :  </span>");
    const choices = ["Rock","Paper","Scissors"];
    const x = Math.floor(Math.random()*3);
    const autochoice = choices[x];
    const usrchoice = $(this).val();
    $(".computerchoice").append(autochoice);
    if(usrchoice !== autochoice){
    if (usrchoice==="Rock" && autochoice==="Scissors" || usrchoice==="Paper" && autochoice==="Rock"
         || usrchoice==="Scissors" && autochoice==="Paper"){
         usrscr++;$(".usrscr").text(usrscr);}
    else {cmpscr++;$(".cmpscr").text(cmpscr);}
        } 
        checkWinner(cmpscr,usrscr,objec);
});
});

function showRepeatButton() {
  if ($(".repeat").length === 0) {
    $("body").append(
      "<input type='button' value='Repeat' class='repeat'>"
    );
    $(".repeat").click(function () {
      $("body > *").hide();
      $(".initi").show();
      $(".repeat").remove();
      $(".usrscr").text("0");
      $(".cmpscr").text("0");
      $(".computerchoice").html("<span>Computer</span>");
      $(".object").text("");
    });
  }
}
///////////////////////////////
// function finish(){
//     const usrscr = document.querySelector(".usrscr");
//     const cmpscr = document.querySelector(".cmpscr");
//     const obj = document.getElementById("rng");
//     if(usrscr.textContent == obj.value){ alert("Congratulations U win!!! 🎉 ");return;}
//     else if(cmpscr.textContent == obj.value){ alert("Game Over U lost 😭 ");return;}
// }
//////////////////////////////
// $(document).ready(function(){
//     var cmpscr = $(".cmpscr").text();
//     var usrscr = $(".usrscr").text();
//     var objec = $("#rng").val();
//     if (cmpscr == objec){
//         alert("Game Over U lost 😭");return;
//     }
//     else if(usrscr == objec){
//         alert("Congratulations U win!!! 🎉 ");return;}});