import { createGlobalStyle } from 'styled-components';

// const colors = ['#f1eee5', '#eeefe8', '#f5f0e', '#f3eee', '#f3eeed', '#eef1ef'];

const palettes = [
	{
		background: '#eef1ef',
		text: '#665d79',
		accentText: '#7eae8e',
		accent: '#fa7538',
	},
	{
		background: '#eaeff1',
		text: '#6b4d47',
		accentText: '#6f939f',
		accent: '#f66',
	},
	{
		background: '#eeefe7',
		text: '#614e65',
		accentText: '#919749',
		accent: '#614e65',
	},
	{
		background: '#f5f0e0',
		text: '#74586a',
		accentText: '#bf986e',
		accent: '#ed6e87',
	},
	{
		background: '#e0d7cc',
		text: '#74586a',
		accentText: '#bf986e',
		accent: "#f4a4b4",
	}
];
const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #23282b;
    --yellow: #ffc600;
		--ltgrey: #787878;
    --white: #fff;
    --grey: #788891;
		--background: ${randomPalette.background};
		--text: ${randomPalette.text};
		--accent: ${randomPalette.accent};
		--accent-text: ${randomPalette.accentText};
		--heading-font: Ciutadella;
		--body-font: 'Freight Text Pro';
		--mobile: '480px';
  }

	* {
		box-sizing: border-box;
	}
  body {
		min-height: 100vh;
	 	overflow-y: auto;
	 	overflow-x: hidden;
		height: 100%;
		background-color: var(--background);
		color: var(--text);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--black);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

// layout

article {
	p {
		font-size: 20px;

		@media screen and (max-width: 900px) {
			font-size: 18px;
		}
	}
	h2 {
		margin-top: 20px;
	}

	a {
		font-family: var(--body-font);
		background-image: linear-gradient(to top, var(--accent) 0, var(--accent) .13169rem, rgba(255,102,140,0) .13169rem, rgba(255,102,140,0) 100%);
    transition: 0.25s;

    &:hover {
      color: var(--accent);

      p {
        color: var(--text);
      }
    }
	}
}

.postDate {
	text-transform: uppercase;
	display: block;
	color: var(--accent-text);
	line-height: 1.2rem;
}


figure {
	display: block;
	width: 100%;
	margin: 40px auto;
}

figcaption {
	font-size: 0.9rem;
	padding-top: 1em;
	font-family: var(--heading-font);

	&.maxWidth {
		max-width: 640px;
		margin: 0 auto;
	}
}


// hide anchor icon in posts 
.hash-anchor {
	svg {
		display: none;
	}
}

section {
	padding: 60px 0;

	@media screen and (max-width: 450px) {
		padding: 20px 0;
	}
}

@keyframes modal-rise {
  0%   { opacity:0; transform:translateY(100px); -webkit-transform:translateY(100px); }
  100%   { opacity:1; transform:translateY(0); -webkit-transform:translateY(0); }
}


@keyframes modal-zoom {
  0%   { opacity:0; transform:scale(0); -webkit-transform:scale(0); }
  100%   { opacity:1; transform:scale(1); -webkit-transform:scale(1); }
}

@keyframes preload-pseudo-loader {
  0%   { width: 0; }
  15%  { width: 0; }
  100% { width: 100%; }
}

@keyframes preload-background-fade {
  0%   { background: $light; }
  100% { background: $blue; }
}

@keyframes pocket-slide {
  0%   { transform:translateX(-420px); -webkit-transform:translateX(-420px); }
  40%   { transform:translateX(-420px); -webkit-transform:translateX(-420px); }
  100%   { transform:translateX(0); -webkit-transform:translateX(0); }
}


@keyframes pocket-slide-right {
  0%   { transform:translateX(420px); -webkit-transform:translateX(420px); }
  40%   { transform:translateX(420px); -webkit-transform:translateX(420px); }
  100%   { transform:translateX(0); -webkit-transform:translateX(0); }
}

