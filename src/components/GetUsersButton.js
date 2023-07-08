const GetUsersButton = ({btnText,setShowLoader,setUserData}) => {

    const baseUrl = 'https://reqres.in/api/users?page=1'; // the api link was provided in the problem statement
    function handleClick() {
      setShowLoader(true)
      setTimeout(() => {
        fetch(baseUrl)
        .then(
          response => response.json()
        ).then(
          response => {
            setShowLoader(false)
            setUserData(response.data)
          }
        ).catch(
          err => {
            setShowLoader(false)
            setUserData([])
            console.log(err)
          }
        )
      }, 1500); 
      // This setTimeout is optional. Here, the data is fetched faster the loader, so the loader wouldn't be visible. So, to explicitly show it for 1.5s, this setTimeout is added.
    }
  
    return (
      <button className="getUsersBtn" onClick={handleClick}>
        {btnText}
      </button>
    )
}

export default GetUsersButton