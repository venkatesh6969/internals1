import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abtbg-total'>
        <div className='abtbg vh'>
            <h1 className='org text-center'>We Strive for better Bites...</h1>
        </div><br></br><br></br><br></br>
        <h2 className='text-center vision'>Contact and About Us</h2>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Organisation Name</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          King's Kitchen
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Location & Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Abu Dhabi, Dubai
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          +971-800-3333
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          KingsKitchen@gmail.com
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>

        <div>
            <h2 className='text-center vision'>Our Vision</h2>
            <h4 className='text-center vision1 px-5'>To provide quality food to all our customers. Spread the knowledge and increase the flavours.</h4>
        </div><br></br><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>The mission of Culinary websites is to provide accessible and comprehensive Dietary resources.</h4>
        </div><br></br><br></br>

        
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Live For Culinary Delights</h3>
        </footer>
    </div>
  )
}

export default About