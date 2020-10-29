const btn=document.querySelector('#btn');
const name =document.getElementById('name');
const icons=document.getElementById('icon');
const temps=document.getElementById('temp');
const desp=document.getElementById('desp');
const result=document.getElementById('result');


btn.addEventListener('click',()=>{
    event.preventDefault();
    
   

    const x=document.querySelector('#city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=e30c82155ac392516be36f6e90588c83
`)
.then((response)=>{
    return response.json();
})
.then((data) =>
{
    console.log(data);
    name.innerHTML=data.name;
    
    const icon=data.weather[0].icon;
    icons.innerHTML = `<img src=http://openweathermap.org/img/wn/${icon}@2x.png alt="cat" />`;

    const degree=Math.floor((data.main.temp)-273.15);
    temps.innerHTML=`${degree}°C`;

    const description=(data.weather[0].description).toUpperCase();
    desp.innerHTML=description;

    if (result.style.display === "none") {
        result.style.display = "block";
      } else {
        result.style.display = "none";
      }
    


   
});


}
 
)






