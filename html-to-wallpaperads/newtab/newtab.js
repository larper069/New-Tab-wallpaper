'use strict';

const DEFAULTS = {
	showClock: true,
	clock24: true,
	dim: 0
};

let settings = { ...DEFAULTS };

// DOM
const wallpaper = document.getElementById('wallpaper');
const overlay   = document.getElementById('overlay');
const clockEl   = document.getElementById('clock');
const dateEl    = document.getElementById('date');
const gear      = document.getElementById('gear');
const quick     = document.getElementById('quick');
const showClock = document.getElementById('show-clock');
const clock24   = document.getElementById('clock-24');
const dimSlider = document.getElementById('dim');
const editBtn   = document.getElementById('edit-btn');

// ---- Load & render wallpaper ----

async function loadWallpaper() {
	const data = await browser.storage.local.get(['wallpaperHTML', 'settings']);
	
	if (data.settings) {
		settings = { ...DEFAULTS, ...data.settings };
	}
	
	const html = data.wallpaperHTML || defaultWallpaper();
	
	// Inject into sandboxed iframe via srcdoc
	wallpaper.srcdoc = html;
	
	applySettings();
}

function defaultWallpaper() {
    return `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#030407}
    body{position:relative}
    .s{position:fixed;inset:0;background:radial-gradient(circle at 50% 48%,rgba(120,145,255,.10),transparent 27%),#030407}
    .d{position:absolute;width:7px;height:7px;border-radius:50%;background:#e1e8ff;box-shadow:0 0 10px rgba(150,175,255,.7)}
    </style></head><body><div class="s"></div><div id="d"></div><script>
    const q=document.getElementById('d'),N=58;let t=0,mx=0,my=0;
    function f(){t+=.006;q.innerHTML='';for(let i=0;i<N;i++){let a=i*.34+t,y=(i-N/2)*15;
    for(let k of [1,-1]){let x=Math.cos(a)*125*k,z=Math.sin(a)*125*k,s=620/(620+z),e=document.createElement('i');e.className='d';
    e.style.left='calc(50% + '+((x+mx*40)*s)+'px)';e.style.top='calc(50% + '+((y+my*25)*s)+'px)';e.style.transform='scale('+s+')';e.style.opacity=Math.max(.12,s*.9);q.appendChild(e)}}requestAnimationFrame(f)}f();
    addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
    </script></body></html>`;
}

// ---- Settings ----

function applySettings() {
	overlay.classList.toggle('hidden', !settings.showClock);
	document.documentElement.style.setProperty('--dim', settings.dim / 100);
	showClock.checked = settings.showClock;
	clock24.checked = settings.clock24;
	dimSlider.value = settings.dim;
	tickClock();
}

function saveSettings() {
	browser.storage.local.set({ settings });
}

// ---- Clock ----

function tickClock() {
	if (!settings.showClock) return;
	const now = new Date();
	let h = now.getHours();
	const m = String(now.getMinutes()).padStart(2, '0');
	let suffix = '';
	if (!settings.clock24) {
		suffix = h >= 12 ? ' PM' : ' AM';
		h = h % 12 || 12;
	}
	clockEl.textContent = `${settings.clock24 ? String(h).padStart(2, '0') : h}:${m}${suffix}`;
	dateEl.textContent = now.toLocaleDateString(undefined, {
		weekday: 'long', month: 'long', day: 'numeric'
	});
}

// ---- Events ----

gear.onclick = () => quick.classList.toggle('closed');

showClock.onchange = () => {
	settings.showClock = showClock.checked;
	applySettings();
	saveSettings();
};

clock24.onchange = () => {
	settings.clock24 = clock24.checked;
	tickClock();
	saveSettings();
};

dimSlider.oninput = () => {
	settings.dim = parseInt(dimSlider.value);
	document.documentElement.style.setProperty('--dim', settings.dim / 100);
	saveSettings();
};

editBtn.onclick = () => {
	browser.runtime.openOptionsPage?.() ||
	window.open(browser.runtime.getURL('editor/editor.html'));
};

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') quick.classList.add('closed');
});

// ---- Listen for live updates from editor ----

browser.storage.onChanged.addListener((changes) => {
	if (changes.wallpaperHTML) {
		wallpaper.srcdoc = changes.wallpaperHTML.newValue || defaultWallpaper();
	}
	if (changes.settings) {
		settings = { ...DEFAULTS, ...(changes.settings.newValue || {}) };
		applySettings();
	}
});

// ---- Init ----

loadWallpaper();
setInterval(tickClock, 1000);
