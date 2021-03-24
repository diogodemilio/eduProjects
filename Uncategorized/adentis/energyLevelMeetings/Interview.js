import Accordion from '../Accordion'
import React from 'react'

const Interview = ({ InterviewsData }) => {
  console.log({ InterviewsData });
  return (
    <div>
      <Accordion MeetingsData={InterviewsData} MeetingType="Entrevista" />
    </div>
  )
}

export default Interview