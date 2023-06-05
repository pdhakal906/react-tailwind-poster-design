import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faFaceSmile, faPlay, faFloppyDisk, faBookmark, faShareNodes, faBars } from '@fortawesome/free-solid-svg-icons';


const App = () => {



  return (
    <div>
      <div className='h-[720px] w-[400px] bg-[#221C26] justify-self-center m-auto mt-10'>
        <div className='bars text-[30px]'>
          <FontAwesomeIcon icon={faBars} color='red' />
        </div>
        <img src="assets/images/poster.jpg" className='w-[500px] h-[400px]' alt="" />
        <h1 className='text-[1.5rem] text-white font-bold px-3 mt-3'>To Kill A Mocking Bird</h1>
        <p className='text-[0.8rem] text-white px-3 mt-[-5px]'>PG-12 / 2h 49min / Drama, Mystery</p>
        <div className='grid grid-cols-2 px-3'>
          <p className='justify-self-start font-bold text-white my-3'>SUMMARY</p>
          <div className='justify-self-end mt-3'>
            <FontAwesomeIcon icon={faFaceSmile} color="red" />
            &nbsp;
            <span className='text-white'>124</span> &nbsp;
            <FontAwesomeIcon icon={faFaceMeh} color="red" /> &nbsp;
            <span className='text-white'>0</span>
          </div>
          <p className='text-[0.8rem] text-white col-span-2 text-justify'>In the Depression era, Atticus Finch, a lawyer, sets out to defend a black man, who is accused of raping a white woman. Meanwhile, his children, Scout and Jem, spy on their reclusive neighbour.</p>
          <p className='text-[0.9rem] text-white italic col-span-2 mt-3'>Gregory Peck, Mary Badham, Phillip Alord</p>


        </div>

        <div className='grid grid-cols-2 gap-30 p-3 my-3'>
          <div className='h-[30px] w-[170px] border-2 border-red-600 rounded-[5px] flex items-center bg-transparent my-1.5'><FontAwesomeIcon className='px-1' icon={faPlay} color="red" />

            <p className='font-bold text-red-600'>WATCH TRAILER</p>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <span className="text-[30px]">
              <FontAwesomeIcon className='px-1' icon={faFloppyDisk} color="red" />
            </span>
            <span className="text-[30px]">
              <FontAwesomeIcon className='px-1' icon={faBookmark} color="red" />
            </span>
            <span className="text-[30px]">
              <FontAwesomeIcon className='px-1' icon={faShareNodes} color="red" />
            </span>
          </div>

        </div>

      </div>


    </div>
  )
}

export default App
