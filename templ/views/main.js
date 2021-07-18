const submitBtn = document.getElementById("submitbtn");
const city=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status")
const temp=document.getElementById("temp");
const getInfo =async(event) => {
    event.preventDefault();
    let cityval=city.value;

    if(cityval==""){
        city_name.innerText=`please enter a city name!`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f1524d8878b20886bd8de6bcc772f826`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data];
            temp.innerText=arData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;
            console.log(data);
                                                    
        }catch{
            city_name.innerText=`Please enter city name properly`;
        }
            

    }
};

submitBtn.addEventListener("click", getInfo);

