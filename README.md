MySQL-JSON-API
==============

This is an example of how to create a simple JSON HTTP API for mysql

  USET FROM CLIENT
  
  POST
  ---------
  
  $.ajax("http://magic-server:3000/data", {
   type: "GET",
   data : {key: "message", value: "text"}
  });
 
  GET
  ------------
  
  $.ajax("http://magic-server:3000/data", {success: function(data) {
     console.log(data);  
  }});
 