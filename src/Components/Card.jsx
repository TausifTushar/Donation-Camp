import React, { useEffect, useState } from 'react';
import AllCard from './AllCard';

const Card = () => {
    const [donation, setDonation] = useState([])

    useEffect(()=>{
        fetch('Donation.json')
        .then(res=>res.json())
        .then(data=>setDonation(data))
    },[])

    return (
      
        <div className=' flex justify-center'>
         <div className='grid grid-cols-4  w-[1320px] gap-5 mt-10'>
            {
                donation?.map(singelDonation => <AllCard singelDonation={singelDonation} key={singelDonation.id}></AllCard> )
            }
        </div>
       </div>
       
    );
};

export default Card;