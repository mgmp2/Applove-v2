
  var workContainer = document.getElementById("work");
  var boxModal      = document.getElementById("modal")
window.addEventListener("load", function (e){
  e.preventDefault();
  createImages();
  crateModal();

});

function createImages(){
  for(var i=1; i<=12; i++ ){
    var div= document.createElement("div");
    div.setAttribute("class","box-work");
    var a = document.createElement("a");
    a.setAttribute("href","#img-"+i);
    var img= document.createElement("img");
    img.setAttribute("src","assets/img/img-"+i+".jpg");
    img.setAttribute("alt","Nuevo Proyecto");
    img.setAttribute("width","200");
    img.addEventListener("click", function (e){
      document.getElementById('body').classList.add("overflow-hidden");

    });
    var subt = document.createElement("h5");
    subt.setAttribute("class","mb-0 text-uppercase");
    var span= document.createTextNode(" Proyecto Nuevo");
    subt.appendChild(span);
    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(subt);
    workContainer.appendChild(div);
  }
}
function crateModal(){
  for(var i=1; i< workContainer.getElementsByTagName("img").length; i++ ){
    var divModal= document.createElement("div");
        divModal.setAttribute("class","modal");
        divModal.setAttribute("id","img-"+i);
    var cerrar  = document.createElement("a");
        cerrar.setAttribute("href"," ");
        cerrar.setAttribute("class","cerrar");
        cerrar.innerHTML = "X";
    cerrar.addEventListener("click", function(){
      document.getElementById('body').classList.remove("overflow-hidden");

    });
    var divImg = document.createElement("div");
        divImg.setAttribute("class","imagen");
    var back = document.createElement("a");
    var actual = document.createElement("a");
    var img = document.createElement("img");
        img.setAttribute("src","assets/img/img-"+i+".jpg");
        img.setAttribute("alt","Modal");
    var next = document.createElement("a");
        back.innerHTML = "&#60;";
        next.innerHTML = ">";

    if(i==1 ){
      back.setAttribute("href","#img-"+(12));
      actual.setAttribute("href","#img-"+(i+1));
      next.setAttribute("href", "#img-"+(i+1));
    }
    else if(i==12){
      back.setAttribute("href","#img-"+(i-1));
      actual.setAttribute("href","#img-"+(1));
      next.setAttribute("href", "#img-"+(1));
    }
    else{
      back.setAttribute("href","#img-"+(i-1));
      actual.setAttribute("href","#img-"+(i+1));
      next.setAttribute("href", "#img-"+(i+1));

    }

    actual.appendChild(img);
    divImg.appendChild(back);
    divImg.appendChild(actual);
    divImg.appendChild(next);
    divModal.appendChild(cerrar);
    divModal.appendChild(divImg);
    boxModal.appendChild(divModal);

  }};
