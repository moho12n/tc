        import React from "react"

        class Header extends React.Component{
            render(){
                return(
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Welcome to our website</h1>
                        <button className="btn btn-outline-dark">See more</button>
                    </div>
                </section>
                )
            }
        }           

        export default Header