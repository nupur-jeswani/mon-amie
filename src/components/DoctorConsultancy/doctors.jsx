import React, { useEffect } from "react";
import { db } from "../../firebase";
import { useState } from "react";
import { collection, doc, getDocs, query } from "firebase/firestore";
import "./doctors.css";
import { FormControl, Container } from "react-bootstrap";
import "./doctors.css";
import backdrop from "./images/backdrop1.png";

export default function Doctors() {
  const [doctorsList, setDoctorsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      const q = query(collection(db, "Doctors"));
      const docSnap = await getDocs(q);

      let doctors = [];

      docSnap.forEach((doc) => {
        doctors.push(doc.data());
      });

      setDoctorsList(doctors);
    };

    getDetails();
  }, []);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <div className="container-fluid p-3">
            <Container>
              <figure className="position-relative">
                <img src={backdrop} alt="backdrop" className="img-fluid" />
              </figure>
              <figcaption>
                <h6 className="mb-4">
                  You can look for doctors in a particular city or you can
                  search for doctors according to their rating (from 0% to 100%)
                </h6>
                <FormControl
                  className="p-4 border border-dark rounded bg-light fw-bold text-center"
                  placeholder="Search for doctors"
                  aria-label="doctors domain"
                  aria-describedby="doctors domain"
                  value={search}
                  onChange={handleFilter}
                />
              </figcaption>
            </Container>

            <div className="container">
              {doctorsList
                .filter(
                  (doctor) =>
                    doctor["city"]
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    doctor["rating"]
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )
                .map((doc, id) =>
                  search ? (
                    <>
                      <div className="container p-5" key={doc.id}>
                        <h5><u>{doc["name"]}</u></h5>
                        <p>
                          Medical Registration Verification :{" "}
                          {doc["MedicalRegistrationVerified"]}
                        </p>
                        <p>
                          Domain of work : &nbsp;
                          {doc["domain1"] ? <>{doc["domain1"]}<br /></> : <></>}
                          {doc["domain2"] ? <>, {doc["domain2"]}</> : <></>}
                          {doc["domain3"] ? <>, {doc["domain3"]}</> : <></>}
                          {doc["domain4"] ? <>, {doc["domain4"]}</> : <></>}
                          {doc["domain5"] ? <>, {doc["domain5"]}</> : <></>}
                        </p>
                        <p>
                          Education Detail (s) : &nbsp;
                          {doc["education"] ? <>{doc["education"]}</> : <></>}
                          {doc["educationalQualification1"] ? (
                            <>{doc["educationalQualification1"]}</>
                          ) : (
                            <></>
                          )}
                          {doc["educationalQualification2"] ? (
                            <>, {doc["educationalQualification2"]}</>
                          ) : (
                            <></>
                          )}
                          {doc["educationalQualification3"] ? (
                            <>, {doc["educationalQualification3"]}</>
                          ) : (
                            <></>
                          )}
                          {doc["educationalQualification4"] ? (
                            <>, {doc["educationalQualification4"]}</>
                          ) : (
                            <></>
                          )}
                          {doc["educationalQualification5"] ? (
                            <>, {doc["educationalQualification5"]}</>
                          ) : (
                            <></>
                          )}
                          {doc["educationalQualification6"] ? (
                            <>, {doc["educationalQualification6"]}</>
                          ) : (
                            <></>
                          )}
                        </p>
                        <p>
                          Rating given to the doctor by people : {doc["rating"]}
                        </p>
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
                  ) : (
                    <></>
                  )
                )}
            </div>
          
          {doctorsList.map((doc) => {
            return <></>;
          })}
        </div>
      </div>
    </>
  );
}
