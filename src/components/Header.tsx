"use client"

import React, { useState, useEffect } from 'react';
import { BiLink } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

const Header: React.FC = () => {
    const changeableItems = ['Feedback Form', 'Cluster Events', 'Contacts', 'Laundry', 'Parcel', 'Mail', 'Locations', 'Gym', 'Badminton Courts', 'Dance Studio', 'Karaoke', 'Green Corner'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % changeableItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header style={headerStyle}>
            {/* <div style={iconWrapperStyle}>
                <BsInstagram style={iconStyle} />
                <BiLink style={iconStyle} />
            </div> */}
            <h1 style={headerTextStyle}>
                Find information regarding <span style={changeableTextStyle}>{changeableItems[currentIndex]}</span>
            </h1>
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    position: 'relative', // This will allow positioning the icon absolutely
};

const headerTextStyle: React.CSSProperties = {
    fontSize: '40px',
    color: '#343a40',
};

const changeableTextStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: 'green',
};

const iconWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    right: '30px', // Adjust this value to position the icon correctly
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // This adds space between the icons
};

const iconStyle: React.CSSProperties = {
    marginLeft: '7px', // Adjust this value to add more space between the icons
    fontSize: '24px', // Increase the font size for larger icons
};

export default Header;

// "use client"

// import React, { useState, useEffect } from 'react';
// import { BiLink } from 'react-icons/bi';
// import { BsInstagram } from 'react-icons/bs';

// const Header: React.FC = () => {
//     const changeableItems = ['Feedback Form', 'Cluster Events', 'Contacts', 'Laundry', 'Parcel', 'Mail', 'Locations', 'Gym', 'Badminton Courts', 'Dance Studio', 'Karaoke', 'Green Corner'];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % changeableItems.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <header style={headerStyle}>
//             <div style={iconWrapperStyle}>
//                 <BsInstagram style={iconStyle} />
//                 <BiLink style={iconStyle} />
//             </div>
//             <h1 style={headerTextStyle}>
//                 Find information regarding <span style={changeableTextStyle}>{changeableItems[currentIndex]}</span>
//             </h1>
//         </header>
//     );
// };

// const headerStyle: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '85px',
//     backgroundColor: '#1c1c1c', // Dark background color
//     borderBottom: '1px solid #343a40', // Slightly lighter dark color for the border
//     position: 'relative', // This will allow positioning the icon absolutely
// };

// const headerTextStyle: React.CSSProperties = {
//     fontSize: '40px',
//     color: '#f8f9fa', // Bright text color
// };

// const changeableTextStyle: React.CSSProperties = {
//     fontWeight: 'bold',
//     color: '#00ff7f', // Bright green color for emphasis
// };

// const iconWrapperStyle: React.CSSProperties = {
//     position: 'absolute',
//     right: '30px', // Adjust this value to position the icon correctly
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px', // This adds space between the icons
// };

// const iconStyle: React.CSSProperties = {
//     fontSize: '24px', // Increase the font size for larger icons
//     color: '#f8f9fa', // Bright color for icons to match the text
// };

// export default Header;
