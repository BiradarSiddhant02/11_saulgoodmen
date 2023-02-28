import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { createCampaign } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: 'Potato',
    title: '1',
    description: 'heh',
    target: '20000', 
    deadline: '22/2/2023',
    image: "https://via.placeholder.com/300/09f/fff.png"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await createCampaign({ ...form,target: ethers.utils.parseUnits(form.target, 3)})
    setIsLoading(false);
    //navigate('/');
  }
  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>   

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Make a transaction
            </p>
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              pay : 10000
            </p>
            <div className="mt-[30px]">
            
              <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">

                <CustomButton 
                  btnType="submit"
                  title="Make a deal"
                  styles="w-full bg-[#8c6dfd]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails