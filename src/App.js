import intersect from "./assets/Intersect.svg";
import calendar from "./assets/Calendar.png";
import clock from "./assets/Wall Clock.png";
import loader from "./assets/load.png";
import './App.css';

function App() {
  return (
    <div
      style={{
        width: '100vw',  
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'black',
      }}
    >
      
      <div
        style={{
          display: 'flex', // Use flexbox to align image and text side by side
          alignItems: 'center',
          gap: '20px', // Space between the image and the text content
          maxWidth: '90%', // Limit the overall width of the content for responsiveness
          padding: '20px',
        }}
      >
        
        
        <img
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={intersect}
          alt="Intersect"
        />

        <div
          style={{
            textAlign: 'right', 
            position: 'relative',
            width: '100%',
            marginTop:'30px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '17px',  
              fontWeight: '100',
              fontFamily: 'Chakra Petch',
              position: 'absolute',
              top: '-30px', 
              right: '0px', 
              zIndex: '15',
            }}
          >
            50%
          </div>

          <div
            style={{
              color: 'white',
              fontSize: '30px',  
              fontFamily: 'Chakra Petch',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            Dev Camp
          </div>

            <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              marginTop: '10px',
              marginBottom: '5px',
            }}
          ></div>

          <img
            style={{
              position: 'absolute', 
              top: '-60px', 
              left: '-15px',
              width: '100%',
              height: '50%', 
              zIndex: '10', 
            }}
            src={loader}
            alt="load"
          />

{/* clock */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
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
                  fontSize: '18px', 
                  fontFamily: 'Chakra Petch',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
              >
                06:00-07:45 pm
              </div>
            </div>

{/* calender */}
          <div
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right',
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
                fontSize: '18px', 
                fontFamily: 'Chakra Petch',
                fontWeight: '400',
                wordWrap: 'break-word',
              }}
            >
              10th June
            </div>
          </div>

          {/* Know More */}
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
                fontSize: '20px',  
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
