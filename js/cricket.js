 $(document).ready(function(){

    getNews();

    function getNews(){
       $('.container').empty();
       var url="http://cherry-shortcake-81993.herokuapp.com/cric/news";
       req=new XMLHttpRequest();
       req.open("GET",'https://cherry-shortcake-81993.herokuapp.com/cric/news/',true);
       console.log("Hello");
       req.send();
       req.onload = function(){
          json = JSON.parse(req.responseText);
          json=json.result;
          //putdata(res);
          for(var key in json){
             console.log(key);
             console.log(json[key]);
             var headlines=key;
             var link=json[key];
             link="http://"+link;
             var html="<div class='well'>"+"<a href="+link+"><strong>"+headlines+"</strong></a>";
             $('.container').append(html);
          }
       };
       req.onerror = function(){
          console.log("gadbad");
       }

    }

});
