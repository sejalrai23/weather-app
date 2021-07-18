const exp=require("express");
const path=require("path");
const hbs=require("hbs");
const app= exp();
const port=process.env.PORT || 8000;

//public static path
const path1=path.join(__dirname,"../public");
const templ_path=path.join(__dirname,"../templ/views");
const partials_path=path.join(__dirname,"../templ/partials");

app.set("view engine","hbs");

app.set("views",templ_path);
hbs.registerPartials(partials_path);
app.use(exp.static(path1));


//routing

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Oops! page not found"
    });
});

app.listen(port,()=>{
    console.log("listening to port 8000")
});