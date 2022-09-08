import './App.css';

function Home() {

  return (
<>
<div class="navbar">
  <div><img class="ame-image-1" src={window.location.origin + '/images/logo.png'}/></div>
</div>
<div class="view-container-home">
<div class="cad-buttons-home">
  <div class="row">
 <a href='/amrok'> <button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/amrok-logo.svg'}/></button></a>
  <a href='/miteebite'><button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/miteebite-logo.svg'}/></button></a>
  <a href='/triag'><button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/triag-logo.svg'}/></button></a>
  </div>
 <div class="row">
<a href='/fifthaxis'><button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/fifth-axis-logo.svg'}/></button></a>
<a href='/trinity'><button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/trinity-logo.svg'}/></button> </a>  
<a href='/schunk'><button type="button" class="button-basic"><img class="home-images" src={window.location.origin + '/images/schunk-logo.svg'}/></button></a> 
 </div>

</div>
</div>
<div class="footer"><div class="footer-button">REQUEST CATALOGS OR MORE INFORMATION AT THE DESK</div></div>
</>
  );
}

export default Home;