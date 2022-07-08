import React from "react"
import '../src/CSS/myStyles.css'
import logo1 from './image/main_page/1.jpg'


function Body() {
  return (
<div>
<section className="container-fluid">
    <div className="container main">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12">
            <h1>Bring people together with great food</h1>
        </div>
        <div classimName="col-sm-12 button">
            <button>Let's talk</button>
        </div>
        <div className="col-sm-12">
            <img src={ logo1 } alt="logo1" />
        </div>
        </div>
    </div>
</section>

<section id="second" className="container-fluid">
    <div className="second d-flex align-items-center justify-content-center py-4 row">
        <div className="col-sm-6 image">
            <img src="/images/main page/img-mjWRq1QRJatKaoK1.avif" alt="" />
        </div>
        <div className="col-sm-6 text">
            <h2>Delicious food creates memories</h2>
            <p>Belton is food studio that not just caters out deliciousness, but lives by the philosophy that nothing brings people together like good food. Whatever the occasion that you need our food for, whatever dietary requirements, we will make it happen.</p>
            <div>
            <button>Our story</button>
            </div>
        </div>
    </div>
</section>

<section className="container">
    <div className="three row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 text">
            <h3>Our offers for your occasion or event</h3>
        </div>
        <div className="col-sm-6">
            <h4>Mini pizzas</h4>
            <p>Delectable and bite-sized, mini pizzas are a favorite of all age groups.</p>
        </div>
        <div className="col-sm-6">
            <h4>Smoked Trout Empanadas</h4>
            <p>Every empanada is filled, made, and cooked by hand.</p>
        </div>
        <div className="col-sm-6">
            <h4>Homemade French Fries</h4>
            <p>Surprise your guests with the best gourmet french fries they've ever tasted.</p>
        </div>
        <div className="col-sm-6">
            <h4>Mini Lamb Burger</h4>
            <p>Although the flavors are slightly unusual, guests always go for seconds.</p>
        </div>
        <div className="col-sm-6">
            <h4>Stuffed Mushrooms</h4>
            <p>A kitchen classic, this is the perfect choice if you've vegans in your party.</p>
        </div>
        <div className="col-sm-6">
            <h4>Duck Confit Quesadillas</h4>
            <p>Sophistication and flavor come together in this perfectly cheesy quesadilla.</p>
        </div>
        <div className="col-sm-12 image">
            <img src="/images/main page/sliced-avocado-fruit-and-green-vegetable-on-white-chopping-dO2Q8OOvQXs8rJNo.avif" alt="" />
        </div>
        
    </div>
   
</section>

<section id="section-4" className="container-fluid">
    <div className="section-4 d-flex align-items-center justify-content-center py-4 row">
        <div className="col-sm-4 text">
            <h5>Our services</h5>
            <p>Here at Belton, we pride ourselves from never turning down a client. That means whatever your occasion is, no matter how many guests you’re trying to feed, and no matter how restricted your diet, we will be happy to serve you delicious food.</p><div>
                <button>See all services</button>
            </div>
        </div>
        <div className="col-sm-4 image">
            <img src="/images/main page/nathalie-jolie-unsplash-mjWRq1rKNNHKXVZK.avif" alt="" />
        </div>
    </div>
</section>

<section className="container-fluid section-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="card ">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="/images/main page/image-YN8wPa19X3c8kZJq.avif" alt="women" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Belton went above and beyond when catering our wedding at a highly unusual location. They were meticulous in every stage: the planning, the preparation, and the execution. Our guests couldn't stop raving about all the delicious hors-d'oeuvres.</p>
                            <h5 className="card-title">Heather C.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-sm-12">
                <div className="card ">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="/images/main page/image-mxkJM6LlPKSV6JV2.avif" alt="women" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">My grandmother's 90th birthday party was made special by Belton - thank you ever so much. The team took into consideration all of our food allergy requirements and ensured that no detail was overlooked. Delicious food that I highly recommend!</p>
                            <h5 className="card-title">Nathalie G.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
</div>

</section>

<section className="container-fluid section-6">
    <div className="info-text">
        <h5>First, we eat. Then we do everything else. Let us take care of food at your special event.</h5>
        <div>
        <button>Get in touch</button>
         </div>
    </div>
</section>
</div> 

)
}

export default Body;




