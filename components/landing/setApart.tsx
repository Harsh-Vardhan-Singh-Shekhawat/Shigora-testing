import React from 'react'
import {BsFillHandIndexThumbFill} from 'react-icons/bs';
 
const setApartArray = [
    {
        id:1,
        title:' Fast Turnaround Time ',
        description:' We cordially track the deadlines and make our quality tangible, while executing finance projects well ahead of time.'
    },
    {
        id:2,
        title:' Confidentiality ',
        description:' We comply with the highest professional confidentiality standards. All client information is discussed in strict confidentiality.'
    },
    {
        id:3,
        title:' Best Rate of Interest ',
        description:' We find you the right lenders with the similar terms and the lowest rate of interest.'
    },
    {
        id:4,
        title:' Hassle-free Processing ',
        description:' We create a stable ownership structure for financiers by establishing a secure transaction process.'
    },
    {
        id:5,
        title:' High Level of Integrity ',
        description:' We are building our reputation through reliability, integrity, and honesty. We connect to our clients on personal grounds that include transparency and liability.'
    },
    {
        id:6,
        title:' Transparent Process ',
        description:' Investment Banking firm is full of Terms & Conditions which come with a lack of transparency. But, at Terkar capital we lay down a very transparent process right from the start.'
    },

]

const setApart = () => {
  return (
    <div className='text-center p-3'>
      <h1 className='text-[30px] font-bold p-10'>What sets us Apart?</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 '>
        {setApartArray.map((data) => (
            <div className='text-left p-4 shadow-lg bg-white flex '>
                <div>
                <BsFillHandIndexThumbFill className="rotate-90 text-xl " />
                    </div>
                <div className=''>
                    <h1 className='text-[18px] font-semibold'>{data.title}</h1>
                    <p className='text-[#7A7A71]'>
                        {data.description}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default setApart
