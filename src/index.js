import ReactDOMClient from 'react-dom/client'
import { HeroesApp } from './HeroesApp'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render(<HeroesApp />)
