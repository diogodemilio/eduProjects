import Accordion from '../Accordion'

import React from 'react'

const PdsMeeting = ({ PdsMeetingsData }) => {
  console.log({ PdsMeetingsData });
  return (
    <div>
      <Accordion MeetingsData={PdsMeetingsData} MeetingType="Reuniões Ponto de Situação" />
    </div>
  )
}

export default PdsMeeting