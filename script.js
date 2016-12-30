console.log("JavaScript INITIATED");

var data = {
  "client_id": "wymm1vy80i0ujx84uco61rvovrffva"
};

// AJAX CALL - SELECT STREAMS 

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/ESL_SC2",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - ESL_SC2 STREAM - SUCCESSFUL");
    console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - ESL_SC2 STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/OgamingSC2",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - OgamingSC2 STREAMS - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - OgamingSC2 STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/cretetion",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - cretetion STREAM - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - cretetion STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/freecodecamp",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - freecodecamp STREAMS - SUCCESSFUL");
    console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - freecodecamp STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/storbeck",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - storbeck STREAM - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - storbeck STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/habathcx",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - habathcx STREAM - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - habathcx STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/RobotCaleb",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - RobotCaleb STREAM - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - RobotCaleb STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/noobs2ninjas",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - noobs2ninjas STREAM - SUCCESSFUL");
    //console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - noobs2ninjas STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/brunofin",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - brunofin STREAM - SUCCESSFUL");
    console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - brunofin STREAM - FAILED");
  }
});

$.ajax({
  url: "https://api.twitch.tv/kraken/streams/comster404",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - comster404 STREAM - SUCCESSFUL");
    console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - comster404 STREAM - FAILED");
  }
});

// AJAX REQUEST - TOP GAMES

$.ajax({
  url: "https://api.twitch.tv/kraken/games/top",
  data: data,
  dataType: "jsonp",
  success: function(json) {
    console.log("AJAX REQUEST - TOP GAMES - SUCCESSFUL");
    console.log(json);
  },
  error: function(error) {
    console.log("AJAX REQUEST - TOP GAMES - FAILED");
  }
});