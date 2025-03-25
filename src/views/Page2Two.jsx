import React, { useState } from "react";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import Breadcrumb from "../components/Breadcrumb";
import FullScreenCalendar from '../components/FullScreenCalendar';
import "../assets/css/Page2One.css";
import BackgroundTrigger from "../components/BackgroundTrigger";

const Page2Two = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  // 날짜 선택 시 이벤트 핸들러
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setShowOptions(true);
  };

  return (
    <div>
    <BackgroundTrigger bgColor="#f3ede8" textColor="#000000">
    <main className="page-main">
      <h2 id="slideLink" className="titleLink-none section-title">Calendar</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
      
        <div className="title-box">
          <h2 className="title-text">jQuery Calendar</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS jQuery</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          jQuery 이용한 일반 달력 & 예약 날짜 선택 (작업중)
        </div>
    <FullScreenCalendar />
    <div className="inquiry-container">
      <h2>날짜 예약 문의</h2>
      
      {/* 이름, 연락처, 이메일 */}
      <div className="form-group">
        <label>이름</label>
        <input type="text" className="input-field" placeholder="이름을 입력하세요" />
      </div>
      <div className="form-group">
        <label>연락처</label>
        <input type="text" className="input-field" placeholder="연락처를 입력하세요" />
      </div>
      <div className="form-group">
        <label>이메일</label>
        <input type="email" className="input-field" placeholder="이메일을 입력하세요" />
      </div>

      {/* 날짜 선택 (Calendar.jsx 활용) */}
      <div className="form-group">
        <label>예약 날짜</label>
        <Calendar onChange={handleDateChange} />
        <input type="text" className="input-field" value={selectedDate} readOnly />
      </div>

      {/* 날짜 선택 후 장소 & 시간 선택 박스 표시 */}
      {showOptions && (
        <>
          <div className="form-group">
            <label>장소 선택</label>
            <select className="input-field">
              <option>선택하세요</option>
              <option>서울</option>
              <option>부산</option>
              <option>대구</option>
              <option>인천</option>
              <option>광주</option>
            </select>
          </div>

          <div className="form-group">
            <label>시간 선택</label>
            <select className="input-field">
              <option>선택하세요</option>
              <option>오전 10:00</option>
              <option>오후 1:00</option>
              <option>오후 3:00</option>
              <option>오후 5:00</option>
            </select>
          </div>
        </>
      )}

      {/* 추가 문의 설명 */}
      <div className="form-group">
        <label>추가 문의 사항</label>
        <textarea className="input-textarea" placeholder="추가로 문의하실 내용을 입력하세요"></textarea>
      </div>

      {/* 첨부파일 */}
      <div className="form-group">
        <label>첨부파일 업로드</label>
        <input type="file" className="file-upload" />
      </div>

      {/* 버튼 */}
      <div className="button-group">
        <button className="btn btn-secondary">임시저장</button>
        <button className="btn btn-primary">저장</button>
      </div>
    </div>
    <Contact />
    <Footer />
    </main>
    </BackgroundTrigger>
    </div>
  );
};

export default Page2Two;
