
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher)

  console.log(heroes)

  return (
    <>
      <h1>Hero List</h1>
      <div className='card-columns row'>
        {
          heroes.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))
        }
      </div>
    </>
  )
}
