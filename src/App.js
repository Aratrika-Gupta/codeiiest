import intersect from "./assets/Intersect.svg";
import calendar from "./assets/Calendar.png";
import clock from "./assets/Wall Clock.png";
import loader from "./assets/load.png";
import './App.css';

function App() {
  return (
    <div
      style={{
        width: '100vw',  // Full width of the viewport
        height: '100vh', // Full height of the viewport
        display: 'flex', // Flexbox to center the container
        justifyContent: 'center', // Horizontally center the main content
        alignItems: 'center', // Vertically center the main content
        backgroundColor: 'black',
      }}
    >
      {/* Main Content Wrapper */}
      <div
        style={{
          display: 'flex', // Use flexbox to align image and text side by side
          alignItems: 'center',
          gap: '20px', // Space between the image and the text content
          maxWidth: '90%', // Limit the overall width of the content for responsiveness
          padding: '20px',
        }}
      >
        
        {/* Left-aligned Image */}
        <img
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={intersect}
          alt="Intersect"
        />

        {/* Text Content */}
      
        <div
          style={{
            textAlign: 'right', // Center align the text content
            position: 'relative',
            width: '100%',
            marginTop:'30px',
          }}
        >
          {/* Visible "50%" */}
          <div
            style={{
              color: 'white',
              fontSize: '17px',  // Make it larger
              fontWeight: '100',
              fontFamily: 'Chakra Petch',
              position: 'absolute',
              top: '-30px', // Position it clearly above other content
              right: '0px', // Align it to the right
              zIndex: '15', // Ensure it's on top of other elements
            }}
          >
            50%
          </div>

          <div
            style={{
              color: 'white',
              fontSize: '30px',  // Responsive font size
              fontFamily: 'Chakra Petch',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            Dev Camp
          </div>

          {/* Line Divider */}
            <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              marginTop: '10px',
              marginBottom: '5px',
            }}
          ></div>

          {/* Loader Image */}
          <img
            style={{
              position: 'absolute', // Ensure it's positioned correctly
              top: '-60px', // Place it where you want it
              left: '-15px',
              width: '100%',
              height: '50%', // Make sure the height is set properly
              zIndex: '10', // Ensure it's below the 50% text
            }}
            src={loader}
            alt="load"
          />


            {/* Time and Clock Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center align
                marginTop: '5px',
              }}
            >
              <img
                style={{ width: '30px', height: 'auto' }}
                src={clock}
                alt="clock-icon"
              />
              <div
                style={{
                  color: 'white',
                  fontSize: '18px',  // Responsive font size
                  fontFamily: 'Chakra Petch',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
              >
                06:00-07:45 pm
              </div>
            </div>


          {/* Date and Calendar Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right', // Align side by side items centrally
            }}
          >
            <img
              style={{ width: '30px', height: '20px' }}
              src={calendar}
              alt="calendar-icon"
            />
            <div
              style={{
                color: 'white',
                fontSize: '18px',  // Responsive font size
                fontFamily: 'Chakra Petch',
                fontWeight: '400',
                wordWrap: 'break-word',
              }}
            >
              10th June
            </div>
          </div>

          {/* Know More Button */}
          <div
            style={{
              background: '#D54A5A',
              borderRadius: '21.97px',
              marginTop:'10px',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '2px',
              paddingBottom: '2px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '20px',  // Responsive font size
                fontFamily: 'Chakra Petch',
                fontWeight: '700',
                wordWrap: 'break-word',
              }}
            >
              Know more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
