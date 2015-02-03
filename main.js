$(document).ready(function () {
  page.init();

});


var page = {
init: function () {
  page.initStyling();
  page.initEvents();
  page.getListings();
},

initStyling: function () {
  console.log('init styling');

},

initEvents: function () {
  console.log('init events');

},

config: {
  baseUrl:'https://openapi.etsy.com/v2/',
  api_key:'37ncribvdm5a0j01bg129r3f'
},


// get latest active listings - images currently don't load

getListings: function () {
   $.ajax({
     url: page.config.baseUrl + 'listings/active.js?api_key=' + page.config.api_key,
     type: 'GET',
     dataType: 'JSONP',
     success: function (data) {
       console.log(page.config.baseUrl + 'listings/active.js?api_key=' + page.config.api_key);
       console.log(data);


       data.results.forEach(function(item, idx, array) {

         $('.container').append('<p><img src ="' + item.url + '"></p>');
         $('.container').append('<p>' + item.title + '</p>');
         $('.container').append('<p> $' + item.price + '</p>');

       });


//        _.each(data, function(item, index, array) {
//          _.each(item, function(currentItem, idx, arr) {
//            $('.container').append('<p>' + currentItem.title + '</p>');
//            $('.container').append('<img src ="' + currentItem.url + '">');
//          });
//        });

     },
     error: function (error) {
       console.log(error);
     }
   });
}










};
