import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const CompanyDetails = () => {
  const { company_name } = useParams()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?company=${company_name}`
      )
      const data = await response.json()
      setJobs(data.data)
    }

    fetchCompanyJobs()
  }, [company_name])

  return (
    <div>
      <h1>Dettagli azienda: {company_name}</h1>

      {jobs.length > 0 ? (
        <>
          <h4>Descrizione (dal primo annuncio):</h4>
          <p>{jobs[0].description}</p>
        </>
      ) : (
        <p>Nessuna descrizione disponibile per questa azienda.</p>
      )}

      <div className="d-flex flex-column mt-4">
        <Link to="/favourites">Lista preferiti</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default CompanyDetails
