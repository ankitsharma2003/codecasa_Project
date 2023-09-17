import React from 'react'
import './Works.css';
import Portfolio1  from '../../assets/portfolio-1.png';
import Portfolio2  from '../../assets/portfolio-2.png';
import Portfolio3  from '../../assets/portfolio-3.png';
import Portfolio4  from '../../assets/portfolio-4.png';
import Portfolio5  from '../../assets/portfolio-5.png';
import Portfolio6  from '../../assets/portfolio-6.png';


function Works() {
  return (
     <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, delectus! Totam magni ad blanditiis! Voluptas similique reiciendis adipisci magni totam amet unde fugiat debitis, vitae rerum, consectetur illum modi deserunt.</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className='worksImg' />
            <img src={Portfolio2} alt="" className='worksImg' />
            <img src={Portfolio3} alt="" className='worksImg' />
            <img src={Portfolio4} alt="" className='worksImg' />
            <img src={Portfolio5} alt="" className='worksImg' />
            <img src={Portfolio6} alt="" className='worksImg' />
        </div>
        <button className='worksBtn'>See more</button>
     </section>
  )
}

export default Works