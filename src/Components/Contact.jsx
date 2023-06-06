import React from 'react'

const Contact = () => {
  return (
    <div className="Contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label> Name</label>
                    <input type="text" required placeholder='Adarsh' />
                </div>
                <div>
                    <label> Email</label>
                    <input type="email" required placeholder='Adarsh@gmail.com' />
                </div>
                <div>
                    <label> Message </label>
                    <input type="text" required placeholder='Helloo! tell us about ur query ' />
                </div>
                <button type='submit'>send</button>
                
            </form>
        </main>
    </div>
  )
}

export default Contact
