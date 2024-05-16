APIKEY = '6d9a406b54d3417eb6a40803241605';

// http://api.weatherapi.com/v1/current.json?key=6d9a406b54d3417eb6a40803241605&q=London&aqi=yes


const cityinput = document.getElementById("cityinput")
const searchbtn = document.getElementById("searchbtn")

const cityname = document.getElementById('cityname')
const country = document.getElementById('countryname')
const loctime = document.getElementById('loctime')
const temp = document.getElementById('temp')

async function getdata(APIKEY, cityinput){
   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityinput}&aqi=yes`)
   return await promise.json();
}

searchbtn.addEventListener('click', async()=>{
    const input = cityinput.value;
    const result = await getdata(APIKEY, input)
    cityname.innerText = `${result.location.name}, ${result.location.region} `
    country.innerText = result.location.country ;
    temp.innerText = result.current.temp_c ; 
    loctime.innerText = result.location.localtime ;
})