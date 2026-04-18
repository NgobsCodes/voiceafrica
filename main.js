var demos = [
  {name:"ASUS",label:"Commercial",key:"ASUS4",cat:"commercial"},
  {name:"Aramex",label:"Commercial",key:"AramexSlow",cat:"commercial"},
  {name:"CAF",label:"Sports",key:"CAF4",cat:"sports"},
  {name:"Mall of the North",label:"Commercial",key:"mallofNorth2",cat:"commercial"},
  {name:"HubCity",label:"Corporate",key:"HubcityRedo2",cat:"corporate"},
  {name:"Grant's",label:"Promo",key:"Grants3",cat:"commercial"},
  {name:"PGA",label:"Sports / Promo",key:"PGAEdited",cat:"sports"},
  {name:"Debroglio",label:"Narration",key:"Debroglio",cat:"narration"}
];

var brands = [
  {name:"Pringles",type:"FMCG"},{name:"AFCON",type:"Sports"},{name:"CAF",type:"Sports"},
  {name:"ASUS",type:"Tech"},{name:"Aramex",type:"Logistics"},{name:"PGA",type:"Sports"},
  {name:"Katiah Auto",type:"Automotive"},{name:"Mall of the North",type:"Retail"},{name:"Jacaranda FM",type:"Radio"}
];

var services = [
  {title:"Hard Sell",desc:"High energy, punchy, urgent. Grabs attention and drives action. Perfect for retail promos and limited-time offers.",icon:"\u26A1"},
  {title:"Soft Sell",desc:"Warm, conversational, relatable. Builds trust without pressure. Ideal for lifestyle brands and storytelling ads.",icon:"\u2728"},
  {title:"Corporate",desc:"Professional, authoritative, clear. Establishes credibility. Great for investor presentations and internal comms.",icon:"\uD83C\uDFE2"},
  {title:"E-Learning",desc:"Measured, engaging, patient. Keeps learners focused across long modules. Perfect for training and education.",icon:"\uD83C\uDF93"},
  {title:"Promo & Trailer",desc:"Bold, cinematic, high-impact. Builds anticipation and excitement. Perfect for trailers, teasers, and event promos.",icon:"\uD83C\uDFAC"},
  {title:"Documentary",desc:"Rich, cinematic, emotionally resonant. Brings stories to life. Perfect for docuseries and heritage content.",icon:"\uD83C\uDFA5"},
  {title:"IVR & Phone Systems",desc:"Clear, friendly, efficient. Professional hold messages, menu prompts, and voicemail greetings.",icon:"\uD83D\uDCDE"},
  {title:"Podcast & YouTube",desc:"Engaging intros, outros, and ad reads. Elevates production value and makes your show sound premium.",icon:"\uD83C\uDF99\uFE0F"}
];

var testimonials = [
  {quote:"Tumi delivered exactly what we needed \u2014 fast, professional, and the audio quality was outstanding. Will definitely use again for future projects.",name:"Marketing Director",company:"International Brand Campaign",stars:5},
  {quote:"Amazing voice! Deep, warm, and perfectly suited for our corporate video. Turnaround was incredibly fast and communication was excellent throughout.",name:"Creative Producer",company:"Video Production Company",stars:5},
  {quote:"Exactly what we were looking for. Tumi understood the brief immediately and delivered a read that was spot on. Highly recommended for any commercial work.",name:"Agency Creative Lead",company:"Advertising Agency",stars:5},
  {quote:"Professional service from start to finish. The voice quality is broadcast-ready and he was very accommodating with revisions. A pleasure to work with.",name:"E-Learning Producer",company:"Training & Education",stars:5}
];

