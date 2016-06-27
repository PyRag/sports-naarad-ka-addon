 $(document).ready(function(){

    getNews();

    function getNews(){
       $('.container').empty();
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
             //link=link.substr(4);  // Taking out www out of URL.
             //link="m."+link;       // Taking links to mobile website of cric buzz
             link="http://"+link;  // Adding http:// infront of url to avoid opening in localhost
             var html="<div class='well'>"+"<a href="+link+" target='_blank'><strong>"+headlines+"</strong></a>";
             $('.container').append(html);
          }
       };
       req.onerror = function(){
          console.log("gadbad");
       }

    }

    $('#news').click(function(){

       getNews();

    });

    $('#schedule').click(function(){

       getSchedule();

    });

    function getSchedule(){

        $('.container').empty();
        req=new XMLHttpRequest();
        req.open("GET",'https://cherry-shortcake-81993.herokuapp.com/cric/matches/',true);
        req.send();
        req.onload = function(){
           json = JSON.parse(req.responseText);
           json=json.result;
           //putdata(res);
           for(var key in json){
               console.log(key);
               console.log(json[key]);
               var series=key;
               var matches=json[key];

               var html="<div class='well'><p class='text-success'><strong>"+series+"</strong></p><br><br>";

               for(var i=0;i<matches.length;++i){

                  var match=matches[i];
                  var versus=match[0];
                  var date=match[1];
                  var venue=match[2];
                  var status=match[3];
                  html+="<div class='well'>";
                  html+="<p class='text-info'>"+versus+"</p>";
                  html+="<p class='text-info'>"+date+"</p>";
                  html+="<p class='text-info'>"+venue+"</p>";
                  html+="<p class='text-info'>"+status+"</p>";
                  html+="</div>";
               }

               $('.container').append(html);

           }



       };

       req.onerror = function(){
          console.log("gadbad");
       }

   }



});
