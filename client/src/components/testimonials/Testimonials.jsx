import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Farzad Hedayati",
      title: "Member of the Board at Yekom",
      img: "assets/Hedayati.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "Azadehe was responsible to web design and develop Yekom website and internet and programming web pages with html & java script. Being committed to carry her duties, she is creative, having a perseverance and teamwork morale in performing the job.",
    },
    {
      id: 2,
      name: "Behzad Hashemi",
      title: "Direct Manager of DAY Tahviye Pars",
      img: "assets/bidi.jpg",
      icon: "assets/twitter.png",
      desc:
        "She’s already been highly successful in her career. Her talent for solving problems is unique, as is her ability for implementing new ideas.",
      
    },
    {
      id: 3,
      name: "Maryam Mohajerani ",
      title: "Marketing at SDA",
      img: "assets/mary.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "she thrives on hard work and challenges. Her ability to stay calm under fraught conditions has frequently defused tense and stressful situations.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}