@keyframes ping {
  0%   { transform:scale(0); -webkit-transform:scale(0); opacity: 1;}
  70%   { transform:scale(0); -webkit-transform:scale(0); opacity: 1;}
  100%   { transform:scale(2.5); -webkit-transform:scale(2.5); opacity: 0;}
}


@keyframes social-share-facebook {
  0%   { opacity: 0; transform:translateY(60px); -webkit-transform:translateY(60px); }
  100%   { opacity: 1; transform:translateY(0); -webkit-transform:translateY(0); }
}


@keyframes social-share-twitter {
  0%   { opacity: 0; transform:translateY(120px); -webkit-transform:translateY(120px); }
  25%   { opacity: 0; transform:translateY(120px); -webkit-transform:translateY(120px); }
  100%   { opacity: 1; transform:translateY(0); -webkit-transform:translateY(0); }
}


@keyframes social-share-facebook-rev {
  0%   { opacity: 1; transform:translateY(0); -webkit-transform:translateY(0); }
  10%   { opacity: 0; transform:translateY(60px); -webkit-transform:translateY(60px); }
  100%   { opacity: 0; transform:translateY(60px); -webkit-transform:translateY(60px); }
}


@keyframes social-share-twitter-rev {
  0%   { opacity: 1; transform:translateY(0); -webkit-transform:translateY(0); }
  2.5%   { opacity: 0; transform:translateY(0); -webkit-transform:translateY(0); }
  10%   { opacity: 0; transform:translateY(120px); -webkit-transform:translateY(120px); }
  100%   { opacity: 0; transform:translateY(120px); -webkit-transform:translateY(120px); }
}


@keyframes share-sprite {
  0%   { background-position: 0 0; }
  100%   { background-position: 0 -432px; }
}


@keyframes share-sprite-rev {
  0%   { background-position: 0 -432px; }
  100%   { background-position: 0 0; }
}


@keyframes story-overlay {
  0%   { opacity: 0; transform:translateY(50%); -webkit-transform:translateY(50%); }
  50%   { opacity: 1; transform:translateY(25%); -webkit-transform:translateY(25%); }
  100%   { opacity: 1; transform:translateY(0); -webkit-transform:translateY(0); }
}


@keyframes slide-in-left {
	0%   { opacity: 0; transform:translate3d(100%, 0, 0); -webkit-transform:translate3d(100%, 0, 0); }
	5%   { opacity: 1; }
	100%   { opacity: 1; transform:translate3d(0, 0 , 0); -webkit-transform:translate3d(0, 0, 0); }
}


@keyframes slide-in-right {
	0%   { opacity: 0; transform:translate3d(-100%, 0, 0); -webkit-transform:translate3d(-100%, 0, 0); }
	5%   { opacity: 1; }
	100%   { opacity: 1; transform:translate3d(0, 0 , 0); -webkit-transform:translate3d(0, 0, 0); }
}


@keyframes slide-out-right {
	0%   { opacity: 1; transform:translate3d(0, 0, 0); -webkit-transform:translate3d(0, 0, 0); }
	50%   { opacity: 0; }
	100%   { opacity: 0; transform:translate3d(100%, 0 , 0); -webkit-transform:translate3d(100%, 0, 0); }
}


@keyframes slide-out-left {
	0%   { opacity: 1; transform:translate3d(0, 0, 0); -webkit-transform:translate3d(0, 0, 0); }
	50%   { opacity: 0; }
	100%   { opacity: 0; transform:translate3d(-100%, 0 , 0); -webkit-transform:translate3d(-100%, 0, 0); }
}


// Animate Dropdown Items

@keyframes dropdown-toggle {
	0%   { background-position: left -200px;  }
	100%   { background-position: left 0;  }
}

@keyframes remove-dropdown-items {
  0%   { opacity: 1;  height: 136px; }
  100%   { opacity: 0;  height: 0; }
}


.main-background, .sidebar-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-piece {
 position: absolute;
 top: 0;
 right: 0;
 width: 100%;
 height: 100%;
 //z-index: -1;
 transform-origin: 100% 100% 0;
 transform: scaleX(0);
 //transition: all 1s;
 //z-index: 400;
}

