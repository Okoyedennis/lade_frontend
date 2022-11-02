import React from 'react'
import { Link } from 'react-router-dom';
import './Demo.css'

const Demo = () => {
    return (
      <div className="demo" id="demo">
        <div className="demo_wrapper container">
          <div className="col-1s">
            <p>One Philosophy</p>
            <p>
              sellers who aspire to be good, do good, and spread goodness. We
              democratic, self-sustaining, two-sided marketplace which thrives
              on trust and is built on community and quality content.
            </p>
            <Link to="/apply" className="button">
              Apply
            </Link>
          </div>
          <div className="col-2s">
            <iframe
              width="570"
              height="320"
              src="https://www.youtube.com/embed/URaJ4iRu6-o"
              title="Youtube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
}

export default Demo
