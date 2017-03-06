//********* FUNCTIONS TO GET THE CURRENT TIME *********//


//Placed timer updating function inside of the setInterval function rather than the setTimeout Function
//Commented out the refresh and seconds variables, since the interval will always be one second long
//We can re-enable seconds if we want to display them later.
$(document).ready(function(){
  //console.log("Jquery is live!")
  $('.time').text(getTime());
  setInterval(function() {
    console.log("running get time");
  	$('.time').text(getTime());

  }, 1000);
});
var date = new Date()
//var seconds = date.getSeconds();
//var refresh = 60 - seconds;

function getTime() {
  date = new Date();
  //seconds = date.getSeconds();
  //refresh = 60 - seconds;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}



// setInterval(function() {
// 	if (refresh > 0) {
// 		refresh--;
// 	}
// }, refresh * 1000)

// consider using moments.js for real time updates

//********* FUNCTIONS TO ANIMATE A DAILY WORD *********//
var dailyWords = ['positivity', 'inspiration', 'motivation', 'weather', 'todo', 'photography', 'focus']
var currIndex = 0;

function animateWords(idx) {
	var dailyWord = $('span.daily-word');
	dailyWord.fadeOut(1000, function() {
		dailyWord.text(dailyWords[idx]);
		dailyWord.fadeIn(1000, function() {
			dailyWord.text(dailyWords[idx]);
		})
	});
}

setInterval(function() {
	if (currIndex <= dailyWords.length-1) {
		animateWords(currIndex);
	} else {
		currIndex = 0;
		animateWords(currIndex);
	}
	currIndex++;
}, 5000);

//********* FUNCTIONS TO GET QUOTES AND DISPLAY QUOTES *********//
var currentQuote = '';
var currentAuthor = '';

function displayQuote(json) {
  var quote = json[0];
  currentQuote = quote.content.slice(3, quote.content.length - 6);
  currentAuthor = quote.title;
  localStorage.setItem('quote', quote.content);
  localStorage.setItem('author', quote.title);
  $('cite').html(quote.content)
  $('cite p').append('~' + '<span>'+quote.title+'</span>');
}

function generateQuotes() {
  var today = new Date().toLocaleDateString();
  // if this function already ran today, do not continue.
  if( localStorage.getItem('today') === today ) {
  	$('cite').html(localStorage.quote)
  	$('cite p').append('~' + '<span>'+localStorage.author+'</span>');
  } else {
	  // save today's date on the users computer
	  localStorage.setItem('today', today);

	  // get a quote for the day, display it with displayQuote()
		$.ajax({
		  crossorigin: true,
		  url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=displayQuote',
		  dataType: 'jsonp',
		  success: function(data) {
		  	console.log("Data is", data);
		  },
		  error: function(err) {
		  	return new Error(err);
		  }
		});
  }
}
// localStorage.clear();
generateQuotes();
