/* Global Variables */

const baseURL='http://api.openweathermap.org/data/2.5/weather?zip=';
const appId='&appid=2220ae827a3a1da8b2357a9cea0aefc5';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const userData=[];

document.getElementById('generate').addEventListener('click', Getweatherdata);

function Getweatherdata(e){
const zipCode =  document.getElementById('zip').value;
getweather(baseURL,zipCode, appId).then(postData('/weather')).then(updateUI(baseURL,zipCode, appId));

}





const getweather = async (baseURL, animal, key)=>{

    const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    weatherdate=data;
    return data;
  }  catch(error) {
    console.log("error", error);
    
  }
}

const updateUI = async (baseURL, animal, key) => {
    const request = await fetch(baseURL+animal+key)
    try{
        const weatherData = await request.json();
        
        //console.log(weatherData.weather[0].description)
        console.log(userData[0][0].userresponse)
      document.getElementById('date').innerHTML = newDate;
      document.getElementById('temp').innerHTML = weatherData.main.temp;
      document.getElementById('Weatherdes').innerHTML = weatherData.weather[0].description;
      
      document.getElementById('content').innerHTML = userData[0][0].userresponse;
  
    }catch(error){
      console.log("error", error);
    }
  }


  const postData = async ( url = '', userdata = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userdata),         
  });

    try {
      //console.log(userdata);
      const newUserData = await response.json();
     // console.log(newUserData);
     userData.length = 0;
      userData.push(newUserData);
     // console.log('this is after pushing into user data');
     // console.log(userData);
      return newUserData;
    }catch(error) {
    console.log("error", error);
    }
};


/* const getProjectData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  const allData = await request.json()
  //console.log('this is get from FE');
  //console.log(allData);
  }
  catch(error) {
    console.log("error", error);
 
  }
}; */

  