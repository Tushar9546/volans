import React from 'react'
import style from "../Styles/Footer.module.css"
const Footer = () => {
   let data = [
        {
            course:"Learn Six Sigma With Certification Program",
            link:"Learn Six Sigma With Certification Program",
        },
        {
            
            course:"Learn Six Sigma With Certification Program",
            link:"Learn Six Sigma With Certification Program"
        },
        {
            
            course:"Learn Six Sigma With Certification Program",
            link:"Learn Six Sigma With Certification Program"
        }
   ]

  return (
    <section className = {style.footerSection}>
          <div className = {style.footerContainer}>
              <div>
                  <div className = {style.footerlogo}>
                      <img  src="https://volansacademia.com/wp-content/uploads/2021/07/academia-logo-2.png" alt="logo" />
                  </div>
                  <div className = {style.footertext}>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, non. Laudantium commodi suscipit eveniet sint inventore beatae sit architecto! Fuga praesentium, velit cupiditate vel voluptatem odit corrupti sunt alias. Amet!
                      </p>
                  </div>
              </div>
              <div className = {style.footerData}>
                   <div className = {style.footerHeading}><h1>Courses</h1><hr/></div>
                   <div className = {style.footerList}> {
                       data.map((el)=>(
                         <li>{el.course}</li>
                       ))
                    }    
                   </div>
              </div>
              <div className = {style.footerData}>
              <div className = {style.footerHeading}><h1>Quicks Links</h1><hr/></div>
                   <div className = {style.footerList}> {
                       data.map((el)=>(
                         <li>{el.link}</li>
                       ))
                    }    
                   </div>
              </div>
          </div>
    </section>
  )
}

export default Footer
