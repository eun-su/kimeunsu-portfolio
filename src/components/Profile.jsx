import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/Profile.css";

gsap.registerPlugin(ScrollTrigger); // ✅ ScrollTrigger 등록

const Profile = () => {
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const iamRef = useRef(null);
  const introduceRef = useRef(null);
  const imgTextRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // ✅ ScrollTrigger 애니메이션 적용
    gsap.to([nameRef.current, iamRef.current, introduceRef.current, imgTextRef.current, scrollRef.current], {
      opacity: 1,
      y: 0, // ✅ 아래에서 위로 올라오도록 설정
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3, // ✅ 순차적으로 나타나도록 설정
      scrollTrigger: {
        trigger: profileRef.current, // ✅ profile 섹션이 화면에 나타날 때 실행
        start: "top 75%", // ✅ 스크롤이 섹션의 75%에 도달하면 시작
        end: "bottom 30%",
        scrub: 0.5, // ✅ 스크롤에 따라 부드럽게 실행
        markers: false, // ✅ 디버깅용 마커 비활성화
      },
    });
  }, []);

  return (
  <section id="profile" ref={profileRef}>
  <div className="profile_name" ref={nameRef}>
    <ul>
      <li className="profile_split"><span>KIM</span></li>
      <li className="profile_split"><span>EUN SU</span></li>
    </ul>
  </div>
  <div className="profile_iam" ref={iamRef}>
    <ul>
      <li className="profile_split">UI DESIGNER</li>
      <li className="profile_split">PROGRAMMER</li>
      <li className="profile_split">DEVELOPER</li>
    </ul>
  </div>
  <div className="profile_introduce" ref={introduceRef}>
    <ul>
      <li className="profile_split">공간을 만들고 꾸미는 것을 좋아합니다</li>
      <li className="profile_split">다양한 도구를 활용해 나만의 공간을 디자인하고 그 안에 사람들의 마음이 움직일 수 있기를 바랍니다</li>
      <li className="profile_split">웹 퍼블리싱의 가장 큰 매력은 상상을 현실로 구현하는 과정에 있다고 생각합니다</li>
      <li className="profile_split">구상한 디자인과 인터랙션이 실제로 작동하는 순간 새로운 가능성을 발견하는 기분이 들어요</li>
      <li className="profile_split">더 많은 언어와 기술을 배우고 연구하며 더욱 깊이 있는 작업을 함께하고 싶습니다</li>
    </ul>
  </div>
  <div className="profile_imgText" ref={imgTextRef}>
    <div className="profile_img"></div>
    <div className="profile_text">
      <ul>
        <li className="profile_split_left">I believe that effort and passion ultimately lead to great results.</li>
        <li className="profile_split_left">With a humble attitude, I will meticulously pay attention to every detail</li>
        <li className="profile_split_left">And above all, strive to be a designer who truly enjoys the process.</li>
      </ul>
    </div>
  </div>
  <div className="profile_scroll" ref={scrollRef}>
    <div className="profile_text">
      <span>SCROLL DOWN</span>
      <div className="profile_arrow"></div>
    </div>
    <div className="profile_line"></div>
  </div>
  </section>
  );
};

export default Profile;
