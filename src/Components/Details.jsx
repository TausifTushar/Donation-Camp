import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";




const Details = () => {
    const [donation, setDonation] = useState({})
    const [loading, setLoading] = useState(true)

    
    const {image, description , price, title, text_color} = donation;
    console.log(image);
     const {id} = useParams()
     const donations = useLoaderData()

     useEffect(() => {

        const findDonation = donations?.find(donation => donation.id === id)

        setDonation(findDonation)

        if(donation.image){
            console.log(donation.image);
            setLoading(false)
        }
    }, [id, donations, donation])
    console.log(donation);
    const handelDonate = ()=>{
        Swal.fire({
            title: "Donation Success",
            text: "You clicked the button!",
            icon: "success"
          });
          
    }
    console.log(donation.image);
    if(loading){
        return <div>Loading...</div>
    }

    return (
        
          <div className="flex justify-center">
            <div className="relative w-[1320px] h-[300px]">
                {/* <img className=" w-[1320px] h-[300px]" src="../../public/Rectangle 4281.png" alt="" /> */}

                {
                   donation?.image &&<img className=" w-[1320px] h-[300px]" src={donation?.image} alt="Image Find" /> 
                }                
                <div className=" w-[1320px] h-[70px] mt-[-70px] bg-[#0B0B0B] bg-opacity-70 absolute flex items-center">

                    <button onClick={handelDonate} style={{backgroundColor: text_color}}  className="ml-5  py-1 px-2 rounded-sm text-white ">Donate {price}</button>
                </div>
                <h1 className=" text-4xl font-bold mt-10">{title}</h1>
                <p className=" mt-6">{description}</p>
            </div>
          </div>
           
           
        
        
       
    );
    };

export default Details;