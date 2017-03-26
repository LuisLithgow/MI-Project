$(document).ready(function() {
  console.log("js/script.js ready");

  let $apiBtn   = $(".api-btn");

  $apiBtn.on('click', (event)=> {
    event.preventDefault();

    let $userInput = $(".user-input").val();
    console.log("api button clicked");
    console.log($userInput);

    $.ajax({
      url: 'http://api.wunderground.com/api/e0d2b72c995eb908/forecast10day/',
      type: 'GET',
      dataType: 'json',
      data:
        {
          q: $userInput
        }
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
    })
    .fail(function() {
      console.log("error");
    })




  });
//End of button click









});
