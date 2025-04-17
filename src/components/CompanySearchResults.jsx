import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
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

  useEffect(() => {
    dispatch(fetchSearchResults(company))
  }, [company, dispatch])

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