.background-piece-left-main,
.background-piece-left-color {
  width: 100%;
}
.background-piece-right-main,
.background-piece-right-color {
  right: 0;
  width: 100%;
}
.background-piece-left-color,
.background-piece-right-color {
  background: #e8eaef;
}
.background-piece-left-main,
.background-piece-right-main {
  background: #fff;
}

/// Navigation Links

.transition-link {

  span {
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;

    &:nth-of-type(1){
      -webkit-transition-delay: .04s;
      transition-delay: .04s;
    }

    &:nth-of-type(2){
      -webkit-transition-delay: .08s;
      transition-delay: .08s
    }

    &:nth-of-type(3) {
      -webkit-transition-delay: .12s;
      transition-delay: .12s;
    }

    &:nth-of-type(4){
      transition-delay: .16s;
      -webkit-transition-delay: .16s;
    }

    &:nth-of-type(5){
      -webkit-transition-delay: .2s;
      transition-delay: .2s
    }

	&:nth-of-type(7){
     	-webkit-transition-delay: .24s;
    	transition-delay: .24s;
    }

    &:nth-of-type(7){
      	-webkit-transition-delay: .28s;
    	transition-delay: .28s;
    }

    &:nth-of-type(8){
     	-webkit-transition-delay: .32s;
    	transition-delay: .32s;
    }

    &:nth-of-type(9){
     	-webkit-transition-delay: .36s;
    	transition-delay: .36s;
    }

    &:nth-of-type(10){
     	 -webkit-transition-delay: .4s;
   		 transition-delay: .4s;
    }

    &:nth-of-type(11){
     	-webkit-transition-delay: .44s;
    	transition-delay: .44s;
    }
  }
}

.nav-link span {
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out
}
.nav-link span:nth-of-type(1) {
    -webkit-transition-delay: .04s;
    transition-delay: .04s
}
.nav-link span:nth-of-type(2) {
    -webkit-transition-delay: .08s;
    transition-delay: .08s
}
.nav-link span:nth-of-type(3) {
    -webkit-transition-delay: .12s;
    transition-delay: .12s
}
.nav-link span:nth-of-type(4) {
    -webkit-transition-delay: .16s;
    transition-delay: .16s
}
.nav-link span:nth-of-type(5) {
    -webkit-transition-delay: .2s;
    transition-delay: .2s
}
.nav-link span:nth-of-type(6) {
    -webkit-transition-delay: .24s;
    transition-delay: .24s
}
.nav-link span:nth-of-type(7) {
    -webkit-transition-delay: .28s;
    transition-delay: .28s
}
.nav-link span:nth-of-type(8) {
    -webkit-transition-delay: .32s;
    transition-delay: .32s
}
.nav-link span:nth-of-type(9) {
    -webkit-transition-delay: .36s;
    transition-delay: .36s
}
.nav-link span:nth-of-type(10) {
    -webkit-transition-delay: .4s;
    transition-delay: .4s
}
.nav-link span:nth-of-type(11) {
    -webkit-transition-delay: .44s;
    transition-delay: .44s
}
.nav-link span:nth-of-type(12) {
    -webkit-transition-delay: .48s;
    transition-delay: .48s
}
.nav-link span:nth-of-type(13) {
    -webkit-transition-delay: .52s;
    transition-delay: .52s
}
.nav-link span:nth-of-type(14) {
    -webkit-transition-delay: .56s;
    transition-delay: .56s
}
.nav-link span:nth-of-type(15) {
    -webkit-transition-delay: .6s;
    transition-delay: .6s
}
.nav-link:hover span {
    color: #787878;
}


// React CSS Transitions

// Fade

.fade-enter {
  opacity: 0.00;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 3s ease-in;
}

.fade-leave {
  opacity: 1;
}

.fade-leave.fade-leave-active {
  opacity: 0.01;
  transition: opacity 3s ease-in;
}


.fade-appear {
  opacity: 0.00;
}

.fade-appear.fade-appear-active {
  opacity: 1;
  transition: opacity .5s ease-in;
}

// change view

