import React from "react";
import { ReactComponent as Service1 } from "../../assets/services-5.svg";
import { ReactComponent as Service2 } from "../../assets/services-6.svg";
import "./service.styles.css";
import useWebAnimations, { jello, wobble, fadeInLeft, fadeInRight } from "@wellyshen/use-web-animations";
import Svg1 from '../svgs/svg1';


const Services = () => {
    const burning = useWebAnimations({
    keyframes: [{opacity: 0},{opacity: 1}],
    timing: {
        duration: 1000,
        iterations: Infinity,
    }
    })

    const jellymation = useWebAnimations({...jello})

    const wobblemation = useWebAnimations({...wobble})

    const FadeInRightText = useWebAnimations({...fadeInRight});

    const FadeInRight2Text = useWebAnimations({...fadeInRight});

    const FadeInLeftText = useWebAnimations({...fadeInLeft});

  return (
    <div className="services-container">
      <div className="service">
        <div className="service1 service-animation1">
          <Service2 onMouseOver={() => {
              if(jellymation !== undefined){
              jellymation.getAnimation().playbackRate = 0.5;
              jellymation.getAnimation().play();
            }
          }} ref={jellymation.ref} className="animation-svg" />
        </div>
        <div onMouseOver={() => {
            if (FadeInRightText !== undefined){
                FadeInRightText.getAnimation().play();
            }
        }} ref={FadeInRightText.ref} className=" service-text">
          <div className="service-textbox1">
            <b>UX Writing</b>
          </div>
          <div className="service-textbox2">
            <div>
              I develop clear and useful text in product interfaces to help
              users reach a specific goal, whether that's completing a form or
              tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to
              push notifications and tooltips.
            </div>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service1 service-animation order2">
          <Service1 onMouseOver={() => {
              if(wobblemation !== undefined){
              wobblemation.getAnimation().playbackRate = 0.4;
              wobblemation.getAnimation().play();
            }
          }} ref={wobblemation.ref} className="animation-svg" />
        </div>
        <div onMouseOver={() => {
            if (FadeInLeftText !== undefined){
                FadeInLeftText.getAnimation().play();
            }
        }} ref={FadeInLeftText.ref} className=" service-text">
          <div className="service-textbox1">
            <b>Content Writing</b>
          </div>
          <div className="service-textbox2">
            <div>
            Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="service1 service-animation ">
        <Svg1 burning={burning} />

        </div>
        <div onMouseOver={() => {
            if (FadeInRight2Text !== undefined){
                FadeInRight2Text.getAnimation().play();
            }
        }} ref={FadeInRight2Text.ref} className=" service-text">
          <div className="service-textbox1">
            <b>Website Copywriting</b>
          </div>
          <div className="service-textbox2">
            <div>
            Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
