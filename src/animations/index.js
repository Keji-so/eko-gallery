import gsap from "gsap"
import { TimelineLite, ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, TimelineLite);


export const imgAnim = () => {



    gsap.utils.toArray("#bottom").forEach(container => {
        let tl = gsap.timeline()
    
        let revealLeft = container.querySelectorAll(".reveal-left")
        let revealRight = container.querySelectorAll(".reveal-right")
        let image = container.querySelectorAll(".pix");
        let imageReveal = container.querySelectorAll(".cover");
    
        tl.to(revealLeft, 0.3, {
            css: {visibility: "visible"}
        }).to(revealRight, 0, {
            css: {visibility: "visible"}
        }).to(imageReveal, {
            duration: 2,
            width: 0,
            ease: "Expo.easeOut"
        }).from(image, {
            duration: 1.4,
            scale: 1.5,
            ease: "Expo.easeOut",
            delay: -2
        })
      })


}

export const textAnim = () => {

    let tl = gsap.timeline()
    
    let text = document.querySelector(".welcome")
    let button = document.querySelector(".landing-btn")

    tl.from(text, {
      duration: 1.5,
      x: -100,
      opacity: 0,
      ease: "Expo.easeOut",
      delay: 0.5
    }).from(button, {
        duration: 0.5,
        x: -100,
        opacity: 0,
        ease: "Expo.easeOut",
      })


}


