'use strict';

// ====================== PRESETS ======================

const PRESETS = {
	'slow rain': {
		html: `<div class="matrix">
		
		<div class="col c1">0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1</div>
		<div class="col c2">1<br>0<br>1<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1</div>
		<div class="col c3">A<br>7<br>0<br>F<br>1<br>0<br>3<br>B<br>1<br>0<br>7<br>A<br>1<br>F<br>0<br>1<br>0<br>A</div>
		<div class="col c4">1<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0</div>
		<div class="col c5">0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>1</div>
		<div class="col c6">1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1</div>
		<div class="col c7">0<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>0</div>
		<div class="col c8">1<br>1<br>0<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1</div>
		<div class="col c9">0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1</div>
		<div class="col c10">1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1</div>
		
		<div class="col c11">0<br>1<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>1<br>0</div>
		<div class="col c12">1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>0</div>
		<div class="col c13">F<br>0<br>1<br>A<br>0<br>7<br>1<br>B<br>0<br>1<br>F<br>0<br>A<br>1<br>0<br>7<br>1<br>0</div>
		<div class="col c14">0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0</div>
		<div class="col c15">1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>0<br>1<br>1<br>0</div>
		<div class="col c16">0<br>1<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1</div>
		<div class="col c17">1<br>0<br>1<br>1<br>0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1</div>
		<div class="col c18">0<br>1<br>0<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>0<br>0<br>1</div>
		<div class="col c19">1<br>1<br>0<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>0</div>
		<div class="col c20">0<br>0<br>1<br>0<br>1<br>1<br>0<br>1<br>1<br>0<br>1<br>0<br>1<br>0<br>1<br>1<br>0<br>1</div>
		
		</div>`,
		css: `* {
			box-sizing: border-box;
		}
		
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			overflow: hidden;
			background: #000;
		}
		
		body {
			font-family: monospace;
		}
		
		/* Full-screen matrix field */
		
		.matrix {
			position: fixed;
			inset: 0;
			overflow: hidden;
			
			background:
			radial-gradient(
				ellipse at center,
				rgba(0, 255, 100, 0.055),
							transparent 70%
			),
			#000;
		}
		
		/* CRT scanlines */
		
		.matrix::before {
			content: "";
			position: absolute;
			inset: 0;
			z-index: 20;
			pointer-events: none;
			
			background:
			repeating-linear-gradient(
				to bottom,
				transparent 0px,
				transparent 2px,
				rgba(0, 255, 100, 0.035) 3px
			);
		}
		
		/* CRT vignette */
		
		.matrix::after {
			content: "";
			position: absolute;
			inset: 0;
			z-index: 21;
			pointer-events: none;
			
			background:
			radial-gradient(
				ellipse at center,
				transparent 45%,
				rgba(0, 0, 0, 0.55) 100%
			);
		}
		
		/* Matrix streams */
		
		.col {
			position: absolute;
			top: -700px;
			
			width: 26px;
			
			color: rgba(0, 255, 95, 0.72);
			
			font-family: "Courier New", monospace;
			font-size: 20px;
			font-weight: bold;
			line-height: 1.05;
			
			text-align: center;
			
			text-shadow:
			0 0 4px rgba(0, 255, 80, 0.95),
			0 0 12px rgba(0, 255, 80, 0.55),
			0 0 25px rgba(0, 255, 80, 0.22);
			
			animation-name: rain;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
		
		/* Different horizontal positions */
		
		.c1  { left: 1%;  animation-duration: 3.2s; animation-delay: -1.5s; }
		.c2  { left: 6%;  animation-duration: 2.4s; animation-delay: -.7s; }
		.c3  { left: 11%; animation-duration: 3.8s; animation-delay: -2.8s; }
		.c4  { left: 16%; animation-duration: 2.1s; animation-delay: -1.1s; }
		.c5  { left: 21%; animation-duration: 3.0s; animation-delay: -2.3s; }
		.c6  { left: 26%; animation-duration: 2.6s; animation-delay: -.4s; }
		.c7  { left: 31%; animation-duration: 4.1s; animation-delay: -3.1s; }
		.c8  { left: 36%; animation-duration: 2.2s; animation-delay: -1.8s; }
		.c9  { left: 41%; animation-duration: 3.4s; animation-delay: -2.1s; }
		.c10 { left: 46%; animation-duration: 2.7s; animation-delay: -.8s; }
		
		.c11 { left: 51%; animation-duration: 3.7s; animation-delay: -2.9s; }
		.c12 { left: 56%; animation-duration: 2.3s; animation-delay: -1.2s; }
		.c13 { left: 61%; animation-duration: 3.1s; animation-delay: -2.5s; }
		.c14 { left: 66%; animation-duration: 2.5s; animation-delay: -.3s; }
		.c15 { left: 71%; animation-duration: 4.0s; animation-delay: -3.4s; }
		.c16 { left: 76%; animation-duration: 2.0s; animation-delay: -1.6s; }
		.c17 { left: 81%; animation-duration: 3.5s; animation-delay: -2.0s; }
		.c18 { left: 86%; animation-duration: 2.8s; animation-delay: -.9s; }
		.c19 { left: 91%; animation-duration: 3.3s; animation-delay: -2.7s; }
		.c20 { left: 96%; animation-duration: 2.4s; animation-delay: -1.4s; }
		
		/* Fast falling motion */
		
		@keyframes rain {
			0% {
				transform: translateY(-150px);
				opacity: 0;
			}
			
			5% {
				opacity: 1;
			}
			
			90% {
				opacity: 0.85;
			}
			
			100% {
				transform: translateY(calc(100vh + 900px));
				opacity: 0;
			}
		}`,
		js: ``
	},
	
	'Matrix Rain': {
		html: `<div class="matrix">
		
		<div class="col" style="--x:0;--s:1.45s;--d:-.8s">101101001101010110010101101</div>
		<div class="col" style="--x:1;--s:2.1s;--d:-1.4s">010110101001101011010010110</div>
		<div class="col" style="--x:2;--s:1.2s;--d:-.3s">101011010110010101101001011</div>
		<div class="col" style="--x:3;--s:1.8s;--d:-1.1s">110010101101101001010110101</div>
		<div class="col" style="--x:4;--s:1.35s;--d:-.6s">010101101001011010110101001</div>
		<div class="col" style="--x:5;--s:2.4s;--d:-2s">101101010010110101101001101</div>
		<div class="col" style="--x:6;--s:1.1s;--d:-.5s">011010110101001101011010110</div>
		<div class="col" style="--x:7;--s:1.7s;--d:-1.2s">101001101011010110100101101</div>
		<div class="col" style="--x:8;--s:1.3s;--d:-.9s">110101001101101010011010101</div>
		<div class="col" style="--x:9;--s:2.2s;--d:-1.7s">010110101101001011010110101</div>
		<div class="col" style="--x:10;--s:1.4s;--d:-.2s">101010110010101101101001010</div>
		<div class="col" style="--x:11;--s:1.9s;--d:-1.5s">011010101101010010110101101</div>
		<div class="col" style="--x:12;--s:1.15s;--d:-.7s">101101001011010110101101001</div>
		<div class="col" style="--x:13;--s:2.5s;--d:-2.1s">110010110101101001011010101</div>
		<div class="col" style="--x:14;--s:1.25s;--d:-.4s">010101101010011010110101101</div>
		<div class="col" style="--x:15;--s:1.65s;--d:-1.3s">101011010110101001101010110</div>
		
		<div class="col" style="--x:16;--s:1.3s;--d:-.8s">カ10リ01ネ10メ01サ10ユ01タ10</div>
		<div class="col" style="--x:17;--s:2.3s;--d:-1.8s">101101010110010101101001101</div>
		<div class="col" style="--x:18;--s:1.1s;--d:-.1s">010110101101001101010110101</div>
		<div class="col" style="--x:19;--s:1.8s;--d:-1.4s">101010011010110101101001010</div>
		<div class="col" style="--x:20;--s:1.4s;--d:-.6s">110101101001010110101101010</div>
		<div class="col" style="--x:21;--s:2.0s;--d:-1.6s">010101101101010011010110101</div>
		<div class="col" style="--x:22;--s:1.2s;--d:-.5s">101101001101010110010101101</div>
		<div class="col" style="--x:23;--s:1.55s;--d:-.9s">011010110101001101011010110</div>
		<div class="col" style="--x:24;--s:2.6s;--d:-2.2s">101001101011010110100101101</div>
		<div class="col" style="--x:25;--s:1.25s;--d:-.3s">110010101101101001010110101</div>
		<div class="col" style="--x:26;--s:1.7s;--d:-1.2s">010101101001011010110101001</div>
		<div class="col" style="--x:27;--s:1.15s;--d:-.7s">101101010010110101101001101</div>
		<div class="col" style="--x:28;--s:2.1s;--d:-1.9s">011010110101001101011010110</div>
		<div class="col" style="--x:29;--s:1.35s;--d:-.4s">101001101011010110100101101</div>
		<div class="col" style="--x:30;--s:1.9s;--d:-1.5s">110101001101101010011010101</div>
		<div class="col" style="--x:31;--s:1.3s;--d:-.8s">010110101101001011010110101</div>
		
		<div class="col" style="--x:32;--s:1.5s;--d:-.2s">メ01カ10ネ01リ10サ01ユ10タ01</div>
		<div class="col" style="--x:33;--s:2.4s;--d:-2s">101010110010101101101001010</div>
		<div class="col" style="--x:34;--s:1.2s;--d:-.6s">011010101101010010110101101</div>
		<div class="col" style="--x:35;--s:1.75s;--d:-1.3s">101101001011010110101101001</div>
		<div class="col" style="--x:36;--s:1.1s;--d:-.3s">110010110101101001011010101</div>
		<div class="col" style="--x:37;--s:2.0s;--d:-1.7s">010101101010011010110101101</div>
		<div class="col" style="--x:38;--s:1.35s;--d:-.8s">101011010110101001101010110</div>
		<div class="col" style="--x:39;--s:2.5s;--d:-2.1s">101101010110010101101001101</div>
		<div class="col" style="--x:40;--s:1.25s;--d:-.5s">010110101101001101010110101</div>
		<div class="col" style="--x:41;--s:1.6s;--d:-1.1s">101010011010110101101001010</div>
		<div class="col" style="--x:42;--s:1.4s;--d:-.4s">110101101001010110101101010</div>
		<div class="col" style="--x:43;--s:2.2s;--d:-1.8s">010101101101010011010110101</div>
		<div class="col" style="--x:44;--s:1.15s;--d:-.2s">101101001101010110010101101</div>
		<div class="col" style="--x:45;--s:1.85s;--d:-1.4s">011010110101001101011010110</div>
		<div class="col" style="--x:46;--s:1.3s;--d:-.9s">101001101011010110100101101</div>
		<div class="col" style="--x:47;--s:2.7s;--d:-2.3s">110010101101101001010110101</div>
		
		<div class="col" style="--x:48;--s:1.2s;--d:-.5s">カ01ネ10リ01メ10サ01ユ10タ01</div>
		<div class="col" style="--x:49;--s:1.7s;--d:-1.2s">010101101001011010110101001</div>
		<div class="col" style="--x:50;--s:1.1s;--d:-.3s">101101010010110101101001101</div>
		<div class="col" style="--x:51;--s:2.1s;--d:-1.8s">011010110101001101011010110</div>
		<div class="col" style="--x:52;--s:1.35s;--d:-.7s">101001101011010110100101101</div>
		<div class="col" style="--x:53;--s:1.9s;--d:-1.5s">110101001101101010011010101</div>
		<div class="col" style="--x:54;--s:1.25s;--d:-.4s">010110101101001011010110101</div>
		<div class="col" style="--x:55;--s:2.4s;--d:-2.0s">101010110010101101101001010</div>
		<div class="col" style="--x:56;--s:1.15s;--d:-.6s">011010101101010010110101101</div>
		<div class="col" style="--x:57;--s:1.65s;--d:-1.0s">101101001011010110101101001</div>
		<div class="col" style="--x:58;--s:1.3s;--d:-.3s">110010110101101001011010101</div>
		<div class="col" style="--x:59;--s:2.0s;--d:-1.6s">010101101010011010110101101</div>
		<div class="col" style="--x:60;--s:1.2s;--d:-.8s">101011010110101001101010110</div>
		<div class="col" style="--x:61;--s:2.5s;--d:-2.2s">101101010110010101101001101</div>
		<div class="col" style="--x:62;--s:1.4s;--d:-.5s">010110101101001101010110101</div>
		<div class="col" style="--x:63;--s:1.8s;--d:-1.3s">101010011010110101101001010</div>
		
		</div>
		`,
		css: `* {
			box-sizing: border-box;
		}
		
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			overflow: hidden;
			background: #000;
		}
		
		body {
			font-family: "Courier New", monospace;
		}
		
		.matrix {
			position: fixed;
			inset: 0;
			overflow: hidden;
			background:
			radial-gradient(
				ellipse at center,
				rgba(0, 35, 12, .12),
							#000 70%
			);
			pointer-events: none;
		}
		
		
		/* =========================
		 *  THE DIGITAL FLOOD
		 *  ========================= */
		
		.col {
			position: absolute;
			
			left: calc(var(--x) * 1.5625%);
			
			top: -600px;
			
			width: 18px;
			
			writing-mode: vertical-rl;
			text-orientation: upright;
			
			font-family: "Courier New", monospace;
			font-size: 17px;
			font-weight: 700;
			
			letter-spacing: 1px;
			line-height: 1;
			
			white-space: nowrap;
			
			color: rgba(0, 255, 80, .82);
			
			text-shadow:
			0 0 1px #00ff55,
			0 0 3px rgba(0,255,80,.55);
			
			animation:
			matrixFall var(--s) linear infinite;
			
			animation-delay: var(--d);
			
			will-change: transform;
		}
		
		
		/* DEPTH + TRAFFIC VARIATION */
		
		.col:nth-child(3n) {
			font-size: 13px;
			opacity: .52;
		}
		
		.col:nth-child(4n) {
			font-size: 20px;
			opacity: .9;
		}
		
		.col:nth-child(7n) {
			font-size: 24px;
			opacity: .98;
		}
		
		.col:nth-child(9n) {
			font-size: 15px;
			opacity: .65;
		}
		
		
		/* =========================
		 *  FAST FALLING RAIN
		 *  ========================= */
		
		@keyframes matrixFall {
			
			0% {
				transform: translate3d(0, -1000px, 0);
				opacity: 0;
			}
			
			3% {
				opacity: 1;
			}
			
			85% {
				opacity: .95;
			}
			
			94% {
				opacity: .75;
			}
			
			100% {
				transform: translate3d(0, calc(100vh + 1100px), 0);
				opacity: 0;
			}
		}
		
		
		/* =========================
		 *  ULTRA FINE CRT
		 *  ========================= */
		
		.matrix::before {
			content: "";
			position: absolute;
			inset: 0;
			
			z-index: 50;
			
			pointer-events: none;
			
			background:
			repeating-linear-gradient(
				0deg,
				rgba(255,255,255,.025) 0px,
									  rgba(255,255,255,.025) 1px,
									  transparent 1px,
							 transparent 4px
			);
		}
		
		
		/* =========================
		 *  VERY SUBTLE SCREEN VIGNETTE
		 *  ========================= */
		
		.matrix::after {
			content: "";
			position: absolute;
			inset: 0;
			
			z-index: 60;
			
			pointer-events: none;
			
			box-shadow:
			inset 0 0 90px rgba(0,0,0,.8),
			inset 0 0 200px rgba(0,0,0,.4);
		}
		`,
		js: ``
	}
};


