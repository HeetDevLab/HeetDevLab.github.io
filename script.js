document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("menuBtn"), links=document.getElementById("navLinks"), backdrop=document.getElementById("menuBackdrop");
  const close=()=>{links.classList.remove("active");backdrop.classList.remove("active");btn.setAttribute("aria-expanded","false")};
  btn?.addEventListener("click",()=>{const open=links.classList.toggle("active");backdrop.classList.toggle("active",open);btn.setAttribute("aria-expanded",open)});
  backdrop?.addEventListener("click",close);
  links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
});
if(typeof particlesJS!=="undefined"){
  particlesJS("particles-js",{particles:{number:{value:45,density:{enable:true,value_area:900}},color:{value:"#1477ff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5},line_linked:{enable:true,distance:155,color:"#1477ff",opacity:.22,width:1},move:{enable:true,speed:.7}},interactivity:{events:{onhover:{enable:true,mode:"grab"}}}});
}
