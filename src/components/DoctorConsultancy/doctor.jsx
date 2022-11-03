import React, { useEffect } from 'react';
import { db } from '../../firebase';
import { useState } from 'react';

export default function Doctor() {

    // States for doctors field
    const [medicalRegistrationVerified, setMedicalRegistrationVerified] = useState("")
    const [address, setAddress] = useState([])
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [domain, setDomain] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState("")
    const [fees, setFees] = useState("")
    const [name, setName] = useState("")
    const [offline, setOffline] = useState("")
    const [Online, setOnline] = useState("")
    const [rating, setRating] = useState("")
    const [state, setState] = useState("")

    return (
        <div>
            hi doctors


        </div>
    )
}
