$(document).ready(function() {
  $("form#triangle").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if ((side1 + side2) <= side3) {
      $('#res-no').show();
      $("#res-eq,res-sc,res-is").hide();
    } else if ((side1 + side3) <= side2) {
      $('#res-no').show();
      $("#res-eq,res-sc,res-is").hide();
    } else if ((side2 + side3) <= side1) {
      $('#res-no').show();
      $("#res-eq,res-sc,res-is").hide();
    } else if (side1 === side2 && side3 === side1) {
      $('#res-eq').show();
      $("#res-is,res-sc,res-no").hide();
    } else if (side1 === side2) {
      $('#res-is').show();
      $("#res-eq,res-sc,res-no").hide();
    } else if (side2 === side3) {
      $('#res-is').show();
      $("#res-eq,res-sc,res-no").hide();
    } else if (side1 === side3) {
      $('#res-is').show();
      $("#res-eq,res-sc,res-no").hide();
    } else if (side1 === side2) {
      $('#res-is').show();
      $("#res-eq,res-sc,res-no").hide();
    } else {
      $("#res-sc").show();
      $("#res-eq,res-no,res-is").hide();
    }

  event.preventDefault();
  });
});
