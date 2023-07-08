const UserCard = ({id,image,details:{firstName,lastName,email}}) => {
    return (
        <div className="userCard" id={id}>
        <img className="userImg" src={image} alt={id}/>
        <div className="userDetails">
            <p>Name: {firstName+" "+lastName}</p>
            <p>Email: {email}</p>
        </div>
        </div>
    )
}
export default UserCard