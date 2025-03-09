import React, { useEffect, useRef } from "react";
import "../assets/css/FlexBox.css";
import { moveBoxLeft, moveBoxRight, moveBoxDownleft5, moveBoxDownleft6 } from "../utils/gsapFlexBox";

const FlexBox = () => {
  const rowBox1 = useRef(null);
  const rowBox2 = useRef(null);
  const rowBox3 = useRef(null);

  const columnBox4 = useRef(null);
  const columnBox5 = useRef(null);
  const columnBox6 = useRef(null);

  useEffect(() => {
    // ✅ 첫 번째 그룹 (row 관련 애니메이션)
    moveBoxRight(rowBox1.current);  // 오른쪽 200 이동
    moveBoxLeft(rowBox3.current);  // 왼쪽 200 이동

    // ✅ 두 번째 그룹 (column 관련 애니메이션)
    moveBoxDownleft5(columnBox5.current);   // 위 이동
    moveBoxDownleft6(columnBox6.current); // 다시 아래 이동
  }, []);

  return (
    <div className="flex-page">
      {/* ✅ 첫 번째 그룹 (Row 전환) */}
      <div className="title-box">
          <h2 className="title-text">flex-direction</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">배치 방향</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          배치되는 축의 방향을 결정합니다.
        <br/>
      </div>
      <section className="flex-section-1">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">row : 가로 배치</div>
            <div className="flex-description-box">
              row → 가로좌측시작배치 (기본값)
              <br/>row-reverse → 가로우측시작배치
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box" ref={rowBox1}>Box 1</div>
            <div className="flex-item-box" ref={rowBox2}>Box 2</div>
            <div className="flex-item-box" ref={rowBox3}>Box 3</div>
          </div>
        </div>
      </section>

      {/* ✅ 두 번째 그룹 (Column 전환) */}
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
            <div className="flex-item-box" ref={columnBox4}>Box 4</div>
            <div className="flex-item-box" ref={columnBox5}>Box 5</div>
            <div className="flex-item-box" ref={columnBox6}>Box 6</div>
          </div>
        </div>
      </section>

      {/* ✅ 3단계 */}
      <section className="flex-section-3">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">row : flex-wrap 적용</div>
            <div className="flex-description-box">
              flex-wrap을 적용하여 줄바꿈 처리를 확인할 수 있습니다.
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box">Box 7</div>
            <div className="flex-item-box">Box 8</div>
            <div className="flex-item-box">Box 9</div>
          </div>
        </div>
      </section>

      {/* ✅ 4단계 */}
      <section className="flex-section-4">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">column : flex-wrap 적용</div>
            <div className="flex-description-box">
              flex-wrap을 적용하여 줄바꿈 처리를 확인할 수 있습니다.
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box">Box 10</div>
            <div className="flex-item-box">Box 11</div>
            <div className="flex-item-box">Box 12</div>
          </div>
        </div>
      </section>

      {/* ✅ 5단계 */}
      <section className="flex-section-5">
        <div className="flex-container-section">
          <div className="flex-explanation-box">
            <div className="flex-title-box">row : justify-content</div>
            <div className="flex-description-box">
              justify-content를 사용하여 정렬 방식을 적용합니다.
            </div>
          </div>
          <div className="flex-container-box">
            <div className="flex-item-box">Box 13</div>
            <div className="flex-item-box">Box 14</div>
            <div className="flex-item-box">Box 15</div>
          </div>
        </div>
      </section>

      {/* ✅ 6~12단계 */}
      {[6, 7, 8, 9, 10, 11, 12].map((num) => (
        <section key={num} className={`flex-section-${num}`}>
          <div className="flex-container-section">
            <div className="flex-explanation-box">
              <div className="flex-title-box">row : 기타 flex 속성</div>
              <div className="flex-description-box">
                기타 flex 속성을 테스트하는 단계입니다.
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
