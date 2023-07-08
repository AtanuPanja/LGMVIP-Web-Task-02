import UserCard from "./UserCard"
import loader from '../assets/wheel-loader.png'

const DisplaySection = ({showLoader,userData}) => {
    console.log(userData)
    if(showLoader) {
        return (
        <div className="displaySection loadingDisplay">
            <div>
                <img src={loader} className="loader" alt="loader"/>
                <p className="loaderText">Please wait...</p>
            </div>
        </div>
        )
    }
    else {
        if(userData !== undefined && userData.length !== 0) {
            return (
                <div className="displaySection userDisplay">
                    {
                        userData.map(user => {
                        const details = {
                            firstName: user.first_name,
                            lastName: user.last_name,
                            email: user.email
                        }
                            return (
                                <UserCard id={"user"+user} image={user.avatar} details={details}/>
                            )
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div className="displaySection noDataDisplay">
                    <p>
                        {userData === undefined ?"Data not fetched yet": "Could not fetch users"}
                    </p>
                </div>
            )
        }
    }
}

export default DisplaySection