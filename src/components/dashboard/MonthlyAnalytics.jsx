import React from 'react'
import { FaArrowDown, FaArrowUp, FaBoxOpen, FaLayerGroup, FaRProject } from "react-icons/fa";
import Badge from "../ui/badge/Badge";


const MonthlyAnalytics = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'>
        <div className='rounded-2xl border border-gray-200 bg-white p-5
        dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
            <div className='flex items-center justify-center w-12 h-12
            bg-gray-100 rounded-xl dark:bg-gray-800'>
                <FaLayerGroup className='text-gray-800 size-6 dark:text-white/90'/>
            </div>
        <div className='flex items-end justify-between mt-5'>
            <div>
                <span className='text-sm text-gray-800 text-title-sm dark:text-white/90'>
                    Active Loans
                </span>
                <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
                    3782
                </h4>
            </div>
            <Badge color='success'>
                <FaArrowUp/>
                10.01%
            </Badge>
        </div>
        </div>
        <div className='rounded-2xl border border-gray-200 bg-white p-5
        dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
            <div className='flex items-center justify-center w-12 h-12
            bg-gray-100 rounded-xl dark:bg-gray-800'>
                <FaBoxOpen className='text-gray-800 size-6 dark:text-white/90'/>
            </div>
            <div className='flex items-end justify-between mt-5'>
                <div>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                        Today Loans
                    </span>
                    <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
                        5,359
                    </h4>
                </div>
                <Badge color="error">
                    <FaArrowDown/>
                    9.05%
                </Badge>
            </div>
        </div>
        <div className='rounded-2xl border border-gray-200 bg-white p-5
        dark:border-gray-800 dark:bg-white/[0.03] md:p-6'>
            <div className='flex items-center justify-center w-12 h-12
            bg-gray-100 rounded-xl dark:bg-gray-800'>
                <FaLayerGroup className='text-gray-800 size-6 dark:text-white/90'/>
            </div>
        <div className='flex items-end justify-between mt-5'>
            <div>
                <span className='text-sm text-gray-800 text-title-sm dark:text-white/90'>
                    Today Collections
                </span>
                <h4 className='mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90'>
                    5874
                </h4>
            </div>
            <Badge color='success'>
                <FaArrowUp/>
                20.01%
            </Badge>
        </div>
        </div>
   </div>
  )
}

export default MonthlyAnalytics