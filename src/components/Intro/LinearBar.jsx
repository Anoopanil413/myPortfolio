import React from 'react'

const LinearBar = ({ title, percent, bgColor }) => {
    return (
        <div className="">
            <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-400">{title}</span>
                <span className="text-xs text-gray-400">{percent}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div className={`bg-green-500    h-2`} style={{ width: percent }}></div>
            </div>
        </div>
    )
}

export default LinearBar