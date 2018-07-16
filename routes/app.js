/**
 * Created by rajin on 7/16/2018.
 */

// importing & using express
var express=require('express');
var app=express();

// importing & using body-Parser
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

//home route
app.get("/",function(req,res){
    res.render("home")
});

//speak route
app.get("/speak/:animal",function (req,res) {
    var animal=req.params.animal;
    console.log(animal);
   res.render("speak",{animal:animal})
   });

//repeat route
app.get("/repeat/:word/:number",function (req,res) {
   var word=req.params.word;
   var number=req.params.number;
   res.render("repeat",{word:word, number:number})
});

// not found route
app.get("*",function(req,res){
    res.send("sorry page not found :(")
});

// starting server at port 8000
app.listen(8000,function () {
    console.log("server started");
});