import React, {Component} from "react";
import Chart from "chart.js";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";







class CovidChart extends Component {

    
    chartRef = React.createRef();
    chartRef2 = React.createRef();
componentDidMount() {
    const xlables = [];
    const ylables = [];
    const yrec = [];
    const ydeath = [];


    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => {
        if (response.ok) {
            return  response.json()
        }
        else {
            throw new Error ('something went wrong')
        }
    })
    .then(data => {
        data["Saudi Arabia"].forEach(({ date , confirmed, recovered, deaths }) => {

 if (date > '2020-3-1' ) {
    xlables.push(date);
    ylables.push(confirmed);
    yrec.push(recovered);
    ydeath.push(deaths);
}

    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
        type: "line",
        data: {
            //Bring in data
            labels: xlables,
            datasets: [
                {
                    label: "Number of Confirmed Cases",
                    data: ylables,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,

                },
                {
                    label: "Number of Recoverd",
                    data: yrec,
                    fill: false,
                    backgroundColor: 'rgb(92, 166, 216, 0.2)',
                    borderColor: 'rgb(92, 166, 216)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            //Customize chart options
        }
    })

    //chart2
    const myChartRef2 = this.chartRef2.current.getContext("2d");
    new Chart(myChartRef2, {
        type: "line",
        data: {
            //Bring in data
            labels: xlables,
            datasets: [
                {
                    label: "Number of Deaths",
                    data: ydeath,
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: "Number of Recoverd",
                    data: yrec,
                    fill: false,
                    backgroundColor: 'rgb(92, 166, 216, 0.2)',
                    borderColor: 'rgb(92, 166, 216)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            //Customize chart options
        }
    })
})})

}




    
    render() {

        return (<section id="chartInfo">
                 <div className="container">
                       <center> <Tabs>
                            <TabList style={{color: 'rgb(156, 156, 156)',fontFamily: 'sans-serif', backgroundColor: 'white'}}>
                            <Tab className="tab">Confirmed And Recoverd</Tab>
                            <Tab className="tab">Recoverd And Deaths</Tab>
                            </TabList>
                        
                        <TabPanels style={{margin:'50px'}}>
                     
                            <TabPanel>
                            <div className="chart">
                            <canvas id="myChart" ref={this.chartRef}  width="60" height="50"/> 
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="chart">
                            <canvas id="myChart2" ref={this.chartRef2} width="60" height="50"/> 
                            </div>
                            </TabPanel>
                         

                        </TabPanels>    
                        </Tabs></center>
                </div>
                </section>
            
            ) }
}


export default CovidChart;