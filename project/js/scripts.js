

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var beverage = $("input#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $(".dob").text(dob);
    $(".Address").text(AddressInput);
    $(".City").text(CityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);


    $("#story").show();

    event.preventDefault();
  });
});
