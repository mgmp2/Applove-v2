
  var workContainer = document.getElementById("work");
  var boxModal      = document.getElementById("modal");
  var nameProyect = ["taiman group", "nalia organics", "brass coq", "disk", "mitragyna speciosa", "foam king",
                    "voltion","disk ink","expanding learning","owls & apples","music","platinum"];
  var y=0;
  if(!localStorage.getItem('posicionY')){
    localStorage.setItem('posicionY',JSON.stringify(y));
    y = JSON.parse(localStorage.getItem('posicionY'));
  }
  else{
    y = JSON.parse(localStorage.getItem('posicionY'));
  };

window.addEventListener("load", function (e){
  e.preventDefault();
  createImages();
  crateModal();
  window.scrollBy(0,JSON.parse(localStorage.getItem('posicionY')));
});

function createImages(){
  for(var i=1; i<=12; i++ ){
    var div= document.createElement("div");
    div.setAttribute("class","box-work");
    var a = document.createElement("a");
    a.setAttribute("href","#img-"+i);
    var img= document.createElement("img");
    img.setAttribute("src","assets/img/img-"+i+".jpg");
    img.setAttribute("alt",nameProyect[i-1]);
    img.setAttribute("width","200");
    img.addEventListener("click", function (e){
      document.getElementById('body').classList.add("overflow-hidden");
      y = window.pageYOffset;
      localStorage.setItem('posicionY',JSON.stringify(y));
      console.log(localStorage);
    });
    var subt = document.createElement("h5");
    subt.setAttribute("class","mb-0 text-uppercase");
    var span= document.createTextNode(nameProyect[i-1]);
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
    var close  = document.createElement("a");
        close.setAttribute("href","");
        close.setAttribute("class","close");
        close.innerHTML = "X";
    close.addEventListener("onmousedown", function(){
      document.getElementById('body').classList.remove("overflow-hidden");
    });
    var divImg = document.createElement("div");
        divImg.setAttribute("class","imagen");
    var back = document.createElement("a");
    var actual = document.createElement("a");
    var img = document.createElement("img");
        img.setAttribute("src","assets/img/img-"+i+".jpg");
        img.setAttribute("alt",nameProyect[i-1]);
    var next = document.createElement("a");
        back.innerHTML = "&#60;";
        next.innerHTML = ">";

    if(i==1){
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
    divModal.appendChild(close);
    divModal.appendChild(divImg);
    boxModal.appendChild(divModal);

  }};
