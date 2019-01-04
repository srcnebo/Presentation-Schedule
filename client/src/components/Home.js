import React from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import logo from '../assets/logo.svg';
import './Home.css';

const carousel = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '100%',
  height: '100%',
  'z-index': '2'
};

export default function Home() {
  return (
    <div>
      <div style={{ carousel }}>
        <div className="jumbotron">
          <div className="mx-4 text-center">
            <Bounce left>
              <img alt="" src={logo} width="400" />
            </Bounce>
            <div className="mt-2">
              <h1 className="mb-3">Presentation Scheduling</h1>
            </div>
            <Link to="/presentations">
              <button className="btn btn-primary mt-4 home-button">
                View resentations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="jumbotron ">
        <Link to="/presentations" className="jumbotron-link">
          <button className="btn btn-primary btn-lg center-btn">
            Presentation
          </button>
        </Link>
      </div> */
}
