import React, { Component } from "react"
import axios from "axios"

import logo from "../assets/img/mylogo.png"
import Card from "../Components/Card"
import Nav from "../Components/Nav"
import Header from "../Components/Header"

class Albums extends Component {

    state = {
        albums: []
    }

    getAlbums = () => {
        axios('https://jsonplaceholder.typicode.com/albums').then(
            res => {
                this.setState({
                    albums: res.data
                })
            }
        )
    }

    displayAlbum = () => {
        this.state.albums.map(
            album => {
                return (
                    <div>
                        <Card title={album.title} poster={album.userId} path={logo} />
                    </div>
                )
            }
        )

    }


    render() {
        return (
            <div>

                <main>
                    <section>
                        <div className="container">
                            <button onClick={this.getAlbums} className="btn btn-outline-dark">Get All Albums</button>
                            <div className="row">
                                {
                                    this.state.albums.map(
                                        myalbum =>

                                            <Card title={myalbum.title} poster={myalbum.userId} path={logo} />
                                    )

                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Albums