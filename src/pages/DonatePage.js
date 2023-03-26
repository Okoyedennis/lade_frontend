import React from 'react'
import Donate from '../components/Donate/Donate'
import Navbar from '../components/Navbar'

const DonatePage = ({ setAmountFromDonation }) => {
  return (
    <div>
      <Navbar />
      <Donate setAmountFromDonation={setAmountFromDonation} />
    </div>
  );
};

export default DonatePage