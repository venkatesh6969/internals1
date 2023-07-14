import React from 'react';
import '../Styles.css';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className=''>
      <div className='backsty vh '>
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros'>
            <Carousel.Item className='car1 text-center'>
              <h3>"The food was amazing!"</h3>
              <br></br>
              <br></br>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
              <h3>"Ambience is great!"</h3>
              <br></br>
              <br></br>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <h3>"I truly felt like a god"</h3>
              <p>--being a customer--</p>
              <br></br>
              <br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid'>
          <div className='container-fluid col-6'>
            <div className='justify-content-center px-5 pb-5'>
            <nav aria-label='breadcrumb'>
  <ol className='breadcrumb'>
    <li className='breadcrumb-item'>
      <a href='/' style={{ color: 'white' }}>Home</a>
    </li>
    <li className='breadcrumb-item'>
      <a href='/products' style={{ color: 'white' }}>Products</a>
    </li>
    <li className='breadcrumb-item active' aria-current='page'>
      <span style={{ color: 'white' }}>Login</span>
    </li>
  </ol>
</nav>

              <form className='justify-content-center form'>
                <h2 className='maintext'>Foodies! Login...</h2>
                <br></br>
                <div>
                  <label htmlFor='email' className='labels'><h5>Email: </h5></label>
                  <input type='email' placeholder='Enter Email Address' className='form-control inputmade' name='Email' />
                </div>
                <br></br>
                <div>
                  <label htmlFor='password' className='labels'><h5>Password: </h5></label>
                  <input type='password' placeholder='Enter Password' className='form-control inputmade' name='Password'></input>
                </div>
                <br></br>
                <div>
                  <label htmlFor='checkbox' className='labels'> Remember Me:&ensp;</label>
                  <input type='checkbox' className='custom-control custom-checkbox'></input>
                </div>
                <br></br>
                <div className='d-grid px-3'>
                  <button className='btn btn-success' type='submit'>Login</button>
                </div>
              </form>
              <br></br>
            </div>
          </div>
          <div className='container-fluid col-6 px-5 pt-5'>
          <nav aria-label='breadcrumb'>
  <ol className='breadcrumb'>
    <li className='breadcrumb-item'><a href='/' style={{ color: 'white' }}>Home</a></li>
    
  </ol>
</nav>


            <h2 className='intro1'>King's Kitchen </h2>
            <br></br>
            <h3 className='intro2'>For all Your Culinary Desires..!</h3>
            <br></br>
            <div className='row'>
              <div className='col-4 rank'>
                Global Rank
              </div>
              <div className='col-4 rank'>
                Country Rank
              </div>
              <div className='col-4 rank'>
                Category Rank
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-4'>
                <h1 className='ranks'>#1</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#1</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#1</h1>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <footer>
          <h3 className='text-center text-secondary bg-dark foot'>Live for Culinary Delights</h3>
        </footer>
      </div>
    </div>
  );
}

export default Home;
