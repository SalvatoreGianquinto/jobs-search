import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Le tue aziende preferite</h1>
      {favourites.length === 0 ? (
        <p>Non hai ancora aggiunto aziende ai preferiti.</p>
      ) : (
        <Row>
          {favourites.map((company, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="favourite-item d-flex justify-content-between align-items-center border p-3 rounded mb-3">
                <Link to={`/${company}`}>
                  <h3>{company}</h3>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: company,
                    })
                  }}
                >
                  ELIMINA
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex flex-column">
        <Link to="/favourites">Lista preferiti</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default FavouritesPage
