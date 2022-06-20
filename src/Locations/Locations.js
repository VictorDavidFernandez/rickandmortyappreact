import { useEffect, useState } from 'react';
import React from "react";
import Moment from 'react-moment';
import Search from '../Search/Search';
import './Locations.css';

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/?name=${search}`)
            .then(response => response.json())
            .then((apiData) => {
                setLocations(apiData.results);
                setInfo(apiData.info);
            })
    }, [search])

    const nextPage = () => {
        fetch(info.next)
            .then(response => response.json())
            .then((apiData) => {
                setLocations(apiData.results);
                setInfo(apiData.info);
            })
    }

    const prevPage = () => {
        fetch(info.prev)
            .then(response => response.json())
            .then((apiData) => {
                setLocations(apiData.results);
                setInfo(apiData.info);
            })
    }

    return <>

        <Search search={setSearch}></Search>

        <div className="buttons">
            <button onClick={prevPage}>Prev page</button>
            <button onClick={nextPage}>Next page</button>
        </div>
        <br />

        <div className="divTable">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Type</b></td>
                        <td><b>Dimension</b></td>
                        <td><b>Created</b></td>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.dimension}</td>
                            <td><Moment date={item.created} format="DD/MM/YYYY"/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        <br />
        <div className="buttons">
            <button onClick={prevPage}>Prev page</button>
            <button onClick={nextPage}>Next page</button>
        </div>
        <br />
    </>
};

export default Locations;