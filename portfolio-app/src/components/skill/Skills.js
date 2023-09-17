import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
   <section id ='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur adipisicing elit. Illum, corporis quas. Earum nam, in ipsum assumenda vero laboriosam blanditiis dolor, perspiciatis optio corporis cumque. In sed ut corrupti vel id.</span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
            <div className="skillBarText">
                <h2>UI/UX design</h2>
                <p>This is a demo text write your content</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Website design</h2>
                <p>This is a demo text write your content</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>App design</h2>
                <p>This is a demo text write your content</p>
            </div>
        </div>
      </div>
   </section>
    
  )
}

export default Skills