import React, {useState, useEffect} from 'react';
import './App.css';
import Day from "./Component/days"

const App = () => {  
  const [tbilisi, setTbilisi] = useState([]);  
  const [kutaisi, setKutaisi] = useState([]);
  const [batumi, setBatumi] = useState([]);

  const getTodos = async () => {
    const url_tb = "https://api.openweathermap.org/data/2.5/onecall?lat=41.6941&lon=44.8337&units=metric&exclude=current&appid=f527564fb31cc061c5de78a2e03c9b07";
    const url_kt = "https://api.openweathermap.org/data/2.5/onecall?lat=42.2496&lon=42.6997&units=metric&exclude=current&appid=f527564fb31cc061c5de78a2e03c9b07";
    const url_bt = "https://api.openweathermap.org/data/2.5/onecall?lat=41.6416&lon=41.6359&units=metric&exclude=current&appid=f527564fb31cc061c5de78a2e03c9b07";

    const response = await fetch(url_tb);
    const data = await response.json();
    setTbilisi(data.daily);
    const response1 = await fetch(url_kt);
    const data1 = await response1.json();
    setKutaisi(data1.daily);
    const response2 = await fetch(url_bt);
    const data2 = await response2.json();
    setBatumi(data2.daily);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>      
      <h2>Tbilisi</h2> 
      <div className="tbi">
        {tbilisi.map(todo => (
          <Day info={todo} key={todo.dt} />
        ))}
      </div>
      <h2>Kutaisi</h2> 
      <div className="kut">
        {kutaisi.map(todo => (
          <Day info={todo} key={todo.dt} />
        ))}
      </div> 
      <h2>Batumi</h2> 
      <div className="bat">
        {batumi.map(todo => (
          <Day info={todo} key={todo.dt} />
        ))}
      </div> 
    </div>
  )
}

export default App;
