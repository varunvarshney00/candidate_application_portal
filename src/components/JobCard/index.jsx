import React from 'react'
import dayjs from 'dayjs';

function JobCard() {
    const skills = ["Javascript", "React", "Nodejs"]
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2023-28-10','day')
  return (
    <div className='mx-40 mb-4'>
      <div className='flex justify-between item-center px-6 py-4 bg-white rounded-md border border-black shadow-lg hover:border-blue-500'>
        <div>
            <h1>Frontend developer</h1>
            <p>dfodfnfvkdnfvfnvkn</p>
            <div>
                {skills.map((skill) => {
                    <p>{skill}</p>
                })}
            </div>
        </div>
        <div>
                <p>Posted {diffInDays} ago</p>
                <button>apply</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard


