import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import EducationPage from "../pages/EducationPage"
import AboutPage from "../pages/AboutPage"

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div >
    )
}

export default RouterConfig
