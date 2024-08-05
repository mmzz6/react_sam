import React, { useEffect, useRef } from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import port01 from "../assets/img/mbc_prot01_code_99.png"
import port02 from "../assets/img/mbc_prot02_eof.png"
import port03 from "../assets/img/mbc_prot03__joteam.png"
import port04 from "../assets/img/mbc_prot04__scoops.png"
import port05 from "../assets/img/mbc_prot05_tamyok.png"
import port06 from "../assets/img/mbc_prot01_code_99.png"
import port07 from "../assets/img/mbc_prot02_eof.png"
import port08 from "../assets/img/mbc_prot03__joteam.png"
import port09 from "../assets/img/mbc_prot04__scoops.png"
import port10 from "../assets/img/mbc_prot05_tamyok.png"

const portText =[
  {
    num:"01",
    title: "code_99팀",
    img: port01,
    img_alt: "code_99 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://tnwjd3887.dothome.co.kr/port1_5"
  },
  {
    num:"02",
    title: "e.o.f 팀",
    img: port02,
    img_alt: "e.o.f 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "tjsdudis.dothome.co.kr/team"
  },
  {
    num:"03",
    title: "jo 팀",
    img: port03,
    img_alt: "jo 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://tlswnsxor.dothome.co.kr/joteam/"
  },
  {
    num:"04",
    title: "2^10 팀",
    img: port04,
    img_alt: "2^10 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://mieum0915.dothome.co.kr/scoops/"
  },
  {
    num:"05",
    title: "무모한도전팀",
    img: port05,
    img_alt: "무모한도전팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "ds1djs.dothome.co.kr/mainpage"
  },
  {
    num:"06",
    title: "code_99팀",
    img: port06,
    img_alt: "code_99 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://tnwjd3887.dothome.co.kr/port1_5"
  },
  {
    num:"07",
    title: "e.o.f 팀",
    img: port07,
    img_alt: "e.o.f 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "tjsdudis.dothome.co.kr/team"
  },
  {
    num:"08",
    title: "jo 팀",
    img: port08,
    img_alt: "jo 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://tlswnsxor.dothome.co.kr/joteam/"
  },
  {
    num:"09",
    title: "2^10 팀",
    img: port09,
    img_alt: "2^10 팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "http://mieum0915.dothome.co.kr/scoops/"
  },
  {
    num:"10",
    title: "무모한도전팀",
    img: port10,
    img_alt: "무모한도전팀",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt a molestias soluta natus magni! Suscipit aliquid, provident dolores laborum vero, exercitationem perferendis laudantium ullam molestias ut, labore commodi cumque?",
    site: "ds1djs.dothome.co.kr/mainpage"
  },
]

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections,{
      xPercent:-120*(sections.length-1),
      ease:"none",
      scrollTrigger:{
        trigger:horizontal,
        start:"top 56px",
        end:()=>"+="+horizontal.offsetWidth,
        pin:true,
        scrub:5,
      }
    })
    return()=>{
      scrollTween.kill();
    }


  },[]);
  return (
    <section id='port' ref={horizontalRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>나의 작품들</em>
        </div>
        <div className="port_wrap">
          {portText.map((port,key)=>(
                      <div className={`port_item s${key+1}`} key={key} ref={(el)=>(sectionRef.current[key]=el)}>
                      <span className='num'>{port.num}</span>
                      <a href={port.site} className='img'>
                        <img src={port.img} alt={port.img_alt} />
                      </a>
                      <h3 className='title'>{port.title}</h3>
                      <p className='desc'>{port.desc}</p>
                      <a href={port.site} className='site'>사이트보기</a>
                    </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Port
