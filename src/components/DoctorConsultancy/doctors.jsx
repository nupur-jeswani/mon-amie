import React, { useEffect } from 'react';
import { db } from '../../firebase';
import { useState } from 'react';
import { collection, doc, getDocs, query } from "firebase/firestore";
import "./doctors.css";

export default function Doctors() {

    const [doctorsList, setDoctorsList] = useState([])
    // const [search, setSearch] = useState("");
    // const [currentDoctor, setCurrentDoctor] = useState({});
    // const [docDocument, setDocDocument] = useState({})

    // // const handleFilter = (e) => {
    // // 	setSearch(e.target.value);
    // // }

    // const handleDoctor = (doctor) => {
    //     setCurrentDoctor(doctor);
    // }

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
        <>
            <div className="row">
                <div className="col-md-3" style={{ backgroundColor: "black", color: "whitesmoke" }}>
                    <div className='m-5'>
                        <h5 className='underline'>List of Doctors - </h5>
                        <ul>
                            {
                                doctorsList.map(doc => {
                                    return (
                                        <>
                                            <li key={doc.id} className="p-1"><a href="#doc.id"></a>{doc["name"]}</li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-md-9'>
                    {
                        doctorsList.map(doc => {
                            return (
                                <>
                                    <div className="container p-5" key={doc.id}>
                                        <h5>{doc["name"]}</h5>
                                        <p>Medical Registration Verification : {doc["MedicalRegistrationVerified"]}</p>
                                        <p>Domain of work : &nbsp;
                                            {
                                                doc["domain1"] ?
                                                    <>
                                                        {doc["domain1"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["domain2"] ?
                                                    <>
                                                        , {doc["domain2"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["domain3"] ?
                                                    <>
                                                        , {doc["domain3"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["domain4"] ?
                                                    <>
                                                        , {doc["domain4"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["domain5"] ?
                                                    <>
                                                        , {doc["domain5"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </p>
                                        <p>Education Detail (s) : &nbsp;
                                            {
                                                doc["education"] ?
                                                    <>
                                                        {doc["education"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification1"] ?
                                                    <>
                                                        {doc["educationalQualification1"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification2"] ?
                                                    <>
                                                        , {doc["educationalQualification2"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification3"] ?
                                                    <>
                                                        , {doc["educationalQualification3"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification4"] ?
                                                    <>
                                                        , {doc["educationalQualification4"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification5"] ?
                                                    <>
                                                        , {doc["educationalQualification5"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                doc["educationalQualification6"] ?
                                                    <>
                                                        , {doc["educationalQualification6"]}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </p>
                                        <p>Rating given to the doctor by people : {doc["rating"]}</p>
                                        <p>Experience (in years) : {doc["experience"]}</p>
                                        <p>Fees : {doc["fees"]}</p>
                                        <p>Country : {doc["country"]}</p>
                                        <p>State : {doc["state"]}</p>
                                        <p>City : {doc["city"]}</p>
                                        <p>Address : {doc["address"]}</p>
                                        <p>Offline Appointments option : {doc["offline"]}</p>
                                        <p>Online Appointments option : {doc["online"]}</p>
                                    </div>
                                    <hr />

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
