const openBtn=document.getElementById('openInvitation');
const invitation=document.getElementById('invitation');
const musicBtn=document.getElementById('musicBtn');
const audio=document.getElementById('audio');
const form=document.getElementById('rsvpForm');
const preloader=document.getElementById('preloader');

window.addEventListener('load',()=>setTimeout(()=>{preloader.style.opacity='0';setTimeout(()=>preloader.remove(),500)},350));

openBtn.addEventListener('click',()=>{
  invitation.classList.add('is-open');
  invitation.setAttribute('aria-hidden','false');
  musicBtn.classList.add('show');
  document.body.classList.add('opened');
  setTimeout(()=>document.getElementById('invitation').scrollIntoView({behavior:'smooth'}),80);
  if(audio.src) audio.play().then(()=>musicBtn.classList.add('playing')).catch(()=>{});
});

musicBtn.addEventListener('click',()=>{
  if(!audio.src){ alert('Tambahkan file audio sholawat ke assets/audio/sholawat.mp3 lalu isi src pada script.js.'); return; }
  if(audio.paused){audio.play();musicBtn.classList.add('playing')}else{audio.pause();musicBtn.classList.remove('playing')}
});

// Ganti tanggal acara di sini. Format: YYYY-MM-DDTHH:MM:SS+09:00
const eventDate=new Date('2026-09-06T09:00:00+09:00');
function pad(n){return String(Math.max(0,n)).padStart(2,'0')}
function tick(){
 const diff=eventDate-new Date();
 const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
 document.getElementById('days').textContent=pad(d);document.getElementById('hours').textContent=pad(h);document.getElementById('minutes').textContent=pad(m);document.getElementById('seconds').textContent=pad(s);
}
tick();setInterval(tick,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('guestName').value.trim();
 const count=document.getElementById('guestCount').value;
 const attendance=document.getElementById('attendance').value;
 const phone='628XXXXXXXXXX'; // GANTI dengan nomor WhatsApp panitia
 const text=`Assalamu'alaikum.\n\nKonfirmasi Kehadiran Maulid Akbar 1448 H\n\nNama: ${name}\nJumlah: ${count} orang\nKonfirmasi: ${attendance}\n\nJazakumullahu khairan.`;
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank');
});
