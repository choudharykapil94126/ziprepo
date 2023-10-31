import React from 'react';
import Styles from '../../styles/numbers.module.css';

const Numbers = () => {
  return (
      
     <div className={`container ${Styles.up_number}`}>
        <div className={`container ${Styles.up_number_content}`}>
        <div className={`container ${Styles.number_icon}`} >
          <img src="/assets/dashboard/users.svg" alt="users img" />
          
        
            <p  className={`container ${Styles.p_head}`}>140K+</p>
            <p className={`container ${Styles.p_para}`}>Healthy Users</p>
        </div>

        <div className={`container ${Styles.number_icon}`}>
        <img src="/assets/dashboard/video.svg" alt="Videos" />
       
            <p className={`container ${Styles.p_head}`}>310K+</p>
            <p className={`container ${Styles.p_para}`}>Live Sessions</p>
        </div>


        <div className={`container ${Styles.number_icon}`}>
        <img src="/assets/dashboard/coaches.svg" alt="coaches" />
        
        
            <p className={`container ${Styles.p_head}`}>4K+</p>
            <p className={`container ${Styles.p_para}`}>Qualified Coaches</p>
        </div>


        <div className={`container ${Styles.number_icon}`}>

        <img src="/assets/dashboard/clients.svg" alt="clients" />
        
       
            <p className={`container ${Styles.p_head}`}>500+</p>
            <p className={`container ${Styles.p_para}`}>Enterprise Clients</p>
        </div>

        </div>
        

    </div>
  )
}

export default Numbers;