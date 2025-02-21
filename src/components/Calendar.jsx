import React, { useEffect } from "react";

const Calendar = () => {
  useEffect(() => {
    // jQuery 및 jQuery UI 스크립트 동적 추가
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    jqueryScript.integrity =
      "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==";
    jqueryScript.crossOrigin = "anonymous";
    jqueryScript.referrerPolicy = "no-referrer";
    document.body.appendChild(jqueryScript);

    const jqueryUiScript = document.createElement("script");
    jqueryUiScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
    jqueryUiScript.integrity =
      "sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==";
    jqueryUiScript.crossOrigin = "anonymous";
    jqueryUiScript.referrerPolicy = "no-referrer";
    document.body.appendChild(jqueryUiScript);

    // jQuery UI CSS 추가
    const jqueryUiCSS = document.createElement("link");
    jqueryUiCSS.rel = "stylesheet";
    jqueryUiCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css";
    jqueryUiCSS.integrity =
      "sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==";
    jqueryUiCSS.crossOrigin = "anonymous";
    jqueryUiCSS.referrerPolicy = "no-referrer";
    document.head.appendChild(jqueryUiCSS);

    // jQuery가 로드된 후 datepicker 초기화
    jqueryScript.onload = () => {
      jqueryUiScript.onload = () => {
        window.$.datepicker.setDefaults({
          dateFormat: "yy-mm-dd",
          prevText: "이전 달",
          nextText: "다음 달",
          monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          dayNames: ["일", "월", "화", "수", "목", "금", "토"],
          dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
          dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
          showMonthAfterYear: true,
          yearSuffix: "년",
        });

        window.$(function () {
          window.$(".datepicker").datepicker();
        });
      };
    };

    // 컴포넌트 언마운트 시 jQuery 및 jQuery UI 제거
    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(jqueryUiScript);
      document.head.removeChild(jqueryUiCSS);
    };
  }, []);

  return (
    <div>
      <h2>jQuery Datepicker</h2>
      <input type="text" className="datepicker" />
    </div>
  );
};

export default Calendar;