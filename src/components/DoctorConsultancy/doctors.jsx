import React, { useEffect } from 'react';
import { db } from '../../firebase';
import { useState } from 'react';
import { collection, getDocs, query } from "firebase/firestore";

export default function Doctors() {

    // States for doctors field
    // const [medicalRegistrationVerified, setMedicalRegistrationVerified] = useState("")
    // const [address, setAddress] = useState([])
    // const [city, setCity] = useState("")
    // const [country, setCountry] = useState("")
    // const [domain, setDomain] = useState([])
    // const [education, setEducation] = useState([])
    // const [experience, setExperience] = useState("")
    // const [fees, setFees] = useState("")
    // const [name, setName] = useState("")
    // const [offline, setOffline] = useState("")
    // const [Online, setOnline] = useState("")
    // const [rating, setRating] = useState("")
    // const [state, setState] = useState("")

    const [doctorsList, setDoctorsList] = useState([])
    const [search, setSearch] = useState("");
    const [currentDoctor, setCurrentDoctor] = useState({});

    const handleFilter = (e) => {
		setSearch(e.target.value);
	}

    const handleUniversity = (doctor) => {
		setCurrentDoctor(doctor);
	}

    useEffect(() => {
		const getDetails = async () => {
			const q = collection(db, "Doctors");
			const docSnap = await getDocs(q);

			let doctors = [];

			docSnap.forEach((doc) => {
				doctors.push(doc.data());
			});

			setDoctorsList(doctors);
		}

		getDetails();
	}, []);

    return (
        <div>
            hi doctors
        </div>
    )
}