// ====================== PREMIUM WALLPAPERS ======================

Object.assign(PRESETS, {
	'DNA — Minimal Helix': {
		html: `<div class="scene"><div class="helix h1"></div><div class="helix h2"></div><div class="rungs"></div></div>`,
		css: `
*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#08090b;color:white}
body{display:grid;place-items:center;font-family:system-ui,sans-serif}
body:before{content:"";position:fixed;width:55vmin;height:55vmin;border-radius:50%;background:radial-gradient(circle,rgba(160,180,255,.075),transparent 68%);filter:blur(18px)}
.scene{position:relative;width:min(52vw,620px);height:min(86vh,920px);transform:perspective(900px) rotateY(-10deg);animation:breath 8s ease-in-out infinite}
.helix{position:absolute;inset:0;--phase:0deg}
.helix:before{content:"";position:absolute;left:50%;top:4%;width:2px;height:92%;transform:translateX(-50%);background:linear-gradient(180deg,transparent,#aebfff 20%,#fff 50%,#b99cff 80%,transparent);opacity:.55;box-shadow:0 0 18px rgba(170,190,255,.25)}
.h1:after,.h2:after{content:"";position:absolute;left:50%;top:0;width:15vmin;height:15vmin;border-radius:50%;border:1px solid rgba(185,198,255,.8);transform:translate(-50%,calc(var(--y)*1px)) translateX(calc(cos(var(--a))*16vmin)) scale(.35);}
.h1:after{animation:strandA 5s linear infinite}.h2:after{animation:strandB 5s linear infinite}
.rungs{position:absolute;inset:4% 0 4%}
.rungs:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(180deg,transparent 0 31px,rgba(220,225,240,.18) 31px 32px,transparent 32px 62px);mask-image:linear-gradient(90deg,transparent,#000 22%,#000 78%,transparent);animation:rungMove 5s linear infinite}
@keyframes strandA{0%{transform:translate(-50%,0) translateX(-16vmin) scale(.22);opacity:.1}25%{transform:translate(-50%,22vh) translateX(16vmin) scale(1);opacity:1}50%{transform:translate(-50%,44vh) translateX(-16vmin) scale(.45);opacity:.35}75%{transform:translate(-50%,66vh) translateX(16vmin) scale(1);opacity:1}100%{transform:translate(-50%,88vh) translateX(-16vmin) scale(.22);opacity:.1}}
@keyframes strandB{0%{transform:translate(-50%,0) translateX(16vmin) scale(.22);opacity:.1}25%{transform:translate(-50%,22vh) translateX(-16vmin) scale(1);opacity:1}50%{transform:translate(-50%,44vh) translateX(16vmin) scale(.45);opacity:.35}75%{transform:translate(-50%,66vh) translateX(-16vmin) scale(1);opacity:1}100%{transform:translate(-50%,88vh) translateX(16vmin) scale(.22);opacity:.1}}
@keyframes rungMove{to{transform:translateY(62px)}}@keyframes breath{50%{transform:perspective(900px) rotateY(10deg) translateY(-5px)}}
`,
		js: ``
	}
});

