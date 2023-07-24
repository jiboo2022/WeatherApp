import React from 'react';
import axios from 'axios';
import {useState , useEffect} from  'react';
import './App.css';


function App() {

  //9dec2f736a8962927292062c73a98b81

  

     const [data, setData]= useState([]);

     const [location, setLocation] = useState('')


     const Api_Url = 'https://api.openweathermap.org/data/2.5/weather';


     const searchLocation = async (loc) =>{

      const res = await fetch(`${Api_Url}?q=${loc}&appid=9dec2f736a8962927292062c73a98b81`);
      const info = await res.json();

      setData(info)
      
      console.log(info)



     }


     useEffect( ()=>{

        searchLocation('lagos');  

     },[])


     /*const  loc = ()=>{

      alert(location);
     }
   */


const getit = ()=>{
    searchLocation(location);
 }


  return (
    <div className="app">


            <div className='search'> 

             <input type = 'text'

               value={location}

               onChange ={ (e) => setLocation(e.target.value) } 

               onKeyPress={getit}

               placeholder='Enter Location'

     

               />

                



            </div>




          <div className='container'>


           <div className='top'> 

           <div className='location'>
                  
                 
                 <p>

                    
                 {data.name}

                 </p> 

                 </div> 

                 <div className='temp'> 

                 { data.main ? <h1>{data.main.temp.toFixed()} F</h1> : null 

                  } 

                  </div>


                 <div className='description'> 


                 { data.weather ? <p>{data.weather[0].main} </p> : null  } 

                  </div>
       
              </div>
              </div>

                <div className='bottom'>


                <div className='feels'> 

                <p> { data.main ? <p>{data.main.feels_like.toFixed()} F </p> : null  } </p> 

                <p> Feels like </p>

                </div>


                <div className='humidity'>

                 <p> { data.main ? <p>{data.main.humidity} F </p> : null  } </p> 

                 <p> Humidity </p>

                 </div>



                 <div className='wind'> 

                 <p> { data.wind ? <p>{data.wind.speed} MPh </p> : null  } </p>
                 <p> Wind Speed </p>


                  </div>




                </div>
    </div>
  );
}

export default App;
