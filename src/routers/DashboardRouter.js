import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={<MarvelScreen />} />
        <Route path='marvel' element={<MarvelScreen />} />
        <Route path='dc' element={<DcScreen />} />
        <Route path='search' element={<SearchScreen />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>

    </>
  )
}
