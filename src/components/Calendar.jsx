import React, { useEffect } from "react";

const Calendar = () => {
  useEffect(() => {
    // jQuery script 로드
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    jqueryScript.integrity =
      "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==";
    jqueryScript.crossOrigin = "anonymous";
    jqueryScript.referrerPolicy = "no-referrer";

    // jQuery UI script 로드
    const jqueryUiScript = document.createElement("script");
    jqueryUiScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
    jqueryUiScript.integrity =
      "sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==";
    jqueryUiScript.crossOrigin = "anonymous";
    jqueryUiScript.referrerPolicy = "no-referrer";

    // jQuery UI CSS 로드
    const jqueryUiCSS = document.createElement("link");
    jqueryUiCSS.rel = "stylesheet";
    jqueryUiCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css";
    jqueryUiCSS.integrity =
      "sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==";
    jqueryUiCSS.crossOrigin = "anonymous";
    jqueryUiCSS.referrerPolicy = "no-referrer";

    document.head.appendChild(jqueryUiCSS);
    document.body.appendChild(jqueryScript);

    jqueryScript.onload = () => {
      document.body.appendChild(jqueryUiScript);

      jqueryUiScript.onload = () => {
        if (window.$ && window.$.fn.datepicker) {
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

          // 달력 적용
          window.$(() => {
            window.$(".datepicker").datepicker();
          });
        } else {
          console.error("jQuery UI datepicker가 로드되지 않았습니다.");
        }
      };
    };

    // cleanup
    return () => {
      if (document.body.contains(jqueryScript)) document.body.removeChild(jqueryScript);
      if (document.body.contains(jqueryUiScript)) document.body.removeChild(jqueryUiScript);
      if (document.head.contains(jqueryUiCSS)) document.head.removeChild(jqueryUiCSS);
    };
  }, []);

  return (
    <div>
      <h2>jQuery Datepicker</h2>
      <input type="text" className="datepicker" placeholder="날짜 선택" />
    </div>
  );
};

export default Calendar;
