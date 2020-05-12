import React, {useState, useEffect} from "react";



function Totalcases(){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [total, setTotal] =  useState({
    confirmed: "",
    new: "",
    critical: "",
    recovered: "",
    deaths: "",
    deathsNew: "",
    active: "",
    });  
                                
// GET request using fetch with set headers

    const headers =  {
                        "x-rapidapi-host": "covid-193.p.rapidapi.com",
                        "x-rapidapi-key": process.env.REACT_APP_API_KEY //Add your Api Key
                    }
   
    //fetch covid cases around the world

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=all', { headers })
        .then(response => response.json())
        .then(data => {
        
        setIsLoaded(true); 
        const allCases = data.response[0];
        setTotal({ 
                  confirmed: allCases.cases.total,
                   new: allCases.cases.new,
                   critical: allCases.cases.critical,
                    recovered: allCases.cases.recovered,
                    deaths: allCases.deaths.total,
                    deathsNew: allCases.deaths.new,
                    active: allCases.cases.active,
        });
    },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);


if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
    
            
         
            <div className="row">
                
                <div className="col py-3 px-lg-3 border"><p>confirmed</p><hr></hr>{total.confirmed}<span style={{color: "red"}}>({total.new})</span></div>
                <div className="col py-3 px-lg-3 border"><p>total active</p><hr></hr>{total.active}</div>
                <div className="col py-3 px-lg-3 border"><p>critical</p><hr></hr>{total.critical}</div>
                <div className="col py-3 px-lg-3 border"><p>recovered</p><hr></hr>{total.recovered}</div>
                <div className="col py-3 px-lg-3 border"><p>deaths</p><hr></hr>{total.deaths}<span style={{color: "red"}}>({total.deathsNew})</span></div>
            </div>
        
              ) };
        }


export default Totalcases;