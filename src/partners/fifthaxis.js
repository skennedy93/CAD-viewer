
function firstcad() {
    var linkone = ['https://www.ame.com/assets/052022-TrinityAutomation-Pyramid.11/052022-TrinityAutomation-Pyramid.11.html']
      document.getElementById('myIframe').src = linkone;
  }    
  function secondcad() {
    var linktwo = ['https://www.ame.com/assets/AMROK Subplate - Triag - Sample 1 - v2.15/AMROK Subplate - Triag - Sample 1 - v2.15.html']
    document.getElementById('myIframe').src = linktwo;
  }   
  function Fifthaxis() {
  
    return (
  <>
<div class="navbar">
  <div><img class="ame-image-1" src={window.location.origin + '/images/BOTR.png'}/></div>
  <div class="divider">|</div>
  <div><img class="ame-image-2" src={window.location.origin + '/images/TRIAG.png'}/></div>
</div>
  <div class="view-container">
  <div class="cad-buttons">
    <div class="row">
    <button type="button" class="button-basic" value="Pyramid" onClick={firstcad}><img src={window.location.origin + '/images/button-1.jpg'}/></button>
    <button type="button" class="button-basic" value="Subplate" onClick={secondcad}><img src={window.location.origin + '/images/button-2.jpg'}/></button>
    </div>
   <div class="row">
  <button type="button" class="button-basic" value="Pyramid" onClick={firstcad}><img src={window.location.origin + '/images/button-1.jpg'}/></button>
  <button type="button" class="button-basic" value="Subplate" onClick={secondcad}><img src={window.location.origin + '/images/button-2.jpg'}/></button>   
   </div>
  
  </div>
  <div class="iframe-viewer">
  <iframe id="myIframe" src="https://www.ame.com/assets/052022-TrinityAutomation-Pyramid.11/052022-TrinityAutomation-Pyramid.11.html" width="590" height="500" frameBorder="0" ></iframe>
  </div>
  </div>
  <div class="footer"><div class="footer-button">REQUEST CATALOGS OR MORE INFORMATION AT THE DESK</div></div>
  </>
    );
  }
  
  export default Fifthaxis;