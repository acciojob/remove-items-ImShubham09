//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
   let selectcolour = document.getElementById("colorSelect");
   let removeBtn= document.querySelector("input[type='button']");

   removeBtn.addEventListener("click",function(){
    let selectedindex = selectcolour.selectedIndex;

    if(selectedindex !== -1){
        selectcolour.options[selectedindex].remove();
    }
   });

});
