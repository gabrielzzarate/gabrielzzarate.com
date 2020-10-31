import { TimelineMax, Expo } from 'gsap';
import * as targets from './animation-targets';


const timelineAboutSection = new TimelineMax({ onComplete: cb });

export default {
	// transitionSidebar(colorPanel, mainPanel){
	// 	var timelineSidebar = new TimelineMax({ onComplete: cb });
	// 	return timelineSidebar
	// 		.duration(colorPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, 0)
	// 		.duration(mainPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, .1);
	// },
	// transitionMain(colorPanel, mainPanel){
	// 	var timelineMain = new TimelineMax({ onComplete: cb });
	// 	return timelineMain
	// 		.duration(colorPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, 0)
	// 		.duration(mainPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, .1);
	// },
	// animateAboutStart(colorPanel, mainPanel, intro){
	// 	var timeline = new TimelineMax({ onComplete: cb });
	// 	return timeline
	// 		.duration(colorPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, .0)
	// 		.duration(mainPanel, 1.2, {
	// 			scaleX: 1,
	// 			ease: Expo.easeInOut }, .1)
	// 		.staggerFromTo(intro, 2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, 0, 2);
	// },
	// animateAboutSection(){
	// 	return timelineAboutSection
	// 		.staggerFromTo(targets.heading, 2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, 0)
	// 		.fromTo(targets.aboutLine, 1.8, {
	// 			scaleX: 0
	// 		}, {
	// 			scaleX: 1,
	// 			ease: Expo.easeOut
	// 		}, .2);
	// },
	// animateSubSectionSkills(tl){
	// 	return tl
	// 		.fromTo(targets.subSectionSkills, 1.2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, 0)
	// 		.staggerFromTo(targets.skillsListItem, 1.2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, .05, .1);
	// },
	// animateSubSectionTech(tl){
	// 	return tl
	// 		.fromTo(targets.subSectionTech, 1.2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, 0)
	// 		.staggerFromTo(targets.techListItem, 1.2, {
	// 			autoAlpha: 0,
	// 			y: 30
	// 		}, {
	// 			autoAlpha: 1,
	// 			y: 0,
	// 			ease: Expo.easeOut
	// 		}, .05, .1);
	// },
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
		const timelineHome = new TimelineMax({ onComplete: cb });

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

// timeline onComplete callbacks
function cb(){
	//console.log('transition complete');
}


