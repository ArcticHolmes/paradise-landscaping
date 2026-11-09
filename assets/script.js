document.querySelectorAll('[data-contact-form]').forEach(form=>{form.addEventListener('submit',ev=>{ev.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const region=form.dataset.region;const email=form.dataset.email;const subject=encodeURIComponent('Website estimate request - '+region+' - '+data.get('name'));const body=encodeURIComponent('Location: '+region+'\nName: '+data.get('name')+'\nPhone: '+data.get('phone')+'\nEmail: '+data.get('email')+'\nService: '+data.get('service')+'\nVeteran: '+(data.get('veteran')==='yes'?'Yes':'No')+'\nMessage: '+data.get('message'));window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;form.querySelector('[data-form-notice]').textContent='Your email app should open with your request. Please send the prepared email to complete your inquiry.'})});

/* Florida-only holiday price calculator. Change these sample rates when the owner supplies final numbers. */
(()=>{const form=document.getElementById('christmas-price-form');if(!form)return;
const DEFAULT_RATES={seasonal:{laborPerFoot:4,lightsPerFoot:2},permanent:{laborPerFoot:8,lightsPerFoot:5},storyMultiplier:{1:1,2:1.35,3:1.7}};
let RATES=DEFAULT_RATES;try{const custom=JSON.parse(localStorage.getItem('paradise-light-rates')||'null');if(custom&&custom.seasonal&&custom.permanent&&custom.storyMultiplier)RATES=custom;}catch(e){}
const fmt=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
const stories=Number(document.getElementById('calc-stories').value),feet=Number(document.getElementById('calc-feet').value),style=form.querySelector('[name="light-style"]:checked').value,own=form.querySelector('[name="own-lights"]:checked').value;
if(!Number.isFinite(feet)||feet<=0||feet>5000)return;
const rate=RATES[style],price=Math.round(feet*rate.laborPerFoot*RATES.storyMultiplier[stories]+(own==='no'?feet*rate.lightsPerFoot:0));
document.getElementById('holiday-estimate').textContent=fmt(price);
document.getElementById('holiday-calc-result').hidden=false;
const quote=document.getElementById('calc-quote');quote.onclick=()=>{const contact=document.querySelector('.florida [data-contact-form]');if(!contact)return;const service=contact.querySelector('[name="service"]'),message=contact.querySelector('[name="message"]');if(service)service.value='Holiday Lighting';if(message)message.value=`Christmas lighting inquiry\nStories: ${stories}\nLinear feet: ${feet}\nStyle: ${style==='permanent'?'Permanent (Govee-style)':'Semi-permanent (traditional Christmas lights)'}\nHave own lights: ${own==='yes'?'Yes':'No'}\nExample estimated price: ${fmt(price)} (not a binding quote)`.trim();};
document.getElementById('holiday-calc-result').scrollIntoView({behavior:'smooth',block:'nearest'});
});})();
