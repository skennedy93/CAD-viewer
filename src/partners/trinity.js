import $ from "jquery";

function firstcad() {
    var linkone = ['https://www.ame.com/assets/052022-TrinityAutomation-Pyramid.11/052022-TrinityAutomation-Pyramid.11.html']
      document.getElementById('myIframe').src = linkone;
      $(".menu").toggleClass("active");
      $(".menu2").removeClass("active");
      $(".menu3").removeClass("active");
      $(".button-container1").toggleClass("overlay1");
      $(".button-container2").addClass("overlay2");
      $(".button-container3").addClass("overlay3");
  }    
  function secondcad() {
    var linktwo = ['https://www.ame.com/assets/AMROK Subplate - Triag - Sample 1 - v2.15/AMROK Subplate - Triag - Sample 1 - v2.15.html']
    document.getElementById('myIframe').src = linktwo;
    $(".menu2").toggleClass("active");
    $(".menu").removeClass("active");
    $(".menu3").removeClass("active");
    $(".button-container2").toggleClass("overlay2");
    $(".button-container1").addClass("overlay1");
    $(".button-container3").addClass("overlay3");
  }   
  function thirdcad() {
    var linkthree = ['https://www.ame.com/assets/AMROK Subplate - Triag - Sample 1 - v2.15/AMROK Subplate - Triag - Sample 1 - v2.15.html']
    document.getElementById('myIframe').src = linkthree;
    $(".menu3").toggleClass("active");
    $(".menu").removeClass("active");
    $(".menu2").removeClass("active");
    $(".button-container3").toggleClass("overlay3");
    $(".button-container1").addClass("overlay1");
    $(".button-container2").addClass("overlay2");
  }   
  function Trinity() {
  
    return (
  <>
<div class="navbar">
<div><img class="ame-image-1" src={window.location.origin + '/images/BOTR.png'}/></div>
  <div class="divider">|</div>
  <div><img class="amrok" src={window.location.origin + '/images/trinity-white.svg'}/></div>
</div>
  <div class="view-container">

  <div class="cad-buttons">
    <div class="button-container1 overlay1"><button type="button" class="button-basic" value="Pyramid" onClick={firstcad}><img src={window.location.origin + '/images/button-1.jpg'}/></button></div><div class="menu">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
    <div class="button-container2 overlay2"><button type="button" class="button-basic" value="Subplate" onClick={secondcad}><img src={window.location.origin + '/images/button-2.jpg'}/></button></div><div class="menu2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
    <div class="button-container3 overlay3"><button type="button" class="button-basic" value="Pyramid" onClick={thirdcad}><img src={window.location.origin + '/images/button-1.jpg'}/></button></div> <div class="menu3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
  </div>
  <div class="iframe-viewer">
  <iframe id="myIframe" src="https://www.ame.com/assets/052022-TrinityAutomation-Pyramid.11/052022-TrinityAutomation-Pyramid.11.html" width="520" height="520" frameBorder="0" ></iframe>
  </div>
  </div>
  <div class="footer"><div class="footer-button">REQUEST CATALOGS OR MORE INFORMATION AT THE DESK</div></div>
  </>
    );
  }
  
  export default Trinity;