import React, { useState } from 'react'

function UserSummary(props) {
    const [showMore, setShowMore] = useState(false)

    //console.log(props)

    if (props.userData.length === 0)
        return (
            <div className="card">
                <h3>There is no user data</h3>
            </div>
        )
    else {
        if (showMore === true) {
            return (
                <div>
                    <br></br>
                    <h3>{props.userData.name.title} {props.userData.name.first} {props.userData.name.last}</h3>
                    <p><strong>Email:</strong> {props.userData.email}</p>
                    <button onClick={() => setShowMore(prevState => !prevState)}> Show Less </button>
                    <p><strong>Street:</strong>{props.userData.location.street.name} <strong>City :</strong>{props.userData.location.city} <strong>State :</strong> {props.userData.location.state}</p>
                    <p><strong>Username: </strong>{props.userData.login.username}</p>
                    <img src={props.userData.picture.large} alt="" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <br></br>
                    <h3>{props.userData.name.title} {props.userData.name.first} {props.userData.name.last}</h3>
                    <p><strong>Email:</strong> {props.userData.email}</p>
                    <button onClick={() => setShowMore(prevState => !prevState)}> Show More </button>
                </div>
            )
        }
    }
}

export default UserSummary