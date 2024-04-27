function StatisticalCard({ title, data, titleBackgroundColor  }) {
    console.log("StatisticalCard data",title,data);
    
    const total = data && Object.keys(data).length > 0
    ? Object.values(data).reduce((sum, value) => sum + value, 0)
    : 0; // Default to 0 if data is empty or undefined

    // Convert the number to a string in million format
    const formatNumberToMillions = (number) => {
        return `${(number / 1e6).toFixed(1)}M`; // Convert to millions and append 'M'
    };

    return (
        <div style={{
            display: 'flex', // Make elements align in a row
            alignItems: 'center', // Align items vertically
        }}>
            <h3 style={{
                flex: 1, // Take available space
                backgroundColor: titleBackgroundColor, // Blue background for title
                color: 'white', // White text color
                margin: 0, // Remove default margin
                padding: '1vw 3vw', // Padding for the title
                borderRadius: '10px 0 0 10px', // Rounded left corners
                borderRight: 'none' // Remove right border to blend with <p>
            }}>{title}            </h3> 
            <p style={{
                flex: 0, // Take available space
                backgroundColor: 'white', // White background for the data
                color: 'black', // Black text color
                textAlign:'center',
                margin: 0, 
                padding: '1vw 2vw', 
                borderRadius: '10px 10px', // Rounded right corners
                zIndex: 2, // Higher z-index for stacking context
                borderLeft: 'none' // Separator
            }}>{formatNumberToMillions(total)}</p>
        </div>
    );
}

export default StatisticalCard;