.change-view-enter {
	opacity: 0.01 !important;
	transition-delay: 1s;
	//transition: 1 ease-out;
}

.change-view-enter.change-view-enter-active {
	opacity: 0;
}

.change-view-leave {
	opacity: 0;
}

.change-view-leave.change-view-leave-active {
	opacity: 0;
}

.change-view-appear {
	opacity: 0.01 !important;
	transition-delay: 1.3s;
	transition: all 3s ease-out;
}

.change-view-appear.change-view-appear-active {
	opacity: 1;
	//transition: 1s ease-out;
}

.transition-link {
	span {
    	-webkit-transition: color .8s ease-out;
    	transition: color .8s ease-out;
    	//opacity: 1;

	    &:nth-of-type(1){
	      -webkit-transition-delay: .04s;
	      transition-delay: .04s;
	    }

	    &:nth-of-type(2){
	      -webkit-transition-delay: .08s;
	      transition-delay: .08s
	    }

	    &:nth-of-type(3) {
	      -webkit-transition-delay: .12s;
	      transition-delay: .12s;
	    }

	    &:nth-of-type(4){
	      transition-delay: .16s;
	      -webkit-transition-delay: .16s;
	    }

	    &:nth-of-type(5){
	      -webkit-transition-delay: .2s;
	      transition-delay: .2s
	    }

	  	&:nth-of-type(6){
	      -webkit-transition-delay: .24s;
	      transition-delay: .24s;
	    }

	    &:nth-of-type(7){
	        -webkit-transition-delay: .28s;
	      transition-delay: .28s;
	    }

	    &:nth-of-type(8){
	      -webkit-transition-delay: .32s;
	      transition-delay: .32s;
	    }

	    &:nth-of-type(9){
	      -webkit-transition-delay: .36s;
	      transition-delay: .36s;
	    }

	    &:nth-of-type(10){
	       -webkit-transition-delay: .4s;
	       transition-delay: .4s;
	    }

	    &:nth-of-type(11){
	      -webkit-transition-delay: .44s;
	      transition-delay: .44s;
	    }

	    &:nth-of-type(12){
	    	-webkit-transition-delay: .48s;
	      	transition-delay: .48s;
	    }

	    &:nth-of-type(13){
	    	-webkit-transition-delay: .52s;
	      	transition-delay: .52s;
	    }

	    &:nth-of-type(14){
	    	-webkit-transition-delay: .56s;
	      	transition-delay: .56s;
	    }

	    &.sub-head {
	    	-webkit-transition-delay: .56s;
	      	transition-delay: .56s;
	    }
  	}
}

// heading

.heading-enter {
  span {
  	opacity: 0.00;
  }
}

.heading-enter.heading-enter-active {

  	span {

    	-webkit-transition: opacity .5s ease-out;
    	transition: opacity .5s ease-out;
    	opacity: 1;

	    &:nth-of-type(1){
	      -webkit-transition-delay: .04s;
	      transition-delay: .04s;
	    }

	    &:nth-of-type(2){
	      -webkit-transition-delay: .08s;
	      transition-delay: .08s
	    }

	    &:nth-of-type(3) {
	      -webkit-transition-delay: .12s;
	      transition-delay: .12s;
	    }

	    &:nth-of-type(4){
	      transition-delay: .16s;
	      -webkit-transition-delay: .16s;
	    }

	    &:nth-of-type(5){
	      -webkit-transition-delay: .2s;
	      transition-delay: .2s
	    }

	  	&:nth-of-type(6){
	      -webkit-transition-delay: .24s;
	      transition-delay: .24s;
	    }

	    &:nth-of-type(7){
	        -webkit-transition-delay: .28s;
	      transition-delay: .28s;
	    }

	    &:nth-of-type(8){
	      -webkit-transition-delay: .32s;
	      transition-delay: .32s;
	    }

	    &:nth-of-type(9){
	      -webkit-transition-delay: .36s;
	      transition-delay: .36s;
	    }

	    &:nth-of-type(10){
	       -webkit-transition-delay: .4s;
	       transition-delay: .4s;
	    }

	    &:nth-of-type(11){
	      -webkit-transition-delay: .44s;
	      transition-delay: .44s;
	    }

	    &:nth-of-type(12){
	    	-webkit-transition-delay: .48s;
	      	transition-delay: .48s;
	    }

	    &:nth-of-type(13){
	    	-webkit-transition-delay: .52s;
	      	transition-delay: .52s;
	    }

	    &:nth-of-type(14){
	    	-webkit-transition-delay: .56s;
	      	transition-delay: .56s;
	    }
  	}
}


