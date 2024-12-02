import{i as y,S as g}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.querySelector(".container"),b=document.getElementById("search-input"),v=document.getElementById("search-button"),a=document.createElement("span");a.className="loader";v.addEventListener("click",i=>{s.parentNode.insertBefore(a,s),a.style.display="block",l(9e4),i.preventDefault();const c=`https://pixabay.com/api/?key=26694191-13f704d2e0e711d67f08fd2b2&q=${b.value}&image_type=photo&orientation=horizontal&safesearch=true`;s.innerHTML="",fetch(c).then(o=>o.json()).then(o=>{console.log("data",o.hits.length),o.hits.length===0&&y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const e=o.hits.map(({webformatURL:t,largeImageURL:n,tags:p,likes:d,views:f,comments:m,downloads:h})=>`<div class="item">
        <a href="${n}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${p}"
        />
        <div class="info">
          <p class="info-item">
            <b>Likes <br/> ${d}</b>
          </p>
          <p class="info-item">
            <b>Views <br/> ${f}</b>
          </p>
          <p class="info-item">
            <b>Comments <br/> ${m}</b>
          </p>
          <p class="info-item">
            <b>Downloads <br/> ${h}</b>
          </p>
        </div>
        </a>
        </div>`).join("");s.insertAdjacentHTML("beforeend",e),l(9e4),a.style.display="none",u.refresh()}).catch(o=>{console.error("Hata oluştu:",o)})});let u=new g(".container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});console.log(u);function l(i){return new Promise(r=>setTimeout(r,i))}
//# sourceMappingURL=index.js.map
