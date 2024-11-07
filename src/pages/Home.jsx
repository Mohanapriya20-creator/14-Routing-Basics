import { Link, useNavigate } from "react-router-dom"



export default function Home() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/product")
    }
    return <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        {/* the <Link> component is used to navigate between routes without reloading the page. */}
        <p >Click here to navigate to <Link to="/product">Products</Link> Section</p>
        {/* <p >Click here to navigate to <a href="/product">Products</a> Section</p> */}
        <button onClick={navigateHandler}>Navigate</button>
    </div>
}