.heading-appear {
  span {
  	opacity: 0.00;
  }
}

.heading-appear.heading-appear-active {

  	span {
    	-webkit-transition: opacity .8s ease-out;
    	transition: opacity .8s ease-out;
    	transition-delay: 1s;
    	opacity: 1;

	    &:nth-of-type(1){
	      -webkit-transition-delay: 1.04s;
	      transition-delay: 1.04s;
	    }

	    &:nth-of-type(2){
	      -webkit-transition-delay: 1.08s;
	      transition-delay: 1.08s
	    }

	    &:nth-of-type(3) {
	      -webkit-transition-delay: 1.12s;
	      transition-delay: 1.12s;
	    }

	    &:nth-of-type(4){
	      transition-delay: 1.16s;
	      -webkit-transition-delay: 1.16s;
	    }

	    &:nth-of-type(5){
	      -webkit-transition-delay: 1.2s;
	      transition-delay: 1.2s
	    }

	  	&:nth-of-type(6){
	      -webkit-transition-delay: 1.24s;
	      transition-delay: 1.24s;
	    }

	    &:nth-of-type(7){
	        -webkit-transition-delay: 1.28s;
	      transition-delay: 1.28s;
	    }

	    &:nth-of-type(8){
	      -webkit-transition-delay: 1.32s;
	      transition-delay: 1.32s;
	    }

	    &:nth-of-type(9){
	      -webkit-transition-delay: 1.36s;
	      transition-delay: 1.36s;
	    }

	    &:nth-of-type(10){
	       -webkit-transition-delay: 1.4s;
	       transition-delay: 1.4s;
	    }

	    &:nth-of-type(11){
	      -webkit-transition-delay: 1.44s;
	      transition-delay: 1.44s;
	    }

	    &:nth-of-type(12){
	    	-webkit-transition-delay: 1.48s;
	      	transition-delay: 1.48s;
	    }

	    &:nth-of-type(13){
	    	-webkit-transition-delay: 1.52s;
	      	transition-delay: 1.52s;
	    }

	    &:nth-of-type(14){
	    	-webkit-transition-delay: 1.56s;
	      	transition-delay: 1.56s;
	    }

	    &.sub-head {
	    	-webkit-transition-delay: 1.56s;
	      	transition-delay: 1.56s;
	    }
  	}
}


// navigation

.navigation-enter {
	opacity: 0.01;
}

.navigation-enter.navigation-enter-active {
    -webkit-transition: opacity .8s ease-out;
    transition: opacity .8s ease-out;
    opacity: 1;
    transition-delay: .54s;
}


.navigation-appear {
	opacity: 0.01;
}

.navigation-appear.navigation-appear-active {
    -webkit-transition: opacity 1s ease-out;
    transition: opacity 1s ease-out;
    opacity: 1;
    transition-delay: .54s;
}

.cta-link {
	display: flex;
	margin: 40px 0 30px 0;
	height: 60px;
	width: 100%;
	max-width: 700px;
	/* justify-content: center; */
	align-items: center;
	background-color: var(--text);
	color: #eeefe7;
	padding: 0 30px;
	border-radius: .19753rem;

	@media screen and (max-width: 700px) {
		max-width: 400px;
	}

	@media screen and (max-width: 480px) {
		max-width: 100%;
	}

	&:hover {
		a {
			color: var(--accent);
		}
	}

	h2 {
		margin: 0;
	}

	h2, a {
		color: #eeefe7;
	}
}

.flex {
  display: flex;
}
`;

export default GlobalStyles;
