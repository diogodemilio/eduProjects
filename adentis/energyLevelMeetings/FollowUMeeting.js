import Accordion from '../Accordion'
import React from 'react'
import { ProspMeeting } from './EnergyLevelMeetingComponents';

const FollowUMeeting = ({ FollowUpMeetingsData }) => {
  console.log({ FollowUpMeetingsData });
  return (
    <div>
      <Accordion MeetingsData={FollowUpMeetingsData} MeetingType="Reuniões de Acompanhamento" />
    </div>
  )
}

export default FollowUMeeting;