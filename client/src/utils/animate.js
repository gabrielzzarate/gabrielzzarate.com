import { TimelineMax, Expo } from 'gsap';


const timelineAboutSection = new TimelineMax({ onComplete: cb });

export default {
	transitionSidebar(colorPanel, mainPanel){
		// var timelineSidebar = new TimelineMax({ onComplete: cb });

		return null;
		// return timelineSidebar
		// 	.duration(colorPanel, 1.2, {
		// 		scaleX: 1,
		// 		ease: Expo.easeInOut }, 0)
		// 	.duration(mainPanel, 1.2, {
		// 		scaleX: 1,
		// 		ease: Expo.easeInOut }, .1);
	},
	transitionMain(colorPanel, mainPanel){
		var timelineMain = new TimelineMax({ onComplete: cb });
		// .duration(colorPanel, 1.2, {
		// 	scaleX: 1,
		// 	ease: Expo.easeInOut }, 0)
		// .duration(mainPanel, 1.2, {
		// 	scaleX: 1,
		// 	ease: Expo.easeInOut }, .1);


		return timelineMain
			.staggerFromTo(colorPanel, 1.2, {
				scaleX: 0,
			}, {
				scaleX: 1,
				ease: Expo.easeInOut
			}, 0, 1.8)
			.staggerFromTo(mainPanel, 1.2, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeInOut
			}, .1, 2.5);

	},
	animateAboutStart(introOne, introTwo){
		var timeline = new TimelineMax({ onComplete: cb });
		return timeline
			.staggerFromTo(introOne, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0);
			// .staggerFromTo(introTwo, 2, {
			// 	autoAlpha: 0,
			// 	y: 30
			// }, {
			// 	autoAlpha: 1,
			// 	y: 0,
			// 	ease: Expo.easeOut
			// }, 0);
			
	},
	animateAboutSection(heading, line){
		return timelineAboutSection
			.staggerFromTo(heading, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0.5)
			.fromTo(line, 1.8, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeOut
			}, .2);
	},
	animateSubSectionSkills(tl, section, item){
		return tl
			.fromTo(section, 1.2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0)
			.staggerFromTo(item, 1.2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, .05, .1);
	},
	animateSubSectionTech(tl, section, item){
		return tl
			.fromTo(section, 1.2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0)
			.staggerFromTo(item, 1.2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, .05, .1);
	},
	// animateProjectEnter(){
	// 	const timelineProject = new TimelineMax({ onComplete: cb });

	// 	return timelineProject
	// 		.staggerFromTo(targets.projectContainer, 2, {
	// 			autoAlpha: 0,
	// 			y: 40
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, 0, 1.4);

	// },
	animateHome(heading, line){
		const timelineHome = new TimelineMax({ onComplete: cbHome });

		return timelineHome
			// .staggerFromTo(targets.cardOne, 2, {
			// 	autoAlpha: 0,
			// 	y: 40
			// }, {
			// 	autoAlpha: 1,
			// 	y: 0,
			// 	ease: Expo.easeOut
			// }, 0, 1.4)
			// .staggerFromTo(targets.cardTwo, 2, {
			// 	autoAlpha: 0,
			// 	y: 40
			// }, {
			// 	autoAlpha: 1,
			// 	y: 0,
			// 	ease: Expo.easeOut
			// }, 0, 1.8)
			// .staggerFromTo(targets.cardThree, 2, {
			// 	autoAlpha: 0,
			// 	y: 40
			// }, {
			// 	autoAlpha: 1,
			// 	y: 0,
			// 	ease: Expo.easeOut
			// }, 0, 2)
			// .staggerFromTo(targets.cardFour, 2, {
			// 	autoAlpha: 0,
			// 	y: 40
			// }, {
			// 	autoAlpha: 1,
			// 	y: 0,
			// 	ease: Expo.easeOut
			// }, 0, 2.2)
			.staggerFromTo(heading, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 1.8)
			.fromTo(line, 1.8, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeOut
			}, 1.6, 2.5);
	}
}

function cbHome() {
	console.log('home animation done')
}
// timeline onComplete callbacks
function cb(props){
	console.log('transition complete', props);
}

