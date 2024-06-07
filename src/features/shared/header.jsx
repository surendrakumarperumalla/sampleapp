import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">EDUPOLY</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/todolist">TODOLIST</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/counter">COUNTER</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/country">COUNTRIES</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/product">PRODUCTS</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/posts">POSTS</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/addposts">ADDPOSTS</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header