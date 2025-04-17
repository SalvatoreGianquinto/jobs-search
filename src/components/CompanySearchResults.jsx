import { useEffect } from "react"
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchResults } from "../redux/actions"

const CompanySearchResults = () => {
  const dispatch = useDispatch()
  const { company } = useParams()
  const jobs = useSelector((state) => {
    return state.search.jobs
  })

  const loading = useSelector((state) => {
    return state.search.loading
  })

  const error = useSelector((state) => {
    return state.search.error
  })
  useEffect(() => {
    dispatch(fetchSearchResults(company))
  }, [company, dispatch])

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {company}</h1>
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : jobs.length === 0 ? (
            <p>Nessun risultato trovato.</p>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
