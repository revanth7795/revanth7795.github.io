(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    width: 40px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 3px 1px;\r\n    border-radius: 50%;\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s;\r\n  }\r\n  \r\n  .fa-facebook {\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-facebook:hover{\r\n    background: #3B5998;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .fa-twitter {\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-twitter:hover {\r\n    background: #55ACEE;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .fa-google {\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-google:hover {\r\n    background: #dc4c3f;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .fa-instagram {\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-instagram:hover {\r\n    background: #cc2988;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .fa-envelope{\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-envelope:hover {\r\n    background: #125688;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .fa-git{\r\n    background: #2d2d2f;\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .fa-git:hover {\r\n    background: #e64f31;\r\n    color: white;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .block {\r\n    overflow: hidden;\r\n    transition: height .5s;\r\n  }\r\n  \r\n  .dvContainer {\r\n    position: relative;\r\n  }\r\n  \r\n  .dvInsideTL {\r\n    position: absolute;\r\n    top: 3000px;\r\n    width: 100%;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .loadmore{\r\n    position: absolute;  \r\n    width: 100%; \r\n    text-align: center; \r\n    color: black;\r\n    background-image: linear-gradient(#2d2d2f00, #2d2d2f);\r\n  }\r\n  \r\n  .arrowDown{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .arrowDown:hover{\r\n    -webkit-transform: translate(0px,15px);\r\n            transform: translate(0px,15px);\r\n    -webkit-animation-name: DownArrow;\r\n            animation-name: DownArrow;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes DownArrow {\r\n    0% {\r\n      -webkit-transform: translate(0px,0px);\r\n              transform: translate(0px,0px);\r\n    }\r\n    100% {\r\n      -webkit-transform: skewY(0px,15px);\r\n              transform: skewY(0px,15px);\r\n    }\r\n  }\r\n  \r\n  @keyframes DownArrow {\r\n    0% {\r\n      -webkit-transform: translate(0px,0px);\r\n              transform: translate(0px,0px);\r\n    }\r\n    100% {\r\n      -webkit-transform: skewY(0px,15px);\r\n              transform: skewY(0px,15px);\r\n    }\r\n  }\r\n  \r\n  .arrowUp{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .arrowUp:hover{\r\n    -webkit-transform: translate(0px,-15px);\r\n            transform: translate(0px,-15px);\r\n    -webkit-animation-name: UpArrow;\r\n            animation-name: UpArrow;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes UpArrow {\r\n    0% {\r\n      -webkit-transform: translate(0px,0px);\r\n              transform: translate(0px,0px);\r\n    }\r\n    100% {\r\n      -webkit-transform: skewY(0px,-15px);\r\n              transform: skewY(0px,-15px);\r\n    }\r\n  }\r\n  \r\n  @keyframes UpArrow {\r\n    0% {\r\n      -webkit-transform: translate(0px,0px);\r\n              transform: translate(0px,0px);\r\n    }\r\n    100% {\r\n      -webkit-transform: skewY(0px,-15px);\r\n              transform: skewY(0px,-15px);\r\n    }\r\n  }\r\n  \r\n  .list-group-item{\r\n    color: black;\r\n  }\r\n  \r\n  .list-group-item:hover{\r\n    cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"50\">\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>                        \r\n          </button>\r\n            <img href=\"#myPage\" src=\"../assets/images/Revanth logo1 white.png\" alt=\"logo\" width=\"191\" height=\"50\">\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#myPage\">HOME</a></li>\r\n            <li><a href=\"#photos\">PHOTOS</a></li>\r\n            <li><a href=\"#travel\">TRAVEL</a></li>\r\n            <li><a href=\"#about\" (click)=\"onClickAbout(my.scrollHeight)\">ABOUT</a></li>\r\n            <li><a href=\"#contact\">CONTACT</a></li>\r\n            <!-- <li class=\"dropdown\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">MORE\r\n              <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Merchandise</a></li>\r\n                <li><a href=\"#\">Extras</a></li>\r\n                <li><a href=\"#\">Media</a></li> \r\n              </ul>\r\n            </li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    \r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <!-- Indicators -->\r\n        <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n    \r\n        <!-- Wrapper for slides -->\r\n        <div class=\"carousel-inner\" role=\"listbox\">\r\n          <div class=\"item active\">\r\n            <img src=\"../assets/images/waynad.JPG\" alt=\"Wayanad\" width=\"1200\" height=\"700\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Wayanad</h3>\r\n              <p>The weather in Wayanad is incredible!</p>\r\n            </div>      \r\n          </div>\r\n    \r\n          <div class=\"item\">\r\n            <img src=\"../assets/images/pondy.JPG\" alt=\"Pondicherry\" width=\"1200\" height=\"700\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Pondicherry</h3>\r\n              <p>Thank you, Pondicherry - A morning i won't forget.</p>\r\n            </div>      \r\n          </div>\r\n        \r\n          <div class=\"item\">\r\n            <img src=\"../assets/images/aqua.JPG\" alt=\"Aquarium\" width=\"1200\" height=\"700\">\r\n            <div class=\"carousel-caption\">\r\n              <h3>Aquarium in Kerala</h3>\r\n              <p>Kerala, God's own country is always splendid to visit.</p>\r\n            </div>      \r\n          </div>\r\n\r\n        </div>\r\n    \r\n        <!-- Left and right controls -->\r\n        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n    \r\n    <!-- Container (The Photos Section) -->\r\n    <div id=\"photos\" class=\"dvContainer\">\r\n      <div class=\"container text-center\">\r\n          <!-- <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <google-adsense></google-adsense>\r\n              </div>\r\n            </div> -->\r\n      <h3>PHOTOS</h3>\r\n      <h2>Photography is the story, I fail to put into words.</h2>\r\n    </div>\r\n      <div class=\"row\" style=\"margin: 0 auto\">\r\n          <iframe src='https://www.juicer.io/api/feeds/revanth7795/iframe' frameborder='' width='100%' height='4250' style='display:block;margin:0 auto;'></iframe>\r\n      </div>\r\n      <div class=\"loadmore\" [style.top]=\"loadTop + 'px'\"><img id=\"arrowID\" [ngClass]=\"{'arrowUP': 'arrowUp' , 'arrowDOWN': 'arrowDown'}[arrowClass]\" src=\"../assets/images/down arrow.png\"  (click)=\"loadmore()\" data-toggle=\"arrowTooltip\" title=\"Show More\" alt=\"\" width=\"150\" height=\"100\"></div>\r\n\r\n      <div class=\"dvInsideTL\" [style.top]=\"divTop + 'px'\">\r\n        <!-- Container (Travel Section) -->\r\n        <div id=\"travel\" class=\"bg-1\">\r\n          <div class=\"container\">\r\n              <!-- <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <google-adsense></google-adsense>\r\n                  </div>\r\n                </div> -->\r\n            <h3 class=\"text-center\">TRAVEL DATES</h3>\r\n            <h2 class=\"text-center\">Travel till the last breath, make your soul happy..</h2>\r\n            <p class=\"text-center\"> “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” <em style=\"font-weight: bold;\">– Anthony Bourdain</em></p>\r\n            <br>\r\n            <div id=\"accordion\">\r\n\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item collapsed\" data-toggle=\"collapse\" href=\"#lg1\">June, 2016 <a class=\"badge\"><span class=\"glyphicon glyphicon-ok\"></span></a></li>\r\n                <div id=\"lg1\" style=\"padding-top: 5px;\" class=\"row text-center collapse\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Mysore.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n                      <p><strong>Mysore</strong></p>\r\n                      <p>Monday 5th June 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Shivasamudra.jpg\" alt=\"San Francisco\" width=\"400\" height=\"300\">\r\n                      <p><strong>Shivanasamudra Falls</strong></p>\r\n                      <p>Tuesday 6th June 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Coorg1.jpg\" alt=\"San Francisco\" width=\"400\" height=\"300\">\r\n                      <p><strong>Coorg, Madikeri</strong></p>\r\n                      <p>Wednesday 7th June 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <li class=\"list-group-item collapsed\" data-toggle=\"collapse\" href=\"#lg2\">December, 2016 <a class=\"badge\"><span class=\"glyphicon glyphicon-ok\"></span></a></li>\r\n                <div id=\"lg2\" style=\"padding-top: 5px;\" class=\"row text-center collapse\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Ooty.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n                      <p><strong>Ooty</strong></p>\r\n                      <p>Monday 26 December 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Munnar.jpg\" alt=\"New York\" width=\"400\" height=\"300\">\r\n                      <p><strong>Munnar</strong></p>\r\n                      <p>Tuesday 27 December 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Kochi.jpg\" alt=\"San Francisco\" width=\"400\" height=\"300\">\r\n                      <p><strong>Kochi</strong></p>\r\n                      <p>Wednesday 28 December 2016</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n                <li class=\"list-group-item\" data-toggle=\"collapse\" href=\"#lg3\">May, 2018 <a class=\"badge\"><span class=\"glyphicon glyphicon-ok\"></span></a> </li>\r\n                <div id=\"lg3\" style=\"padding-top: 5px;\" class=\"row text-center collapse\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Athirapally.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n                      <p><strong>Athirappilly Falls</strong></p>\r\n                      <p>Friday 18 May 2018</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Wayanad.jpg\" alt=\"New York\" width=\"400\" height=\"300\">\r\n                      <p><strong>Wayanad</strong></p>\r\n                      <p>Saturday 19 May 2018</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Coorg2.jpg\" alt=\"San Francisco\" width=\"400\" height=\"300\">\r\n                      <p><strong>Coorg</strong></p>\r\n                      <p>Sunday 20 May 2018</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n                <li class=\"list-group-item\" data-toggle=\"collapse\" href=\"#lg4\">October, 2018 <a class=\"badge\"><span class=\"glyphicon glyphicon-ok\"></span></a> </li>\r\n                <div id=\"lg4\" style=\"padding-top: 5px;\" class=\"row text-center collapse\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Pondycherry.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n                      <p><strong>Pondicherry</strong></p>\r\n                      <p>Saturday 13 October 2018</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Auroville.jpg\" alt=\"New York\" width=\"400\" height=\"300\">\r\n                      <p><strong>Auroville</strong></p>\r\n                      <p>Sunday 14 October 2018</p>\r\n                      <!-- <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Buy Tickets</button> -->\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n                <!-- <li class=\"list-group-item\" data-toggle=\"collapse\" style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;\" href=\"#lg5\">December, 2018 <span class=\"label label-danger\">Coming up</span> <span style=\"background-color:#d9534f\" class=\"badge\">1</span></li>\r\n                <div id=\"lg5\" style=\"padding-top: 5px;\" class=\"row text-center collapse\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"thumbnail\">\r\n                      <img src=\"../assets/images/Goa.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n                      <p><strong>Goa</strong></p>\r\n                      <p>29th Dec 2018 to 1st Jan 2019</p>\r\n                      <button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\">Join Trip</button>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              </ul>\r\n            </div>\r\n            \r\n\r\n          </div>\r\n          \r\n          <!-- Modal -->\r\n          <!-- <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n            \r\n              Modal content\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\r\n                  <h4><span class=\"glyphicon glyphicon-briefcase\"></span> Travel</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSd1HtzqO2veeI9_8op3J5RGGgOeniSI5FIkP01tagsQJIHWZg/viewform?embedded=true\" width=\"100%\" height=\"600\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n    \r\n        <!-- Container (The About Section) -->\r\n        <div id=\"about\" class=\"container text-center\">\r\n          <h3>About ME</h3>\r\n          <p><em>Programmer by Profession.. <em style=\"font-weight: bold;\">Photographer</em> by passion!!</em></p>\r\n          <p>I am Revanth, a Programmer who is very much interested in Photography by passion. That's how it made me to develop a website which showcases my photography skills.</p>\r\n          <br>\r\n          <div class=\"row\" style=\"margin: 0 auto\">\r\n    \r\n              <img href=\"#myPage\" src=\"../assets/images/Revanth logo1.png\" alt=\"name\" width=\"191\" height=\"50\"><br>\r\n              <a href=\"#demo4\" data-toggle=\"collapse\">\r\n                <img src=\"../assets/images/bandmember.jpg\" class=\"img-circle person\" alt=\"Random Name\" width=\"70\" height=\"70\">\r\n              </a>\r\n                <div id=\"demo4\" class=\"block\" [style.height]=\"height + 'px'\" #my>\r\n                  <p>Traveller</p>\r\n                  <p>Photographer</p>\r\n          \r\n                  <a href=\"https://www.facebook.com/revanth.reddy.9822\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my facebook\"  class=\"fa fa-facebook\"></a>\r\n                  <a href=\"https://twitter.com/revanth070795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my twitter\"  class=\"fa fa-twitter\"></a>\r\n                  <a href=\"https://plus.google.com/+revanthreddy7795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my google-plus\"  class=\"fa fa-google\"></a>\r\n                  <a href=\"https://www.instagram.com/revanth7795/\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my instagram\"  class=\"fa fa-instagram\"></a>\r\n                  <a href=\"https://github.com/revanth7795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my github\" class=\"fa fa-git\"></a>\r\n                  <a href=\"mailto:revanth.bogala123@gmail.com\" target=\"_blank\" data-toggle=\"tooltip\" title=\"send mail to me\" class=\"fa fa-envelope\"></a>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- Container (Contact Section) -->\r\n        <div id=\"contact\" class=\"container\">\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <google-adsense></google-adsense>\r\n            </div>\r\n          </div> -->\r\n          <h3 class=\"text-center\">Contact</h3>\r\n        \r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <p>Fan? Drop a note.</p>\r\n              <p><span class=\"glyphicon glyphicon-map-marker\"></span>Bangalore, India</p>\r\n              <p><span class=\"glyphicon glyphicon-phone\"></span>Phone: +91 9908846632</p>\r\n              <p><span class=\"glyphicon glyphicon-envelope\"></span> Email: revanth.bogala123@gmail.com</p>\r\n              <br>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <google-adsense></google-adsense>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col-sm-6 form-group\">\r\n                  <input class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"userName\" placeholder=\"Name\" type=\"text\" required>\r\n                </div>\r\n                <div class=\"col-sm-6 form-group\">\r\n                  <input class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"userEmail\" placeholder=\"Email\" type=\"email\" required>\r\n                </div>\r\n              </div>\r\n              <textarea class=\"form-control\" id=\"comments\" name=\"comments\" [(ngModel)]=\"userComments\" placeholder=\"Comment\" rows=\"5\"></textarea>\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 form-group\">\r\n                  <button class=\"btn pull-right\" type=\"submit\" (click)=\"onComment()\">Send</button>\r\n                </div>\r\n              </div> -->\r\n              <app-disqus></app-disqus>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- Footer -->\r\n        <footer>\r\n          <div class=\"text-center\">\r\n              <a class=\"up-arrow\" href=\"#myPage\" data-toggle=\"tooltip\" title=\"Go to TOP\">\r\n                  <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n                </a><br><br>\r\n                <p>Revanth Bogala ©2018 </p>       \r\n    \r\n                <a href=\"https://www.facebook.com/revanth.reddy.9822\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my facebook\"  class=\"fa fa-facebook\"></a>\r\n                <a href=\"https://twitter.com/revanth070795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my twitter\"  class=\"fa fa-twitter\"></a>\r\n                <a href=\"https://plus.google.com/+revanthreddy7795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my google-plus\"  class=\"fa fa-google\"></a>\r\n                <a href=\"https://www.instagram.com/revanth7795/\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my instagram\"  class=\"fa fa-instagram\"></a>\r\n                <a href=\"https://github.com/revanth7795\" target=\"_blank\" data-toggle=\"tooltip\" title=\"visit my github\" class=\"fa fa-git\"></a>\r\n                <a href=\"mailto:revanth.bogala123@gmail.com\" target=\"_blank\" data-toggle=\"tooltip\" title=\"send mail to me\" class=\"fa fa-envelope\"></a>\r\n        \r\n          </div>\r\n         </footer>\r\n      </div>\r\n    </div>\r\n\r\n    \r\n    \r\n    \r\n    \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Revanth Bogala';
        this.height = 0;
        this.loadTop = 3200;
        this.divTop = 3300;
        this.arrowClass = "arrowDOWN";
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            // Initialize Tooltip
            // $("[data-toggle='tooltip']").tooltip(); 
            // Add smooth scrolling to all links in navbar + footer link
            $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash != "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Store hash
                    var hash = this.hash;
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 900, function () {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
    };
    AppComponent.prototype.onClickAbout = function (height) {
        var _this = this;
        setTimeout(function () {
            _this.height = height;
            setTimeout(function () {
                _this.height = 0;
            }, 1200);
        }, 1000);
    };
    AppComponent.prototype.onComment = function () {
        console.log(this.userName + "  " + this.userEmail + "  " + this.userComments);
        if (this.userName && this.userEmail && this.userComments) {
            alert("Sent Successfully!");
            this.userName = "";
            this.userEmail = "";
            this.userComments = "";
        }
        else {
            alert("Warning: Please Enter all fields");
        }
    };
    AppComponent.prototype.loadmore = function () {
        var _this = this;
        if (this.loadTop == 3200) {
            setTimeout(function () {
                _this.loadTop = 4300;
                _this.divTop = 4400;
                document.getElementById('arrowID').setAttribute('src', '../assets/images/up_arrow.png');
                $('[data-toggle="arrowTooltip"]').attr("title", "Show Less");
                _this.arrowClass = "arrowUP";
            }, 300);
        }
        else if (this.loadTop == 4300) {
            setTimeout(function () {
                _this.loadTop = 3200;
                _this.divTop = 3300;
                document.getElementById('arrowID').setAttribute('src', '../assets/images/down arrow.png');
                $('[data-toggle="arrowTooltip"]').attr("title", "Show More");
                _this.arrowClass = "arrowDOWN";
            }, 300);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-disqus */ "./node_modules/ngx-disqus/fesm5/ngx-disqus.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _disqus_disqus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disqus/disqus.component */ "./src/app/disqus/disqus.component.ts");
/* harmony import */ var _bannerad_bannerad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bannerad/bannerad.component */ "./src/app/bannerad/bannerad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _disqus_disqus_component__WEBPACK_IMPORTED_MODULE_5__["DisqusComponent"],
                _bannerad_bannerad_component__WEBPACK_IMPORTED_MODULE_6__["BanneradComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_disqus__WEBPACK_IMPORTED_MODULE_3__["DisqusModule"].forRoot('disqus_shortname')
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bannerad/bannerad.component.css":
/*!*************************************************!*\
  !*** ./src/app/bannerad/bannerad.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bannerad/bannerad.component.html":
/*!**************************************************!*\
  !*** ./src/app/bannerad/bannerad.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ins class=\"adsbygoogle\" style=\"display:block;\" data-ad-slot=\"3196251310\" data-ad-client=\"ca-pub-3374467839316177\" \r\n  data-ad-format=\"auto\"></ins>\r\n</div>\r\n<br>\r\n\r\n<!-- data-ad-format=\"auto\" -->"

/***/ }),

/***/ "./src/app/bannerad/bannerad.component.ts":
/*!************************************************!*\
  !*** ./src/app/bannerad/bannerad.component.ts ***!
  \************************************************/
/*! exports provided: BanneradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanneradComponent", function() { return BanneradComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BanneradComponent = /** @class */ (function () {
    function BanneradComponent() {
    }
    BanneradComponent.prototype.ngOnInit = function () {
    };
    BanneradComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            try {
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
            }
            catch (e) {
                console.error(e);
            }
        }, 200);
    };
    BanneradComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-adsense',
            template: __webpack_require__(/*! ./bannerad.component.html */ "./src/app/bannerad/bannerad.component.html"),
            styles: [__webpack_require__(/*! ./bannerad.component.css */ "./src/app/bannerad/bannerad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BanneradComponent);
    return BanneradComponent;
}());



/***/ }),

/***/ "./src/app/disqus/disqus.component.ts":
/*!********************************************!*\
  !*** ./src/app/disqus/disqus.component.ts ***!
  \********************************************/
/*! exports provided: DisqusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisqusComponent", function() { return DisqusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisqusComponent = /** @class */ (function () {
    function DisqusComponent() {
    }
    DisqusComponent.prototype.ngOnInit = function () {
        (function () {
            var d = document, s = d.createElement('script');
            s.src = 'https://revanth7795.disqus.com/embed.js';
            s.setAttribute('data-timestamp', new Date().getTime().toString());
            (d.head || d.body).appendChild(s);
        })();
    };
    DisqusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disqus',
            template: '<div id="disqus_thread"></div>',
        })
    ], DisqusComponent);
    return DisqusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Old_Lap\Angular Projects\Revanth Blog\Revanth-Blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map