import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

const heroImages = require.context('../../assets/img/heroes', true)

export const HeroScreen = () => {
  const { heroId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  const handleReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' />
  }
  const {
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters
  } = hero

  const imagePath = `./${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          // src={imagePath} desde public/assets
          src={heroImages(imagePath)}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>

      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> {alterEgo} </li>
          <li className='list-group-item'> <b>Publisher:</b> {publisher} </li>
          <li className='list-group-item'> <b>First Appearance:</b> {firstAppearance} </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