var faqs = [
  {q:"What is your typical turnaround time?",a:"Most projects are delivered within 24 hours. Longer scripts (1,000+ words) or projects requiring multiple revisions may take 48 hours. Rush delivery is available \u2014 just let me know your deadline."},
  {q:"What audio formats do you deliver?",a:"Files are delivered in WAV (broadcast quality) or MP3, cleaned, edited, and ready for production. I can also deliver to custom specs if your project requires specific sample rates or formats."},
  {q:"Do you offer revisions?",a:"Yes. Minor revisions for tone, pacing, or emphasis are included with every order at no extra charge. Script changes or additional pickups beyond the original scope can be accommodated and quoted transparently."},
  {q:"How do usage rights and pricing work?",a:"Pricing depends on word count, usage rights, and turnaround time. Internal-use projects are the most affordable. Online/digital rights cover websites and social media. Broadcast rights (TV/radio) are priced separately. Full buyout pricing is available for unlimited perpetual use. I'll provide a clear breakdown with every quote."},
  {q:"Can you do different accents or styles?",a:"Yes. I can perform in several English accents including South African, Zimbabwean, Nigerian, and British. My voice ranges from deep and authoritative for corporate work to energetic and punchy for commercials."},
  {q:"What do I need to provide to get started?",a:"Just send me your script (or a rough brief), the intended usage, and your deadline. I'll respond with a quote within hours. If you don't have a final script yet, I'm happy to do a free test read on a sample so you can hear my voice first."},
  {q:"Do you have a professional studio?",a:"Yes. I record from my own professional home studio in Johannesburg, equipped for broadcast-quality output. All audio is edited, noise-reduced, and mastered before delivery."},
  {q:"How do I pay?",a:"I accept payment via bank transfer (EFT), PayPal, or through Fiverr. Payment terms and details are shared privately after the quote is accepted."}
];

var activeDemo = -1;
var audio = document.getElementById('audioPlayer');

function showSection(id) {
  document.querySelectorAll('.section').forEach(function(s){s.classList.remove('active')});
  document.getElementById('sec-'+id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active')});
  var btn = document.querySelector('[data-section="'+id+'"]');
  if(btn) btn.classList.add('active');
  if(audio) audio.pause();
  activeDemo = -1;
  var pb = document.getElementById('playerBox');
  if(pb) pb.style.display='none';
  document.querySelectorAll('.demo-tile').forEach(function(t){t.classList.remove('active')});
  window.scrollTo(0,0);
}

function playDemo(idx) {
  var pb = document.getElementById('playerBox');
  if(activeDemo === idx) {
    if(audio.paused){audio.play()}else{audio.pause()}
    return;
  }
  activeDemo = idx;
  var d = demos[idx];
  document.getElementById('playerTitle').textContent = 'Now playing: ' + d.name + ' \u2014 ' + d.label;
  audio.src = audioData[d.key];
  audio.load();
  audio.play();
  pb.style.display='block';
  document.querySelectorAll('.demo-tile').forEach(function(t,i){t.classList.toggle('active',i===idx)});
}

var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

function submitQuote() {
  var form = document.getElementById('quoteForm');
  var nameEl = form.querySelector('input[placeholder="e.g. Sarah Johnson"]');
  var emailEl = form.querySelector('input[type="email"]');
  var projectEl = form.querySelector('input[placeholder="e.g. Product launch video for new app"]');
  var styleEl = form.querySelector('select');
  var wordCountEl = form.querySelector('input[placeholder="e.g. 500 words"]');
  var deadlineEl = form.querySelector('input[type="date"]');
  var textareas = form.querySelectorAll('textarea');
  var scriptEl = textareas[0];
  var notesEl = textareas[1];

  if(!nameEl.value.trim()||!emailEl.value.trim()||!projectEl.value.trim()){
    alert('Please fill in your name, email, and project description.');
    return;
  }

  var usageRights = [];
  form.querySelectorAll('.usage-btn.selected').forEach(function(btn){
    usageRights.push(btn.querySelector('div').textContent);
  });

  var submitBtn = form.querySelector('.btn-primary');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      project: projectEl.value.trim(),
      style: styleEl.value,
      usage_rights: usageRights.join(', ') || 'Not specified',
      word_count: wordCountEl.value.trim() || 'Not specified',
      deadline: deadlineEl.value || 'Not specified',
      script: scriptEl.value.trim() || 'Not provided',
      notes: notesEl.value.trim() || 'None'
    })
  })
  .then(function(res){ return res.json(); })
  .then(function(data){
    if(data.ok){
      document.getElementById('quoteForm').style.display='none';
      document.getElementById('successBox').style.display='block';
    } else {
      submitBtn.textContent = 'Submit Quote Request';
      submitBtn.disabled = false;
      alert('Something went wrong. Please email ngobsvoice@gmail.com directly.');
    }
  })
  .catch(function(){
    submitBtn.textContent = 'Submit Quote Request';
    submitBtn.disabled = false;
    alert('Could not send. Please email ngobsvoice@gmail.com directly.');
  });
}

function toggleFaq(el) {
  el.classList.toggle('open');
}

// Build hero waveform
var wh = document.getElementById('waveHero');
for(var w=0;w<50;w++){
  var bar=document.createElement('div');
  bar.style.cssText='width:2px;height:'+(6+Math.sin(w*0.5)*14)+'px;background:rgba(232,116,59,'+(0.12+Math.sin(w*0.3)*0.12)+');border-radius:1px;animation:waveform '+(1.2+Math.random()*0.8)+'s ease-in-out infinite;animation-delay:'+w*0.04+'s';
  wh.appendChild(bar);
}

