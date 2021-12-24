// for loop

var json = [{
    "id" : "1",
    "message" : "Hello",
    "toWhom"  : "support@gmail.com",
    "date"   : "24-12-2021"
},
 {
    "id"  : "2",
    "message" : "welcomw",
    "toWhom" : "support@gmail.com",
    "date"  : 24-12-2021

 }];

   for(var i = 0; i< json.length; i++){
       var obj = json[i];

       console.log(obj.id);
   }


   //for in loop

   var json = [{
    "id" : "1",
    "message" : "Hello",
    "toWhom"  : "support@gmail.com",
    "date"   : "24-12-2021"
},
 {
    "id"  : "2",
    "message" : "welcomw",
    "toWhom" : "support@gmail.com",
    "date"  : 24-12-2021

 }];

   for(var key in json){
       console.log(json[key].id);
   }


   //for of loop

   var json = [{
    "id" : "1",
    "message" : "Hello",
    "toWhom"  : "support@gmail.com",
    "date"   : "24-12-2021"
},
 {
    "id"  : "2",
    "message" : "welcomw",
    "toWhom" : "support@gmail.com",
    "date"  : 24-12-2021

 }];

   for(var key in json){
       console.log(key.fromWho);
   }


   //for each loop

   var json = [{
    "id" : "1",
    "message" : "Hello",
    "toWhom"  : "support@gmail.com",
    "date"   : "24-12-2021"
},
 {
    "id"  : "2",
    "message" : "welcomw",
    "toWhom" : "support@gmail.com",
    "date"  : 24-12-2021

 }];


   json.forEach((item) =>{
       console.log(item.date);
   });





 
