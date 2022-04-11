import { Link } from 'react-router-dom'

const heroImages = require.context('../../assets/img/heroes', true)

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}) => {
  const imagePath = `./${id}.jpg`

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>

        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImages(imagePath)} className='card-img' alt={superhero} />
          </div>
          <div className='col-8'>

            <div className='card-body'>

              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>

              {
                                (alterEgo !== characters) &&
                                  <p className='text-muted'>{characters}</p>
                            }

              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                Más...
              </Link>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
