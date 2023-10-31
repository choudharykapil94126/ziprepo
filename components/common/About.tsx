import React from 'react';
import Styles from '../../styles/about.module.css'

const About = () => {
  return (
    <div className={`container ${Styles.main}`}><div className={`container ${Styles.aboutmain}`}>
    <p className={`container ${Styles.aboutmainhead}`}>About us</p>
    <p className={`container ${Styles.aboutmaincont}`}>Gateway To Your Wellness, Health & Happiness</p>
    <div className={`container ${Styles.aboutinner}`}>
        <div className={`container ${Styles.leftabout}`}>
            <p className={`container ${Styles.aboutinnerhead}`}>Our Mission</p>
            <p className={`container ${Styles.aboutinnercont}`}>Empower individuals to take control of their well-being and lead healthier lives. We strive to provide a comprehensive platform that promotes physical, mental, and emotional wellness.</p>
        </div>
        <div className={`container ${Styles.middleabout}`}>
            <img src='/assets/banner/banner2.png' alt="not" />
        </div>
        <div className={`container ${Styles.rightabout}`}>
            <p className={`container ${Styles.aboutinnerhead}`}>Community Support</p>
            <p className={`container ${Styles.aboutinnercont}`}>We believe in a holistic approach to wellness, understanding that true well-being encompasses various aspects of one's life. Our app integrates fitness, nutrition, mindfulness, and personal development to support users in achieving a balanced and fulfilling lifestyle.</p>
        </div>
    </div>
</div></div>
  )
}

export default About