// ====================== DOM ======================

const edHTML = document.getElementById('ed-html');
const edCSS  = document.getElementById('ed-css');
const edJS   = document.getElementById('ed-js');
const preview = document.getElementById('preview');
const tabs = document.querySelectorAll('.tab');
const editors = document.querySelectorAll('.editor');
const applyBtn = document.getElementById('apply');
const autoBtn  = document.getElementById('auto-apply-btn');
const previewSize = document.getElementById('preview-size');
const slotSelect = document.getElementById('slots');
const presetList = document.getElementById('preset-list');

let autoApply = false;
let applyTimer = null;

// ====================== INIT ======================

async function init() {
	// Load current wallpaper into editors
	const data = await browser.storage.local.get(['wallpaperHTML', 'wallpaperParts', 'savedSlots']);
	
	if (data.wallpaperParts) {
		edHTML.value = data.wallpaperParts.html || '';
		edCSS.value  = data.wallpaperParts.css  || '';
		edJS.value   = data.wallpaperParts.js   || '';
	} else {
		// Load default preset
		loadPreset('DNA — Obsidian 3D');
	}
	
	// Build preset buttons
	for (const name of Object.keys(PRESETS)) {
		const btn = document.createElement('button');
		btn.className = 'preset-btn';
		btn.textContent = name;
		btn.onclick = () => loadPreset(name);
		presetList.appendChild(btn);
	}
	
	// Load saved slots
	refreshSlots(data.savedSlots || {});
	
	// Bind events
	bindEvents();
	
	// Initial preview
	updatePreview();
}

