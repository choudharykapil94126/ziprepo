import Banner from "@/components/common/Banner"
import { Footer } from "@/components/common/Footer"
import Header from "@/components/common/Header"
import Styles from '../styles/Home.module.css'
import SevenOffer from '../utility/SevenOffer.json'
import About from "@/components/common/About"
import Numbers from "@/components/common/Numbers"
import Feedbackcard from "@/components/common/feedbackcard"
import Plans from "@/components/common/Plans"
import Coaches from "@/components/coaches"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      {/* 7 Offerings start */}
      <div className={Styles['seven-offer-container']}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={Styles['seven-offer-header']}>
                <h2>7 Offerings</h2>
                <p>We’re all about inspiring people to be happier and healthier in their daily life.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={Styles['seven-offer-item-container']}>
              {SevenOffer.SevenOffer.map((item, index) => {
                return (
                  <div key={index} className={Styles['seven-offer-item']} >
                    <img src={item.image} alt={item.title} />
                    <h3 >{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* 7 Offerings end */}
      <About />
      <Plans />
      <Coaches />
      <Feedbackcard />
      <Numbers />

      <Footer />
    </>
  )
}
