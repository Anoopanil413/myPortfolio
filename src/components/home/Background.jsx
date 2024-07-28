import React from 'react'

import Edu_Card from '../Background/Edu_Card'
import Exp_Card from '../Background/Exp_Card'


const backgroundData = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Sree Buddha College Of Engineering',
                degree: 'B.tech',
                detail: "Bachelor's of technology in Mechanical Engineering",
                year: '2014-2018'
            },
            {
                id: 1,
                title: 'KKM Gov HSS',
                degree: 'HSSC, pre-university',
                detail: "Completed Science year 1 and 2",
                year: '2012-2014'
            }
        ]
    },
    {
        expCards: [

            {
                id: 1,
                title: 'Dignizant Technologies',
                role: 'MERN stack developer',
                desc: 'As a MERN stack developer, I delve into various aspects of web application development',
                year: '01/2024 - Present',
                location: 'Surat,Gujarat, India'
            },
            {
                id: 2,
                title: 'Brototype',
                role: 'intern',
                desc: 'As a MERN stack developer, I use Node, React, Next & JavaScript to build web applications.',
                year: '02/2022 - 11/2022',
                location: 'Trivandrum, India'
            },
            {
                id: 3,
                title: 'Junior Support Analyst',
                desc: 'As a Junior support analyst, indulge in resolving client issues',
                year: '02/2019 - 11/2021',
                location: 'Trivandrum, India'
            },



        ]
    }
]


const Background = () => {
    return (
        <>

            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10" id='myBackground'>
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>

                    {

                        backgroundData[0].eduCards?.map((data, key) => (

                            <Edu_Card key={key} data={data} />
                        ))
                    }


                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {
                            backgroundData[1].expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Background