// ====================== TABS ======================

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'));
		editors.forEach(e => e.classList.remove('active'));
		tab.classList.add('active');
		document.getElementById('ed-' + tab.dataset.tab).classList.add('active');
	});
});

// ====================== BUILD FULL HTML ======================

function buildFullHTML() {
	const html = edHTML.value;
	const css  = edCSS.value;
	const js   = edJS.value;
	
	return `<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<style>
	${css}
	</style>
	</head>
	<body>
	${html}
	<script>
	${js}
	<\/script>
	</body>
	</html>`;
}

// ====================== PREVIEW ======================

function updatePreview() {
	preview.srcdoc = buildFullHTML();
}

// ====================== APPLY ======================

function applyWallpaper() {
	const full = buildFullHTML();
	const parts = {
		html: edHTML.value,
		css: edCSS.value,
		js: edJS.value
	};
	
	browser.storage.local.set({
		wallpaperHTML: full,
		wallpaperParts: parts
	});
	
	updatePreview();
}

// ====================== PRESETS ======================

function loadPreset(name) {
	const p = PRESETS[name];
	if (!p) return;
	edHTML.value = p.html;
	edCSS.value  = p.css;
	edJS.value   = p.js;
	updatePreview();
}

// ====================== SAVE / LOAD ======================

