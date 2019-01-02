import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="jumbotron ">
        <Link to="/presentations" className="jumbotron-link">
          <button className="btn btn-primary btn-lg center-btn">
            Presentation
          </button>
        </Link>
      </div>
    </div>
  );
}
