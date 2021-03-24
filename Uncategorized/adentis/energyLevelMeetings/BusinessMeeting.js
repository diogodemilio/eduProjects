import Accordion from '../Accordion'
import React from 'react'

const BusinessMeeting = ({ BusinessMeetingsData }) => {
  //console.log({ QualifyMeetingsData });
  return (
    <div>
      <Accordion MeetingsData={BusinessMeetingsData} MeetingType="Reuniões de Negócio" />
    </div>
  )
}

export default BusinessMeeting

/*
//import React, { Component } from 'react'
import React, { useState } from "react";

const BusinessMeeting = () => {


        const[formValues, setFormValues] = useState({})

        const handleInputChange = (e) =>{
            const{name, value} = e.target
            setFormValues({...formValues, [name]: value})

        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target)
            const data = Object.formEntries(formData)

            console.log('*** handleSubmit', data)
        }

        console.log('*** formValues', formValues)
    return(
        <div className="card">
        <div className="card-header">
            <h5>Business Meeting</h5>
            <button type="submit">Create</button>
        </div>
        <div className="card-body">
            <form action="" className="container-fluid" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-12">
                        <input type="text" name="nameClient" placeholder="Nome Cliente" onChange={handleInputChange} value={formValues.nameClient || ''} />
                        <input type="text" name="nameConsultant" placeholder="Nome Consultor" onChange={handleInputChange} value={formValues.nameConsultant || ''} />
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )

}

export default BusinessMeeting
*/