async function refreshSlots(slots) {
	slotSelect.innerHTML = '<option value="">— saved wallpapers —</option>';
	for (const name of Object.keys(slots || {})) {
		const opt = document.createElement('option');
		opt.value = name;
		opt.textContent = name;
		slotSelect.appendChild(opt);
	}
}

async function saveSlot() {
	const name = prompt('Save as:');
	if (!name) return;
	
	const data = await browser.storage.local.get('savedSlots');
	const slots = data.savedSlots || {};
	
	slots[name] = {
		html: edHTML.value,
		css: edCSS.value,
		js: edJS.value
	};
	
	await browser.storage.local.set({ savedSlots: slots });
	refreshSlots(slots);
}

async function loadSlot() {
	const name = slotSelect.value;
	if (!name) return;
	
	const data = await browser.storage.local.get('savedSlots');
	const slot = (data.savedSlots || {})[name];
	if (!slot) return;
	
	edHTML.value = slot.html || '';
	edCSS.value  = slot.css  || '';
	edJS.value   = slot.js   || '';
	updatePreview();
}

async function deleteSlot() {
	const name = slotSelect.value;
	if (!name) return;
	if (!confirm(`Delete "${name}"?`)) return;
	
	const data = await browser.storage.local.get('savedSlots');
	const slots = data.savedSlots || {};
	delete slots[name];
	
	await browser.storage.local.set({ savedSlots: slots });
	refreshSlots(slots);
}

