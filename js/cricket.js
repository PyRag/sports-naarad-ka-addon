 $(document).ready(function(){

    getLive();

    function getNews(){
       $('.container').empty();
       req=new XMLHttpRequest();
       req.open("GET",'https://cherry-shortcake-81993.herokuapp.com/cric/news/',true);
       //console.log("Hello");
       req.send();
       req.onload = function(){
          json = JSON.parse(req.responseText);
          json=json.result;
          //putdata(res);
          for(var key in json){
             //console.log(key);
             //console.log(json[key]);
             var headlines=key;
             var link=json[key];
             //link=link.substr(4);  // Taking out www out of URL.
             //link="m."+link;       // Taking links to mobile website of cric buzz
             link="http://"+link;  // Adding http:// infront of url to avoid opening in localhost
             var html="<div class='well'>"+"<a href="+link+" target='_blank'><strong>"+headlines+"</strong></a>";
             $('.container').append(html);
          }
       };
       

    }

    $('#news').click(function(){

       getNews();

    });

    $('#schedule').click(function(){

       getSchedule();

    });

    $('#live').click(function(){

       getLive();

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
               //console.log(key);
               //console.log(json[key]);
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
   }

   function getLive(){
     $('.container').empty();
     req=new XMLHttpRequest();
     req.open("GET",'https://cherry-shortcake-81993.herokuapp.com/cric/live/',true);
     req.send();
     req.onload = function(){

       json=JSON.parse(req.responseText);
       json=json.result;

       var html="";
       for(var i=0;i<json.length;++i){
         var info=json[i];
         //console.log(info["Headline"]);
         //console.log(info["match_score"]);
         //console.log(info["match_status"]);
         //console.log(info["match_timestamp"]);
         //console.log(info["match_title"]);
         //console.log(info["match_venue"]);
         //console.log(info["name_of_the_match_in_the_series"]);
         //console.log("\n\n");
         var headline=info["Headline"];
         var score=info["match_score"];
         if(score==="No data Found!!")
           score="";
         else{

           var pos=score.indexOf("\u2022");
          // console.log(pos);
           var str1=score.substr(0,pos-1);
           var str2=score.substr(pos+2);
           var str=str1+"and"+str2;
           score=str;
         }
         var status=info["match_status"];
         if(status==="No data Found!!")
            status="Match yet not played!!";
         var time=parseInt(info["match_timestamp"]);
         // Converting from TimeStamp to human readable date
         var d=new Date(time);
         var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
         var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
         var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
         var formattedTime = hours + ":" + minutes;
         time=formattedDate+" "+formattedTime;
         var title=info["match_title"];
         var venue=info["match_venue"];
         var name=info["name_of_the_match_in_the_series"];


         html+="<div class='well'><strong>"+headline+"<strong><br>";
         html+="<div class='light'>"+title+"</div>";
         html+="<div class='light'>"+name+"</div>";
         html+="<div class='light'>"+status+"</div>";
         html+="<div class='light'>"+score+"</div>";
         html+="<div class='light'>"+time+"</div>";
         html+="<div class='light'>"+venue+"</div>"
         html+="</div>";

       }

       $('.container').append(html);

     }

   }

});
