"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';
 
 const Hero = () => {

   const handleScroll = () => {


   }
   return (
     <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Find, reserve, or hire a car fast and effortlessly! 
            </h1>

            <p className='hero__subtitle'>
            With our simple and effortless booking process, you can streamline your automobile car rental experience.
            </p>

            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white
                rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero2.png" alt="hero"
                fill className='object-contain'/>
                </div>

                    <div className='hero__image-overlay' />
            </div>
        
    </div>
     
   )
 }
 
 export default Hero