javascript:(function(){if(window._xrayActive){document.getElementById('xray-panel').style.transform='translateY(100%)';setTimeout(()=>{document.body.removeChild(document.getElementById('xray-panel'));document.removeEventListener('click',window._xrayClickHandler);window._xrayActive=false},300);return}const panel=document.createElement('div');panel.id='xray-panel';panel.style.cssText='position:fixed;bottom:0;left:0;right:0;background:linear-gradient(135deg,#1a1a1a,#2d2d2d);color:#fff;padding:20px;font-family:monospace;max-height:300px;overflow:auto;z-index:999999;transform:translateY(100%);transition:transform 0.3s ease;box-shadow:0 -5px 25px rgba(0,0,0,0.2);border-top:2px solid #3498db';const closeBtn=document.createElement('button');closeBtn.innerHTML='✕';closeBtn.style.cssText='position:absolute;top:10px;right:10px;width:30px;height:30px;background:#e74c3c;color:white;border:none;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;box-shadow:0 2px 5px rgba(0,0,0,0.2)';closeBtn.onmouseover=function(){this.style.transform='scale(1.1)';this.style.background='#c0392b'};closeBtn.onmouseout=function(){this.style.transform='scale(1)';this.style.background='#e74c3c'};closeBtn.onclick=function(){panel.style.transform='translateY(100%)';setTimeout(()=>{document.body.removeChild(panel);document.removeEventListener('click',window._xrayClickHandler);window._xrayActive=false},300)};panel.appendChild(closeBtn);const content=document.createElement('pre');content.style.cssText='margin:0;padding:10px;white-space:pre-wrap;word-wrap:break-word;color:#3498db;text-shadow:0 0 1px rgba(52,152,219,0.3)';panel.appendChild(content);window._xrayClickHandler=function(e){e.preventDefault();e.stopPropagation();const html=e.target.outerHTML.replace(/</g,'<').replace(/>/g,'>');content.innerHTML=html};document.body.appendChild(panel);setTimeout(()=>{panel.style.transform='translateY(0)'},50);document.addEventListener('click',window._xrayClickHandler);window._xrayActive=true})()
