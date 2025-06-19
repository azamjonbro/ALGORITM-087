import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <nav>
       <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
       </ul>
      </nav>
    </div>
  )
}

export default Header
