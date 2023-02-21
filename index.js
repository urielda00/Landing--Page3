//Logo refresh the page:
   let refresh= document.getElementById('logo');
   let reload=function(){
   window.location.reload()
   };
   refresh.onclick=reload;


    //Popup thanks message:
    let popup= document.getElementById('popup')
    function openPopup(){
      popup.classList.add('open-popup')
    }
    function closePopup(){
      popup.classList.remove('open-popup')
    }