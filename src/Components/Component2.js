function Component2(){
    const myObj = {
                    name: "kumara",
                    age: 20,
                    city: "Galgamuwa"
                    }
    return(
        <>
            <h2>Component 02</h2>
            {myObj.name}<br/>
            {myObj.age}<br/>
            {myObj.city}
        </>
    );
}
export default Component2;