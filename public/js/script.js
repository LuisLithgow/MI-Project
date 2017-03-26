$(document).ready(function() {
  console.log("js/script.js ready");

  let $apiBtn   = $(".api-btn");

  $apiBtn.on('click', (event)=> {
    event.preventDefault();

    let $stateInput = $(".state-input").val();
    let $cityInput = $(".city-input").val();
    // console.log("api button clicked");
    console.log("This is the State "+$stateInput);
    console.log("This is the city "+$cityInput);

    $.ajax({
      url: 'http://api.wunderground.com/api/myAPI key/forecast10day/q/'+ $stateInput + '/' + $cityInput + '.json',
      type: 'GET',
      dataType: 'json'
      // data:
      //   {
      //     param1: stateInput,
      //     param2: cityInput
      //   }
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
      console.log(data.forecast);


      // data.results.map(function(weather) {
      //   console.log("this is the weather: "+weather);
      // })
    })
    .fail(function() {
      console.log("error");
    })




  });
//End of button click









});
