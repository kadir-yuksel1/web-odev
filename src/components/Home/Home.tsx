import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    return (

        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-5xl hover:text-gray-500 transition duration-1000 ease-in-out cursor-pointer">
                Welcome to My Blog
            </div>
            <div className="flex items-center justify-between w-50 m-5 ">
                <Button variant="contained" onClick={() => navigate("/about")} className="transform transition-transform duration-300 hover:scale-110">About</Button>
                <Button variant="contained" onClick={() => navigate("/contact")} className="transform transition-transform duration-300 hover:scale-110"> Contact</Button>
            </div>
        </div >

    )
}

export default Home
