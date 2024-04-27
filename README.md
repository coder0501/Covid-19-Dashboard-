# Covid-19-Dashboard-
![image](https://github.com/coder0501/Covid-19-Dashboard-/assets/82721930/0e8a3134-939f-46a1-92f2-081b92e07bdb)

This repository contains the code for a COVID-19 Dashboard designed to visualize the spread of the virus globally with data on total cases, recoveries, and deaths. The dashboard is built using React.js and integrates various technologies such as Chart.js for graphical representations.

**Features**
Country Selection: Users can select different countries to view COVID-19 statistics.
Historical Data Visualization: Line charts display the trend of cases, recoveries, and deaths over time.
Current Statistics: Pie charts show the proportion of cases, recoveries, and deaths.
Date Filtering: Filter statistics for a specific date range.
Responsive Design: Adapts to different screen sizes for usability on desktops, tablets, and mobile devices.

**Technology Stack**
React.js: Frontend framework for building the user interface.
Chart.js: Library used for creating interactive charts.
CSS: Styling of the dashboard components.


**Setup and Installation**
To get the dashboard running locally:

Clone the Repository

git clone https://github.com/coder0501/covid-19-dashboard.git
cd covid-19-dashboard\

Install DependenciesEnsure that you have Node.js and npm installed on your machine, then run:
npm install
Run the ApplicationStart the development server with:
npm start
This will launch the dashboard on http://localhost:3000 in your web browser.

**API Reference**
This project uses the following APIs:

COVID-19 Data: https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500
Countries Data: https://restcountries.com/v3.1/all
These APIs provide the necessary data to feed into the dashboard components.

**License**
Distributed under the MIT License. See LICENSE for more information.