// ====================== EXPORT / IMPORT ======================

function exportWallpaper() {
	const payload = JSON.stringify({
		html: edHTML.value,
		css: edCSS.value,
		js: edJS.value
	}, null, 2);
	
	const blob = new Blob([payload], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'wallpaper.json';
	a.click();
	URL.revokeObjectURL(url);
}

function importWallpaper() {
	document.getElementById('import-file').click();
}

function handleImport(e) {
	const file = e.target.files[0];
	if (!file) return;
	
	const reader = new FileReader();
	reader.onload = () => {
		try {
			if (file.name.endsWith('.json')) {
				const obj = JSON.parse(reader.result);
				edHTML.value = obj.html || '';
				edCSS.value  = obj.css  || '';
				edJS.value   = obj.js   || '';
			} else {
				// Raw .html file — put everything in the HTML tab
				edHTML.value = reader.result;
				edCSS.value = '';
				edJS.value = '';
			}
			updatePreview();
		} catch (err) {
			alert('Failed to import: ' + err.message);
		}
	};
	reader.readAsText(file);
	e.target.value = '';
}

// ====================== TAB KEY ======================

function handleTab(e) {
	if (e.key === 'Tab') {
		e.preventDefault();
		const ta = e.target;
		const start = ta.selectionStart;
		const end = ta.selectionEnd;
		ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
		ta.selectionStart = ta.selectionEnd = start + 2;
		onCodeChange();
	}
}

// ====================== BIND ======================

function onCodeChange() {
	if (autoApply) {
		clearTimeout(applyTimer);
		applyTimer = setTimeout(() => {
			updatePreview();
		}, 400);
	}
}

function bindEvents() {
	applyBtn.onclick = applyWallpaper;
	
	autoBtn.onclick = () => {
		autoApply = !autoApply;
		autoBtn.classList.toggle('on', autoApply);
	};
	
	[edHTML, edCSS, edJS].forEach(ed => {
		ed.addEventListener('input', onCodeChange);
		ed.addEventListener('keydown', handleTab);
	});
	
	previewSize.onchange = () => {
		const val = previewSize.value;
		if (val === 'fill') {
			preview.style.width = '100%';
			preview.style.height = '100%';
			preview.style.transform = 'none';
		} else {
			const [w, h] = val.split('x').map(Number);
			const wrapRect = preview.parentElement.getBoundingClientRect();
			const scale = Math.min(wrapRect.width / w, wrapRect.height / h);
			preview.style.width = w + 'px';
			preview.style.height = h + 'px';
			preview.style.transform = `scale(${scale})`;
			preview.style.transformOrigin = 'center center';
		}
	};
	
	document.getElementById('save-slot').onclick = saveSlot;
	document.getElementById('load-slot').onclick = loadSlot;
	document.getElementById('del-slot').onclick = deleteSlot;
	document.getElementById('export').onclick = exportWallpaper;
	document.getElementById('import').onclick = importWallpaper;
	document.getElementById('import-file').onchange = handleImport;
}

// ====================== GO ======================

init();


/* PREMIUM_WALLPAPER_PRESETS */
(() => {
  const presets = [
    {id:"dna-obsidian-3d",name:"DNA — Obsidian 3D",desc:"Projected 3D molecular helix"},
    {id:"dna-minimal-helix",name:"DNA — Minimal Helix",desc:"Quiet minimal desktop helix"},
    {id:"dna-deep-space",name:"DNA — Deep Space",desc:"Sparse helix in deep space"},
    {id:"torus-clean-3d",name:"Torus — Clean 3D",desc:"Minimal mathematical torus"},
    {id:"ascii-torus",name:"ASCII — Torus",desc:"Animated ASCII torus"},
    {id:"ascii-dna",name:"ASCII — DNA",desc:"Animated ASCII DNA"}
  ];
  const base = "../wallpapers/";
  const grid = document.getElementById("premium-grid");
  if (!grid) return;

  function card(p) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "premium-card";
    el.innerHTML = `<span class="premium-preview"></span><strong>${p.name}</strong><small>${p.desc}</small><span class="premium-use">USE</span>`;
    const preview = el.querySelector(".premium-preview");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("sandbox","allow-scripts");
    iframe.src = base + p.id + "/index.html";
    preview.appendChild(iframe);
    el.addEventListener("click", async () => {
      try {
        const [h,c,j] = await Promise.all([
          fetch(base+p.id+"/index.html").then(r=>r.text()),
          fetch(base+p.id+"/style.css").then(r=>r.text()),
          fetch(base+p.id+"/script.js").then(r=>r.text())
        ]);
        const combined = h
          .replace(/<link[^>]+href=["']style\.css["'][^>]*>/i, `<style>${c}</style>`)
          .replace(/<script[^>]+src=["']script\.js["'][^>]*><\/script>/i, `<script>${j}<\/script>`);
        const area = document.querySelector("textarea") || document.querySelector('[contenteditable="true"]');
        if (area) {
          if ("value" in area) {
            area.value = combined;
            area.dispatchEvent(new Event("input",{bubbles:true}));
            area.dispatchEvent(new Event("change",{bubbles:true}));
          } else {
            area.innerHTML = "";
            area.textContent = combined;
            area.dispatchEvent(new InputEvent("input",{bubbles:true,inputType:"insertText",data:combined}));
          }
        }
        const previewFrame = document.querySelector("#preview, #wallpaper, iframe.preview");
        if (previewFrame && "srcdoc" in previewFrame) previewFrame.srcdoc = combined;
        el.classList.add("selected");
        setTimeout(()=>el.classList.remove("selected"),900);
      } catch (err) {
        console.error("Premium wallpaper load failed:", err);
      }
    });
    return el;
  }
  presets.forEach(p => grid.appendChild(card(p)));
})();
