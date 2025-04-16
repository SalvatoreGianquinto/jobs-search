import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavouritesPage from "./components/FavouritesPage"
import Job from "./components/Job"
import CompanyDetails from "./components/companyDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/:company_name" element={<CompanyDetails />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
