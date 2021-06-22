import React, { Component } from 'react'
import JSONDATA from '../MOCK_DATA.json'
import './Search.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            Errormessage: "",
            Result: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        var x;
        return (
            <div className="Main">
                <div className="NavBar">
                    <Link to="/" className="Logout">Log out</Link>
                </div>
                <div className="position">
                    <div className="container h-100">
                        <div className="d-flex justify-content-center h-100">
                            <div className="searchbar">
                                <input className="search_input"
                                    type="text"
                                    name="searchQuery"
                                    value={this.state.searchQuery}
                                    placeholder="Search..."
                                    onChange={this.handleChange} />
                                <FaSearch className="search_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Grid-container">
                    {
                        this.state.Result = JSONDATA.filter((val) => {
                            if (val.first_name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                                val.last_name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                                (val.speciality.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                                )) {
                                return val
                            }
                        }).map((val, key) => {
                            if (val) {
                                return (
                                    <div className="card-position" key={key}>
                                        <div className="card-array">
                                            <p>Name : {val.first_name} {val.last_name}</p>
                                            <p className="special">Specility: {val.speciality}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
                {

                    this.state.Result.length === 0 ?
                        <div className="error">
                            Not Found
                        </div> : ""
                }
            </div>
        )
    }
}