// Build brands (home + work)
function buildBrands(container) {
  var el = document.getElementById(container);
  if(!el) return;
  brands.forEach(function(b){
    el.innerHTML += '<div class="brand-chip"><div class="bname">'+b.name+'</div><div class="btype">'+b.type+'</div></div>';
  });
}
buildBrands('brandsHome');
buildBrands('brandsList');

// Build stats
var statsEl = document.getElementById('statsHome');
[{num:"50+",lbl:"Projects",sub:"And counting"},{num:"24hr",lbl:"Turnaround",sub:"Most orders"},{num:"5.0",lbl:"Rating",sub:"Fiverr \u2022 Level 2"},{num:"9+",lbl:"Major Brands",sub:"And counting"}].forEach(function(s){
  statsEl.innerHTML += '<div class="stat"><div class="num">'+s.num+'</div><div class="lbl">'+s.lbl+'</div><div class="sub">'+s.sub+'</div></div>';
});

// Build demo grid
var catColors = {commercial:'#E8743B',corporate:'#2D9CDB',narration:'#9B51E0',sports:'#27AE60'};
var grid = document.getElementById('demoGrid');
demos.forEach(function(d,i){
  var c = catColors[d.cat]||'#888';
  var tile = document.createElement('div');
  tile.className = 'demo-tile';
  tile.onclick = function(){ playDemo(i); };
  tile.innerHTML = '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">'
    +'<div class="icon">\u25B6</div>'
    +'<div><div style="font-size:16px;font-weight:600;color:#ccc">'+d.name+'</div>'
    +'<div style="font-family:\'Space Mono\',monospace;font-size:10px;letter-spacing:1px;color:'+c+'">'+d.label+'</div></div>'
    +'</div>'
    +'<div style="display:flex;gap:2px;align-items:flex-end;height:18px">'
    +Array.from({length:28},function(_,j){return '<div style="width:2px;height:'+(3+Math.abs(Math.sin(j*0.7+i))*15)+'px;background:'+c+';border-radius:1px;opacity:0.2"></div>'}).join('')
    +'</div>';
  grid.appendChild(tile);
});

// Build services
var sg = document.getElementById('svcGrid');
services.forEach(function(s){
  sg.innerHTML += '<div class="svc-card"><div style="font-size:28px;margin-bottom:12px">'+s.icon+'</div><div style="font-size:17px;font-weight:600;color:#fff;margin-bottom:6px">'+s.title+'</div><div style="font-size:13px;color:#888;line-height:1.55">'+s.desc+'</div></div>';
});

// Build testimonials (home preview - first 2)
var th = document.getElementById('testimonialsHome');
testimonials.slice(0,2).forEach(function(t){
  th.innerHTML += '<div class="testimonial">'
    +'<div style="font-size:14px;color:#ccc;line-height:1.6;margin-bottom:16px;font-style:italic">\u201C'+t.quote+'\u201D</div>'
    +'<div style="font-size:13px;font-weight:600;color:#fff">'+t.name+'</div>'
    +'<div style="font-family:\'Space Mono\',monospace;font-size:10px;color:#555;margin-top:2px">'+t.company+'</div>'
    +'</div>';
});

// Build testimonials (full - services page)
var tf = document.getElementById('testimonialsFull');
testimonials.forEach(function(t){
  var stars = '\u2605'.repeat(t.stars);
  tf.innerHTML += '<div class="testimonial">'
    +'<div style="color:#E8743B;font-size:14px;margin-bottom:12px">'+stars+'</div>'
    +'<div style="font-size:14px;color:#ccc;line-height:1.6;margin-bottom:16px;font-style:italic">\u201C'+t.quote+'\u201D</div>'
    +'<div style="font-size:13px;font-weight:600;color:#fff">'+t.name+'</div>'
    +'<div style="font-family:\'Space Mono\',monospace;font-size:10px;color:#555;margin-top:2px">'+t.company+'</div>'
    +'</div>';
});

// Build FAQ list
var fl = document.getElementById('faqList');
faqs.forEach(function(f){
  var item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = '<div class="faq-q" onclick="toggleFaq(this.parentElement)">'+f.q+'<span class="faq-arrow">\u25BC</span></div>'
    +'<div class="faq-a">'+f.a+'</div>';
  fl.appendChild(item);
});
