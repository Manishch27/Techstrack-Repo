import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Offers = () => {

    const [btnClicked, setBtnClicked] = useState(false);

   const clickBtn = ()=> setBtnClicked(!btnClicked)

  return (
    <div className={btnClicked?'hidden':'flex justify-around items-center h-16 font-mdSans bg-gradient-to-r dark:from-[#b92b27] dark:to-[#1565C0] from-[#b92c27d8] to-[#1565c0d2]  text-white'}>
        <h1>Haloween offer 25% off on all <Link to='plans' className='dark:bg-[#fff] bg-[#000] px-4 py-2 rounded-lg m-2 dark:text-black text-white font-bold cursor-pointer'>Plans</Link></h1>
        <button onClick={clickBtn}><i className="fa-solid fa-x font-bold"></i></button>
    </div>
  )
}

export default Offers;