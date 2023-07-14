import React from 'react'
import '../Styles.css'

const Menu = () => {
  return (
    <div className='bg-dark vh'>
      <br></br>
      <h2 className='px-4 jamaica'>Food we offer... "For exquisite delight"</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col">
          <div className="card">
            <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Chicken Kebab</h5>
              <p className="card-text">
              n Turkey, shish kebab does not normally contain vegetables, though they may be cooked on a separate skewer. It can be prepared with lamb, beef, chicken, or fish, but pork is not used.</p>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Biryani</h5>
              <p className="card-text">Biryani, the Indian rice dish that is a National Passion. Although Indian cuisine is well-known internationally, there is a dish we didn't hear much about until the day we put our feet in India. This dish is called Biryani and we just loved it.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://www.completelycotswolds.com/wp-content/uploads/2022/04/LLP-CC-Spag-Bol-for-1-96dpi-6393.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Pasta Bolognese</h5>
              <p className="card-text">Italian ragù alla bolognese is a slowly cooked meat-based sauce, and its preparation involves several techniques, including sweating, sautéing and braising. Ingredients include a characteristic .</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Pizza Authentica</h5>
              <p className="card-text">Pizza Authentica, also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese. The tomatoes must be either San Marzano tomatoes or Pomodorino del Piennolo del Vesuvio, which grow on the volcanic plains to the south of Mount Vesuvius. </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/800px-Chicken_makhani.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Butter Chicken</h5>
              <p className="card-text">React JS is a popular JavaScript library for building user interfaces. It uses a component-based approach, allowing developers to create reusable UI elements that efficiently update and render only the necessary parts of the application, resulting in fast and responsive web experiences.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/souped_up_instant_ramen_69512_16x9.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Ramen</h5>
              <p className="card-text">Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles (or 中華麺, chūkamen) served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes.</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Live for Culinary Delights </h3>
        </footer>
    </div>
  );  
}

export default Menu;