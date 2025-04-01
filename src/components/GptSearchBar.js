import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  
    const langKey = useSelector((store) => store?.config?.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='items-center bg-black justify-center w-1/2 p-3 grid grid-cols-12'>
            <input type='text' className='px-2 py-3 bg-white mr-2 rounded-md col-span-10' placeholder={lang[langKey]?.gtpSearchPlaceholder} />
            <button className='py-3 px-4 bg-red-700 text-white rounded-md col-span-2'>{lang[langKey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar