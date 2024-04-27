import React, { useEffect, useState } from 'react';
import { fetchCountries, fetchCountryData } from './api'; // Imports API functions
import CountrySelector from './CountrySelector';
import StatisticalCard from './StatisticalCard';
import LineChart from './LineChart';
import PieChart from './PieChart';
import DateFilter from './DateFilter';

const Dashboard = () => {
  // State variables to manage countries, selected country, country data, and date range
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [countryData, setCountryData] = useState({ timeline: { cases: {}, deaths: {}, recovered: {} } });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handles changes in date input
  const handleDateChange = (type, value) => {
    if (type === 'start') {
      setStartDate(value);
    } else if (type === 'end') {
      setEndDate(value);
    }
  };

  // Fetches the list of countries when the component mounts
  useEffect(() => {
    fetchCountries().then(setCountries).catch(console.error);
  }, []);

  // Fetches data for the selected country and filters it by date if dates are set
  useEffect(() => {
    if (selectedCountry) {
      fetchCountryData(selectedCountry)
        .then(data => {
          const timeline = data.timeline || {};
          const { cases, deaths, recovered } = timeline;
          const filteredData = {
            cases: filterDataByDate(cases),
            deaths: filterDataByDate(deaths),
            recovered: filterDataByDate(recovered),
          };

          setCountryData({ timeline: filteredData });
        })
        .catch(console.error);
    } else {
      setCountryData({ timeline: { cases: {}, deaths: {}, recovered: {} } });
    }
  }, [selectedCountry, startDate, endDate]);

  // Filters the data based on the selected date range
  function filterDataByDate(data) {
    return Object.entries(data).reduce((acc, [date, value]) => {
      if ((!startDate || new Date(date) >= new Date(startDate)) &&
          (!endDate || new Date(date) <= new Date(endDate))) {
        acc[date] = value;
      }
      return acc;
    }, {});
  }

  // Calculate total values in millions for PieChart display
  const totalCasesInMillions = (Object.values(countryData.timeline.cases).reduce((sum, value) => sum + value, 0) / 1e6).toFixed(1);
  const totalRecoveredInMillions = (Object.values(countryData.timeline.recovered).reduce((sum, value) => sum + value, 0) / 1e6).toFixed(1);
  const totalDeathsInMillions = (Object.values(countryData.timeline.deaths).reduce((sum, value) => sum + value, 0) / 1e6).toFixed(1);
  
  // Prepares data for the PieChart
  const pieChartData = {
    totalCases: totalCasesInMillions,
    recovered: totalRecoveredInMillions,
    deaths: totalDeathsInMillions
  };

  return (
    <div style={{backgroundColor: '#F0F8FF'}}>
      <div style={{margin: '4vw'}}>
        <h2>COVID-19 and Population Dashboard</h2>
        
        {countryData && (
          <div>
            {/* First Row with country selector and date filter */}
            <div className="stats-row">
              <div className="card">
                <CountrySelector countries={countries} onChange={setSelectedCountry} />
              </div>
              <DateFilter onDateChange={handleDateChange} />
            </div>
            {/* Second Row with Statistical Cards for showing cases, recoveries and deaths */}
            <div className="stats-row">
              <div className="card">
                <StatisticalCard title="Total Cases" data={countryData.timeline.cases} titleBackgroundColor="#7280CF"/>
              </div>
              <div className="card">
                <StatisticalCard title="Recoveries" data={countryData.timeline.recovered} titleBackgroundColor="#7CFC00"/>
              </div>
              <div className="card">
                <StatisticalCard title="Deaths" data={countryData.timeline.deaths} titleBackgroundColor="#FF5733"/>
              </div>
              
            </div>
            {/*  Third row with Line and Pie Chart*/}
            <div className="chart-row">
              <div className="chart">
                <LineChart data={countryData.timeline} label="Total Cases Over Time" />
              </div>
              <div className="chart">
                <PieChart data={pieChartData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;