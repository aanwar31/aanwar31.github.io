/**
 * Created by aanwar31 on 05-Sep-16.
 */


$(document).ready(function () {
    var randomQuote;
    var randomNum;
    $("#btn-quote").trigger('click');



    function getQuote() {

        var quotes=["Things work out best for those who make the best of how things work out.",
            "We should not give up and we should not allow the problem to defeat us.",
            "The Way Get Started Is To Quit Talking And Begin Doing.",
            "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.",
            "Don’t Let Yesterday Take Up Too Much Of Today.",
            "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
            "Try not to become a person of success, but rather try to become a person of value.",
            "If you are good at something, Never do it for free",
            "What seems to us as bitter trials are often blessings in disguise.",
            "Life is not about finding yourself. Life is about creating yourself."];


        var authors=["John Wooden","A. P. J. Abdul Kalam",
            "Walt Disney",
            "Winston Churchill",
            "Will Rogers",
            "Steve Jobs",
            "Albert Einstein",
            "Joker",
            "Oscar Wilde",
            "Lolly Daskal"];

        randomNum=Math.floor((Math.random()*quotes.length));
        randomQuote=quotes[randomNum];
        var randomAuthor=authors[randomNum];
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {

      $(".quote").html(a[0].content);
      $(".author").text(a[0].title);
    });
      //  $(".quote").text(randomQuote);
      //  $(".author").text(randomAuthor);
    }
    function changeColor(){
        var colors=["#AED6F1","#F5B7B1","#C39BD3","#85C1E9","#A9DFBF","#F9E79F","#D5DBDB"];
        var randomNum=Math.floor(Math.random()*colors.length);


        $(".jumbotron").css("background-color",colors[randomNum]);


    }
    $("#btn-quote").on("click",function () {
        getQuote();
        changeColor();
    });

    $("#tweet").on("click",function () {
        window.open("https://twitter.com/intent/tweet?text="+randomQuote);

    });


});
