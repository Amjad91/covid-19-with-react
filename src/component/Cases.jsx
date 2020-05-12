
import React, {useState, useEffect} from "react";
import Totalcases from "./Totalcases"
import UpdateIcon from '@material-ui/icons/Update';



function Cases(){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [cases, setCases] = useState({
                                    confirmed: "",
                                    new: "",
                                    critical: "",
                                    recovered: "",
                                    deaths: "",
                                    active: "",
                                    date: ""
                                    });
                                

// GET request using fetch with set headers


    const headers =  {
                        "x-rapidapi-host": "covid-193.p.rapidapi.com",
                        "x-rapidapi-key": process.env.REACT_APP_API_KEY //Add your Api Key
                    }

    //fetch covid cases in Saudi Arabia                
    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=Saudi-Arabia', { headers })
        .then(response => response.json())
        .then(data => {
        
        setIsLoaded(true);
        const sa = data.response[0];
        setCases({ confirmed: sa.cases.total,
                   new: sa.cases.new,
                   critical: sa.cases.critical,
                    recovered: sa.cases.recovered,
                    deaths: sa.deaths.total,
                    active: sa.cases.active,
        })},
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, [])


if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else { return (
        <section id="cases">
            <div className="container cases">
            <p>Cases in Saudi</p>
            <div className="row">
               
                <div className="col  py-3 px-lg-3 border"><p>confirmed</p><hr></hr>{cases.confirmed} <span style={{color: "red"}}>({cases.new})</span></div>
                <div className="col  py-3 px-lg-3 border"><p>active</p><hr></hr>{cases.active}</div>
                <div className="col  py-3 px-lg-3 border"><p>critical</p><hr></hr>{cases.critical}</div>
                <div className="col  py-3 px-lg-3 border"><p>recovered</p><hr></hr>{cases.recovered}</div>
                <div className="col  py-3 px-lg-3 border"><p>deaths</p><hr></hr>{cases.deaths}</div>
            </div>
            <p>🌎Total</p>
             <Totalcases />
            </div>
        </section>
    );
}}


export default Cases;