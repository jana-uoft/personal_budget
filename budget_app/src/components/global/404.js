import React from 'react';
import '../../assets/styles/404.css';


 const FourOhFour = () => {
  return (
    <div className="container-rocket">
      <div className="row">
        <div className="col-md-3">
          <div id="rocket-container">
            <div className="flame-container">
              <div className="flame-container-two">
                <div className="red flame"></div>
                <div className="orange flame"></div>
                <div className="yellow flame"></div>
                <div className="white flame"></div>
              </div>
              <img id="rocket" alt="rocket" src="http://demo404.dieciseisbits.com/img/rocket.png"/>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="page">Page</div>
          <div className="not">Not Found</div>
          <div className="you-are">Oops! You are lost in Space</div>
          <div className="go-back"><a href="/">Go Home</a></div>
        </div>
        <div className="col-md-2 planet-container">
          <div className="planet">
            <div className="not-shadow">
              <div className="crater-1"></div>
              <div className="crater-1-shadow"></div>
              <div className="crater-2"></div>
              <div className="crater-2-shadow"></div>
              <div className="crater-3"></div>
              <div className="crater-3-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourOhFour;