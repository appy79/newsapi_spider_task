var url = 'https://newsapi.org/v2/everything?' +
  'q=Bitcoin&' +
  'from=2021-03-04&' +
  'sortBy=popularity&' +
  'apiKey=fb8faf65796848c895369e9753348d88';

var req = new Request(url);

function getnews(){
  fetch(req)
  .then(a => a.json())
  .then(response=>{
    for(var i=0; i<response.totalResults; i++){
      document.getElementById("output").innerHTML+="<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4'><img class='mw-100' src='"+response.articles[i].urlToImage+"' onerror=this.src='img/bitcoin.jpg'></div><div class='col-md-8'><div class='card-body'><h5>"+response.articles[i].title+"</h5><h6>"+response.articles[i].author+"</h6><p>"+response.articles[i].description+"</p><a href='"+response.articles[i].url+"' target='_blank' class='btn btn-primary' >Read Full Article</a></div></div></div></div>";
    }
  })
}
