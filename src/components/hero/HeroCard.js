import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}) => {
  const imagePath = `/assets/${id}.jpg`

  return (
    <div className='col-6 mb-3'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              alt={superhero}
              className='card-img'
              src={imagePath}
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h1>{superhero}</h1>
              <ul>
                <li>
                  <strong>Alter Ego:</strong> {alterEgo}
                </li>
                <li>
                  <strong>Publisher:</strong> {publisher}
                </li>
                <li>
                  <strong>First Appearance:</strong> {firstAppearance}
                </li>
                <li>
                  <strong>Characters:</strong> {characters}
                </li>
              </ul>
              <Link to={`/hero/${id}`} className='btn btn-primary'> View Details </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
