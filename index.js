import{i as h,S as b}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.querySelector(".container"),g=document.getElementById("search-input"),v=document.getElementById("search-button"),a=document.createElement("span");a.className="loader";v.addEventListener("click",n=>{s.parentNode.insertBefore(a,s),a.style.display="block",l(9e4),n.preventDefault();const c=`https://pixabay.com/api/?key=26694191-13f704d2e0e711d67f08fd2b2&q=${g.value}&image_type=photo&orientation=horizontal&safesearch=true`;s.innerHTML="",fetch(c).then(o=>o.json()).then(o=>{o.hits.length===0&&h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const e=o.hits.map(({webformatURL:t,largeImageURL:i,tags:p,likes:d,views:f,comments:m,downloads:y})=>`<div class="item">
        <a href="${i}">
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
            <b>Downloads <br/> ${y}</b>
          </p>
        </div>
        </a>
        </div>`).join("");s.insertAdjacentHTML("beforeend",e),l(9e4),a.style.display="none",u.refresh()}).catch(o=>{console.error("Hata oluştu:",o)})});let u=new b(".container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});console.log(u);function l(n){return new Promise(r=>setTimeout(r,n))}
//# sourceMappingURL=index.js.map
