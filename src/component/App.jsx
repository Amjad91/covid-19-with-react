import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Cases from "./Cases";
import CovidChart from "./CovidChart";
import AppInfo from "./AppInfo";

function App() {
  return <div><Header />
  <Cases />
  <CovidChart />
  <AppInfo />
  <Footer /></div>
}


export default App;
