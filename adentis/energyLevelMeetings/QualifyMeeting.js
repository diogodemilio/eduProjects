import Accordion from '../Accordion'
import React from 'react'

const QualifyMeeting = ({ QualifyMeetingsData }) => {
  //console.log({ QualifyMeetingsData });
  return (
    <div>
      <Accordion MeetingsData={QualifyMeetingsData} MeetingType="Reuniões de Qualificação" />
    </div>
  )
}

export default QualifyMeeting;

/*
import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import '../../../../css/EnergyLevelMeetingComponents.css';

export class QualifyMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            clientName: "",
            Position: "",
            MeetingDate: "",
            meetingList: []
        }
    }



    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    addMeeting() {
        // create item with unique ID
        const newMeeting = {
            id: 1 + Math.random(),
        }

        const list = [...this.state.meetingList];

        list.push(newMeeting);

        this.setState({
            list,
            clientName: "",
            Position: "",
            MeetingDate: ""
        });
    }

    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(meeting => meeting.id !== id);

        this.setState({ list: updatedList });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder='Nome do Cliente'
                    value={this.state.clientName}
                    onChange={e => this.updateInput("clientName", e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Nome Consultor'
                    value={this.state.consultantName}
                />
                <input
                    type="text"
                    placeholder='Posição'
                    value={this.state.position}
                />
                <input type="date" placeholder='Data da Reunião (mm/dd/aaaa)' ref={this.input} />
                <button
                    onClick={() => this.addMeeting()}
                >
                    Submeter
                    </button>
                <br />
                <ul>
                    {this.state.meetingList.map(meeting => {
                        return (
                            <li key={meeting.id}>
                                {meeting.value}
                                {console.log(meeting.value)}
                                <button
                                    onClick={() => this.deleteMeeting(meeting.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default QualifyMeeting;
*/