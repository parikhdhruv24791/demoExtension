/*console.log("here");
// Handle page state
var lastRefreshTime = new Date();
*/
/*function getNews() {
    if (windowBlurred || (new Date()).valueOf() - lastRefreshTime.valueOf() < getRefreshInterval()) {
        return;
    } else {
        lastRefreshTime = new Date();*/
        $.ajax({
                method: "GET",
                url: "http://192.168.225.158:3000/getNews"
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg.list);
                var news = "";
                for (var i = 0; i < msg.list.length; i++) {
                    news += "<li><a href=' " + msg.list[i].href + "'>" + msg.list[i].title + "</a></li>";
                }
                var str = "<ul>" + news + "</ul>";
                $("#news").html(str);
            });
/*    }
}*/


/*window.onfocus = function() {
    windowBlurred = false;
    getNews();
};

var getRefreshInterval = function() {
  return options.refresh_animation_secs * 1000;
};


// Get options and start interval timer
var options = {refresh_animation_secs: 60, animation: 'flash', animation_enabled: true};  // defaults
*/