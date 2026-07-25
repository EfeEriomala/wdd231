//search Html Element in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//Create Requested Variable For The URL
const myKey = "97746ce87f925d663e8f7ee8c0b09553"
const myLat = "5.549081"
const myLong = "5.765905"

//Construct A Full Path Using Template Literals
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

//Tryb to grab the current weater data

async function apiFetch() {
    try{
        const response = await fetch (myURL);
        if (response.ok){
            const data = await response.json();
            console.log(data);//testing only
            displayResults(data); //unconnect when ready
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}
//dispalay the json data on to the web page
function displayResults(data){
    console.log('hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}90&deg;F`
    const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();