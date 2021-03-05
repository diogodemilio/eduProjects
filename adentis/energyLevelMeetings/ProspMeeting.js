import Accordion from '../Accordion'
import React from 'react'

const ProspMeeting = ({ ProspMeetingsData }) => {
  //console.log({ ProspMeetingsData });
  return (
    <div>
      <Accordion MeetingsData={ProspMeetingsData} MeetingType="Reuniões de Prospeção" />
    </div>
  )
}

export default ProspMeeting