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


// get latest active listings

getListings: function () {
   $.ajax({
     url: page.config.baseUrl + 'listings/active.js?&limit=15&includes=Images:1&api_key=' + page.config.api_key,
     type: 'GET',
     dataType: 'JSONP',
     success: function (data) {
      console.log(page.config.baseUrl + 'listings/active.js?&limit=15&includes=Images:1&api_key=' + page.config.api_key);
       console.log(data);


       data.results.forEach(function(item, idx, array) {

         $('.container').append('<div class="listing">' +
         '<img src="' + item.Images[0].url_570xN + '">' +
         '<a href="' + item.url + '" target="_blank">' +
         '<p>' + item.title + '</p>' +
         '<p> $' + item.price + '</p>' +
         '</div>');
       });

     },
     error: function (error) {
       console.log(error);
     }
   });
}


};
