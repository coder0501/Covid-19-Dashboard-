function DateFilter({ onDateChange }) {
    // Responsive styles based on window width
    const style = {
        container: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '1rem'
        },
        label: {
            marginBottom: '0.5rem', 
            color: 'gray', 
            fontSize: window.innerWidth > 768 ? '16px' : '14px' // smaller font size for smaller devices
        },
        inputContainer: {
            display: 'flex',
            border: '1px solid grey',
            backgroundColor: 'white',
            height: '40px',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '5px'
        },
        input: {
            flex: 1,
            border: 'none',
            padding: '10px',
            borderRadius: '5px'
        }
    };

    style.input.leftRadius = { ...style.input, borderRadius: '5px 0 0 5px' };
    style.input.rightRadius = { ...style.input, borderRadius: '0 5px 5px 0' };

    return (
        <div style={style.container}>
            <label style={style.label}>Filter by Date Range:</label>
            <div style={style.inputContainer}>
                <input
                    style={style.input.leftRadius}
                    type="date"
                    onChange={e => onDateChange('start', e.target.value)}
                />
                <input
                    style={style.input.rightRadius}
                    type="date"
                    onChange={e => onDateChange('end', e.target.value)}
                />
            </div>
        </div>
    );
}

export default DateFilter;