import React from 'react';
import Sidebar from '../components/sidebar';
import Users from './Users';
import '../pages/managerdb.css'
import Logotop from '../components/logotop';

const Managerdb = () => {
  return (
    <div className='managerhome'>
      <Sidebar />
      <div className="main-content">
        <div>
        <div className='for-label'>
          <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managerdb;
