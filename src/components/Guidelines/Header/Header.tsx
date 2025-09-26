import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Switch } from "@mui/material";

function Header() {

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between w-[100%] h-20 bg-blue-500 text-white">
      <div className="flex items-center justify-around p-5 gap-5 ml-10  hover:cursor-pointer">
        <FaArrowLeft onClick={() => navigate(-1)} className="transform transition-transform duration-300 hover:scale-110" />
        <FaArrowRight onClick={() => navigate(+1)} className="transform transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex items-center justify-around  hover:[&_div]:cursor-pointer gap-10 p-5
  font-bold ">
        <div className="hover:underline hover:text-yellow-200 transition-all duration-300 ease-in hover:scale-110" onClick={() => navigate("/")}>Home</div>
        <div className="hover:underline hover:text-yellow-200 transition-all duration-300 ease-in hover:scale-110" onClick={() => navigate("/about")}>About</div>
        <div className="hover:underline hover:text-yellow-200 transition-all duration-300 ease-in hover:scale-110" onClick={() => navigate("/education")}>Education</div>
        <div className="hover:underline hover:text-yellow-200 transition-all duration-300 ease-in hover:scale-110" onClick={() => navigate("/contact")}>Contact</div>
      </div>
      <div className="mr-10">
        <Switch />
      </div>
    </div>
  )
}

export default Header
