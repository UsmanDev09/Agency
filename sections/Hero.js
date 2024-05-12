import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <TitleLogo title='creative' caption='7' className='logobg' /> */}
          <h1 className='hero-title'>WE PROVIDE DEVOPS SERVICES</h1>

          <div className='sub-heading'>
            <div className="flex1"><TitleSm title='GitOps' /> <span>.</span></div>
            <div className="flex1"><TitleSm title='CloudOps' /> <span>.</span></div>
            <div className="flex1"><TitleSm title='DevOps' />  <span>.</span></div>
            <div className="flex1"><TitleSm title='DevSecOps' /> <span>.</span></div>
            <div className="flex1"><TitleSm title='FinOps' /> </div>
          </div>
        </div>
      </section>
      <section id="about" className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last agency you ll ever need' />
            <p>Managing a DevOps infrastructure comes with its set of challenges, from the swift
            evolution of technology to the intricacies of system integrations and escalating
            demands that can burden your team. Our DevOps Consulting services for cloud
            solutions provide seamless maintenance, boundless scalability, and enhancedperformance. Whether it's migrating to innovative platforms, adding new technology
            layers, conducting audits, establishing continuous integration and continuous
            deployment (CI/CD), monitoring, or securing your existing and future environments, we
            are dedicated to fulfilling all your DevOps consulting needs.</p>
          </div>
          <div className='hero-content grid-4 '>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard /> */}
    </>
  )
}

export default Hero
