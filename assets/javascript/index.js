

$("#submit").on("click", function(event){
    event.preventDefault(); 

var search = $("#searchTerm").val().trim(); 
var apiKey = "&api-key=2TMu5qzOb5CpwGWxMi3F9ATrgjJcGupk";

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + apiKey; 

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response){
 console.log(response);

let result = response.response.docs;

for (let i = 0; i < result.length; i++) {
    let articleDiv = $("<div>");
    let p = $("<p>").text(result[i].snippet);
    articleDiv.append(p);
    $("#show-article").append(articleDiv);
    console.log(articleDiv)
}
})
})