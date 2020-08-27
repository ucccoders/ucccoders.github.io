$(function() {
  $('.nav-disappear').on('click', function(){ 

      
      if($('.navbar-toggler').css('display') !='none'){
          $('.navbar-toggler').trigger( "click" );
      }
  });
});


function renderProj(name, date, desc, image, linkbool, linkdest, linktext){
  let c = document.createElement('div');
  c.className = "col col-12 col-sm-6 col-lg-4 mb-4";

  let c1 = document.createElement('div');
  c1.className = "card shadow";
  c1.style = "margin: auto";

  let img = document.createElement('img');
  img.src = "/Projects Media/"+image;
  img.className = "card-img-top";

  c1.appendChild(img);

  let c2 = document.createElement('div');
  c2.className = "card-body";

  let title = document.createElement('h5');
  title.className = "card-title";
  title.textContent=name;

  let subtitle = document.createElement('h6');
  subtitle.textContent = date;

  let text = document.createElement('p');
  text.className="card-text";
  text.textContent=desc;

  let link = document.createElement('a');
  link.className="card-text";
  link.text = linktext
  link.href = linkdest

  c2.appendChild(title);
  c2.append(subtitle);
  c2.append(text);
  if(linkbool ==1){text.append(link);}

  c.appendChild(c1);
  c1.appendChild(c2);

  document.getElementById("project-list").append(c)

}

function renderProjOnIndex(name, date, desc, image, linkbool, linkdest, linktext){
  let c = document.createElement('div');
  c.className = "col col-12 col-sm-6 col-lg-4 mb-4";

  let c1 = document.createElement('div');
  c1.className = "card shadow";
  c1.style = "margin: auto";

  let img = document.createElement('img');
  img.src = "/Projects Media/"+image;
  img.className = "card-img-top";

  c1.appendChild(img);

  let c2 = document.createElement('div');
  c2.className = "card-body";

  let title = document.createElement('h5');
  title.className = "card-title";
  title.textContent=name;

  let subtitle = document.createElement('h6');
  subtitle.textContent = date;

  let text = document.createElement('p');
  text.className="card-text";
  text.textContent=desc;

  let link = document.createElement('a');
  link.className="card-text";
  link.text = linktext
  link.href = linkdest

  c2.appendChild(title);
  c2.append(subtitle);
  c2.append(text);
  if(linkbool ==1){text.append(link);}

  c.appendChild(c1);
  c1.appendChild(c2);

  document.getElementById("index-project-list").append(c)

}