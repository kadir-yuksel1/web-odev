import { FaGithub } from "react-icons/fa";
import boy from "../../../../public/boy.png"

function Footer() {
  return (
    <div className="flex items-center justify-around flex-col w-[100%] bg-blue-500 text-white h-50 font-bold">
      <div className="flex items-center justify-around flex-row w-[100%] ">
        <div className="w-30 h-30">
            <img src={boy} alt=""/>
        </div>
        <div className="flex flex-col items-center justify-center  hover:text-gray-300 transition-all duration-500 ease-in">
          <div>Kadir Yüksel</div>
          <div>2211012017</div>
          <div>Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği</div>
        </div>
        <div className="hover:text-gray-300 transition-all duration-500 ease-in flex items-center flex-col gap-2">
          <div>
            <FaGithub className="cursor-pointer" />
          </div>
          <div className="cursor-pointer transform transition-transform duration-300 hover:scale-110">Github Repoya Git</div>
        </div>
      </div>
      <div className="items-center hover:underline hover:text-gray-300 transition-all duration-500 ease-in">
        2025 &#169; Tüm Hakları Gizlidir.
      </div>
    </div>
  )
}

export default Footer
