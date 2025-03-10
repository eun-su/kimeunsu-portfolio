import React, { useEffect, useRef } from "react";
import "../assets/css/FlexBox.css";
import { 
  moveBoxLeft,
  moveBoxRight,
  moveBoxDownLeft5,
  moveBoxDownLeft6,
  moveBoxLeftScale8,
  moveBoxLeftScale9,
  moveBoxLeft11,
  moveBoxDown12,
  moveBoxLeftRight13,
  changeTextOnScroll
} from "../utils/gsapFlexBox";

const FlexBox = () => {
  const oldTextRef1 = useRef(null);
  const newTextRef1 = useRef(null);
  const triggerRef1 = useRef(null);

  const oldTextRef2 = useRef(null);
  const newTextRef2 = useRef(null);
  const triggerRef2 = useRef(null);

  // 트리거 ↑

  const rowBox1 = useRef(null);
  const rowBox2 = useRef(null);
  const rowBox3 = useRef(null);

  const columnBox4 = useRef(null);
  const columnBox5 = useRef(null);
  const columnBox6 = useRef(null);

  const columnBox7 = useRef(null);
  const columnBox8 = useRef(null);
  const columnBox9 = useRef(null);

  const columnBox10 = useRef(null);
  const columnBox11 = useRef(null);
  const columnBox12 = useRef(null);

  const columnBox13 = useRef(null);
  const columnBox14 = useRef(null);
  const columnBox15 = useRef(null);

  const columnBox16 = useRef(null);
  const columnBox17 = useRef(null);
  const columnBox18 = useRef(null);

  useEffect(() => {
    // ✅ 트리거 별
    changeTextOnScroll(oldTextRef1.current, newTextRef1.current, triggerRef1.current);
    changeTextOnScroll(oldTextRef2.current, newTextRef2.current, triggerRef2.current);

    // ✅ 1 (row 관련 애니메이션)
    moveBoxRight(rowBox1.current);  // 오른쪽 200 이동
    moveBoxLeft(rowBox3.current);  // 왼쪽 200 이동

    // ✅ 2 (column 관련 애니메이션)
    moveBoxDownLeft5(columnBox5.current);   // 위 이동
    moveBoxDownLeft6(columnBox6.current); // 다시 아래 이동

    // ✅ 3 (nowrap 관련 애니메이션)
    moveBoxLeftScale8(columnBox8.current);   // 위 이동
    moveBoxLeftScale9(columnBox9.current); // 다시 아래 이동

    moveBoxLeft11(columnBox11.current); // 다시 아래 이동
    moveBoxDown12(columnBox12.current); // 다시 아래 이동

    moveBoxLeftRight13(columnBox13.current); // 다시 아래 이동
    moveBoxLeftRight13(columnBox14.current); // 다시 아래 이동
    moveBoxLeftRight13(columnBox15.current); // 다시 아래 이동
  }, []);

  return (
    <div className="flex-page">
      {/* ✅ 첫번째 그룹 flex-direction */}
      <div className="title-box">
          <h2 className="title-text">flex-direction</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">배치 방향</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          배치되는 축의 방향을 결정합니다
      </div>
      {/* 1-1 그룹 (Row 전환) */}
      <section className="flex-section-1">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">row : 가로 배치</div>
            <div className="flex-description-box">
              row → 가로좌측시작배치 (기본값)
              <br/>row-reverse → 가로우측시작배치
            </div>
          </div>
          <div className="flex-container-box" ref={triggerRef1}>
            <div className="flex-item-title">
              <span className="old-text" ref={oldTextRef1}>flex-direction : row</span>
              <span className="new-text" ref={newTextRef1} style={{ display: "none" }}>flex-direction : row-reverse</span>
            </div>
            <div className="flex-item-box" ref={rowBox1}>Box 1</div>
            <div className="flex-item-box" ref={rowBox2}>Box 2</div>
            <div className="flex-item-box" ref={rowBox3}>Box 3</div>
          </div>
        </div>
      </section>
      {/* 1-2 그룹 (Column 전환) */}
      <section className="flex-section-2">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">column : 세로 배치</div>
            <div className="flex-description-box">
              column → 세로좌측시작배치
              <br/>colunm-reverse → 세로우측시작배치
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-title">
              <span>flex-direction : column</span>
            </div>
            <div className="flex-item-box" ref={columnBox4}>Box 4</div>
            <div className="flex-item-box" ref={columnBox5}>Box 5</div>
            <div className="flex-item-box" ref={columnBox6}>Box 6</div>
          </div>
        </div>
      </section>

      {/* ✅ 두번째 그룹 flex-wrap */}
      <div className="title-box">
          <h2 className="title-text">flex-wrap</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">줄넘김 처리</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
        내용들을 한줄에 담을 공간이 없을 때 줄바꿈 처리를 결정합니다
      </div>
      {/* 2-1 flex-wrap */}
      <section className="flex-section-3">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">nowrap : 줄바꿈 없음</div>
            <div className="flex-description-box">
              넘치는 만큼 화면 밖으로 잘림
            </div>
          </div>
          <div className="flex-container-box flex-container-nowrap">
            <div className="flex-item-box" ref={columnBox7}>Box 7</div>
            <div className="flex-item-box" ref={columnBox8}>Box 8</div>
            <div className="flex-item-box" ref={columnBox9}>Box 9</div>
          </div>
        </div>
      </section>
      {/* 2-2 flex-wrap */}
      <section className="flex-section-4">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">wrap : 줄바꿈</div>
            <div className="flex-description-box">
            wrap → 마지막 요소가 줄바꿈 됩니다
            <br/>wrap-reverse → 마지막 요소가 맨 앞으로 줄바꿈 됩니다
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box" ref={columnBox10}>Box 10</div>
            <div className="flex-item-box" ref={columnBox11}>Box 11</div>
            <div className="flex-item-box" ref={columnBox12}>Box 12</div>
          </div>
        </div>
      </section>

      {/* ✅ 세번째 그룹 */}
      <div className="title-box">
          <h2 className="title-text">justify-content</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">정렬 방법</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          내용 요소들를 정렬하는 방식을 결정합니다
      </div>
      {/* 3-1 justify-content */}
      <section className="flex-section-5">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">flex-start & flex-end</div>
            <div className="flex-description-box">
              flex-start → 기본값 좌측/위 정렬
              <br/>flex-end → 우측/세로 정렬
            </div>
          </div>
          <div className="flex-container-box" ref={triggerRef2}>
            <div className="flex-item-title">
              <span className="old-text" ref={oldTextRef2}>justify-content : flex-start</span>
              <span className="new-text" ref={newTextRef2} style={{ display: "none" }}>justify-content : flex-end</span>
            </div>
            <div className="flex-item-box-20" ref={columnBox13}>Box 13</div>
            <div className="flex-item-box-20" ref={columnBox14}>Box 14</div>
            <div className="flex-item-box-20" ref={columnBox15}>Box 15</div>
          </div>
        </div>
      </section>
      {/* 3-2 justify-conten */}
      <section className="flex-section-5">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">center</div>
            <div className="flex-description-box">
              전체 틀의 길이를 기준으로 가운데 정렬
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box-20" ref={columnBox16}>Box 16</div>
            <div className="flex-item-box-20" ref={columnBox17}>Box 17</div>
            <div className="flex-item-box-20" ref={columnBox18}>Box 18</div>
          </div>
        </div>
      </section>

      {/* ✅ 6~12단계 */}
      {[6, 7, 8, 9, 10, 11, 12].map((num) => (
        <section key={num} className={`flex-section-${num}`}>
          <div className="flex-container-section">
            <div className="flex-explanation-box">
              <div className="flex-title-box">diplay flex 속성 예제</div>
              <div className="flex-description-box">
                기타 flex 속성을 테스트 카드가 추가됩니다
              </div>
            </div>
            <div className="flex-container-box">
              <div className="flex-item-box">Box {num * 3 - 2}</div>
              <div className="flex-item-box">Box {num * 3 - 1}</div>
              <div className="flex-item-box">Box {num * 3}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FlexBox;
