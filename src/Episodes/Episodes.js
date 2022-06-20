import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import React from "react";
import Moment from 'react-moment';
import './Episodes.css';

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/?name=${search}`)
            .then(response => response.json())
            .then((apiData) => {
                setEpisodes(apiData.results);
                setInfo(apiData.info);
            })
    }, [search])

    const nextPage = () => {
        fetch(info.next)
            .then(response => response.json())
            .then((apiData) => {
                setEpisodes(apiData.results);
                setInfo(apiData.info);
            })
    }

    const prevPage = () => {
        fetch(info.prev)
            .then(response => response.json())
            .then((apiData) => {
                setEpisodes(apiData.results);
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
                        <td><b>Code</b></td>
                        <td><b>Air Date</b></td>
                        <td><b>Created</b></td>
                    </tr>
                </thead>
                <tbody>
                    {episodes.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.episode}</td>
                            <td><Moment date={item.air_date} format="DD/MM/YYYY"/></td>
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

export default Episodes;