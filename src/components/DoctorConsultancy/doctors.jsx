import React, { useEffect } from 'react';
import { db } from '../../firebase';
import { useState } from 'react';
import { collection, doc, getDocs, query } from "firebase/firestore";
import "./doctors.css";

export default function Doctors() {


    const [doctorsList, setDoctorsList] = useState([])
    // const [search, setSearch] = useState("");
    const [currentDoctor, setCurrentDoctor] = useState({});
    const [docDocument, setDocDocument] = useState({})

    // const handleFilter = (e) => {
    // 	setSearch(e.target.value);
    // }

    const handleDoctor = (doctor) => {
    	setCurrentDoctor(doctor);
    }

    useEffect(() => {
        const getDetails = async () => {
            const q = query(collection(db, "Doctors"));
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
            {
                doctorsList.map(doc => {
                    return (
                        <>
                            <div className="container" key={doc.id}>
                                <h5>{doc["name"]}</h5>
                                <p>Medical Registration Verification : {doc["MedicalRegistrationVerified"]}</p>
                                <p>Domain of work : {doc["domain1"]}, {doc["domain2"]}
                                </p>
                                {/* <p>Education Detail (s) :
                                   
                                </p> */}
                                <p>Rating given to the doctor by people : {doc["rating"]}</p>
                                <p>Experience (in years) : {doc["experience"]}</p>
                                <p>Fees : {doc["fees"]}</p>
                                <p>Country : {doc["country"]}</p>
                                <p>State : {doc["state"]}</p>
                                <p>City : {doc["city"]}</p>
                                {/* <p>Address :
                                    
                                </p> */}
                                <p>Offline Appointments option : {doc["offline"]}</p>
                                <p>Online Appointments option : {doc["online"]}</p>
                            </div>
                            <hr />
                            
                        </>
                    )
                })
            }
        </div>
    )
}
