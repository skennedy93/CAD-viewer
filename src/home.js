import './App.css';

function Home() {

  return (
<>
<div class="navbar">
  <div><img class="ame-image-1" src={window.location.origin + '/images/logo.png'}/></div>
</div>
<div class="view-container-home">
<div class="cad-buttons">
  <div class="row">
 <a href='/amrok'> <button type="button" class="button-basic"><img src={window.location.origin + '/images/amrok-logo.png'}/></button></a>
  <a href='/miteebite'><button type="button" class="button-basic"><img src={window.location.origin + '/images/mitee-Bite.webp'}/></button></a>
  <a href='/triag'><button type="button" class="button-basic"><img src={window.location.origin + '/images/triag.webp'}/></button></a>
  </div>
 <div class="row">
<a href='/fifthaxis'><button type="button" class="button-basic"><img src={window.location.origin + '/images/axis-vises.webp'}/></button></a>
<a href='/trinity'><button type="button" class="button-basic"><img src={window.location.origin + '/images/trinity.png'}/></button> </a>  
<a href='/schunk'><button type="button" class="button-basic"><img src={window.location.origin + '/images/schunk.webp'}/></button></a> 
 </div>

</div>
</div>
<div class="footer"><div class="footer-button">REQUEST CATALOGS OR MORE INFORMATION AT THE DESK</div></div>
</>
  );
}

export default Home;