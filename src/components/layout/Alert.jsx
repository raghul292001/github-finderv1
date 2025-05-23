import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
    <p className="flex item-start mb-4 space-x-4 md:pl-64">
        {alert.type==='error' && (
                      <svg
                      fill='none'
                      viewBox='0 0 24 24'
                      className='w-6 h-6 stroke-current mr-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        stroke='#B91C1C'
                        d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                      ></path>
                    </svg>
        )}   
        <p className="flex-1 text-base font-semibold leading-7 text-red-500">
            <strong>{alert.msg}</strong>
            </p>     
    </p>

  )
}

export default Alert
