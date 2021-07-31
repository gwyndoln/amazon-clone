import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='amazon banner'
      />
      <div className='home__row'>
        <Product
          id='12321341'
          title='Samsung Notebook 9 Pro 13.3" Touch-Screen - i7-7500U - 8GB - 128GB SSD - Silver - Spen'
          price={649.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/612BDaT9PaL._AC_SL1000_.jpg'
        />
        <Product
          id='12321342'
          title='Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard'
          price={29.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321343'
          title='Wilson Traditional Soccer Ball'
          price={11.96}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61jU4o9laBL._SY355_.jpg'
        />
        <Product
          id='12321344'
          title='The Adventure Zone: The Crystal Kingdom (The Adventure Zone, 4) Paperback – July 13, 2021'
          price={12.99}
          rating={5}
          image='https://m.media-amazon.com/images/P/B097L5H9L6.01._SCLZZZZZZZ_SX500_.jpg'
        />
        <Product
          id='12321345'
          title="Troadlop Men's Running Shoes Non Slip Shoes Breathable Lightweight Sneakers Slip Resistant Athletic Sports Walking Gym Work Shoes"
          price={25.43}
          rating={3}
          image='https://m.media-amazon.com/images/I/61jDDGLGj5L._AC_UL1080_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321346'
          title='SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV'
          price={497.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg'
        />
      </div>
    </div>
  )
}

export default Home