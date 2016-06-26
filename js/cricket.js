 $(document).ready(function(){

    getNews();

    function getNews(){
       $('.container').empty();
       var url="http://cherry-shortcake-81993.herokuapp.com/cric/news";
       var badaUrl='http://whateverorigin.org/get?url='+encodeURIComponent(url)+'&callback=?';
       $.getJSON(badaUrl,function(json){
          json=JSON.stringify(eval("(" + json.contents + ")")); // Eval converts string to object
                                                // JSON.stringify converts object to json string
          json=$.parseJSON(json);                // $.parseJSON converts it to actual json object
          for(var key in json){
             var headlines=key;
             var link=json[key];
             link="http://"+link;
             console.log(headlines);
             console.log(link);
             //var html="<p>Hello</p>"
             var html="<div class='well'>"+"<a href="+link+"><strong>"+headlines+"</strong></a>";
             $('.container').append(html);
          }
       });
    }
});
