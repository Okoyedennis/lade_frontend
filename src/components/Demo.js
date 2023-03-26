import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Demo.css'
import { Role } from './Model/Role';

const Demo = () => {
  const currentUser = useSelector((state) => state.user);

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
            {currentUser?.user.role !== Role.ADMIN && (
              <div className="actions">
                <Link to="/apply" className="button">
                  Apply
                </Link>
                <Link to="/donate" className="button">
                  Invest
                </Link>
              </div>
            )}
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
