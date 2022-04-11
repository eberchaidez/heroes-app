import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { useMemo } from 'react'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const searchText = formValues.searchText

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(searchText)
    navigate('?q=' + searchText)
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              className='form-control'
              placeholder='Buscar'
              name='searchText'
              autoComplete='off'
              onChange={handleInputChange}
              value={searchText}
            />
            <button
              type='submit'
              className='btn btn-primary mt-1'
            >
              Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {
            (q === '')

              ? <div className='alert alert-info'>Busca un super héroe </div>

              : (heroesFiltered.length === 0) &&
                <div className='alert alert-danger'>No hay resultados " {q} " </div>

          }

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
