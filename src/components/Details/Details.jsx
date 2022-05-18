import "./Details.css"
import logo from '../../images/apple.webp'
import React from 'react'

function Details({ user }) {
  return (
    <section className="details-section">
      <nav className="details-nav" style={{gridArea:'nav'}}>
        <img src={logo} alt="" height={50} />
        <span style={{ textAlign: 'center', display: 'table-cell', lineHeight: '3rem' }}>{user}</span>
        <button>Logout</button>
      </nav>
      <aside className="details-sidebar" style={{gridArea:'sidebar'}}>
        Dashboard
      </aside>
      <form className="details-form" action="post" style={{gridArea:'form'}}>
        <div style={{textAlign:"left"}}>Add Employee</div>
        <hr />
        <div>Details for Appointment Letter</div>
        <hr />
        <div className="details-form-fields">

          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name='username' />
  
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name='password' />
        <span style={{gridColumn:'1 / span 2'}}><button type='submit'>Login now</button></span>
</div>
      </form>
    </section>
  )
}

export default Details