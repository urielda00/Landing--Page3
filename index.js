let refresh= document.getElementById('logo');
    let reload=function(){
      window.location.reload()};
    refresh.onclick=reload;


    //popup Message:
    let popup= document.getElementById('popup')
   function openPopup(){
      popup.classList.add('open-popup')
    }
    function closePopup(){
      popup.classList.remove('open-popup')
    }