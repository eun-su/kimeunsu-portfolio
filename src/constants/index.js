import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

import aelogo from "../assets/img/logo/ae.jpg";
import ailogo from "../assets/img/logo/ai.jpg";
import bootstraplogo from "../assets/img/logo/bootstraplogo.jpg";
import csslogo from "../assets/img/logo/csslogo.jpg";
import eclogo from "../assets/img/logo/ec.png";
import gabialogo from "../assets/img/logo/gabia.jpg";
import githublogo from "../assets/img/logo/github.jpg";
import godologo from "../assets/img/logo/godo.png";
import googleadslogo from "../assets/img/logo/googleads.png";
import gsaplogo from "../assets/img/logo/gsaplogo.jpg";
import htmllogo from "../assets/img/logo/htmllogo.jpg";
import javascriptlogo from "../assets/img/logo/javascript.png";
import jquerylogo from "../assets/img/logo/jquerylogo.jpg";
import firebaselogo from "../assets/img/logo/firebaselogo.jpg";
import figmalogo from "../assets/img/logo/figmalogo.jpg";
import jsonlogo from "../assets/img/logo/jsonlogo.jpg";
import lflogo from "../assets/img/logo/lf.jpg";
import lrlogo from "../assets/img/logo/lr.jpg";
import nextlogo from "../assets/img/logo/next.jpg";
import notionlogo from "../assets/img/logo/notion.jpg";
import npaylogo from "../assets/img/logo/npay.png";
import phplogo from "../assets/img/logo/phplogo.jpg";
import pslogo from "../assets/img/logo/ps.jpg";
import reactlogo from "../assets/img/logo/reactlogo.jpg";
import shoplinkerlogo from "../assets/img/logo/shoplinker.jpg";
import vslogo from "../assets/img/logo/vs.jpg";
import vuelogo from "../assets/img/logo/vuelogo.jpg";

// import skill01 from "../assets/img/skill/skill01.jpg";
import skill0101 from "../assets/img/skill/skill0101.jpg";
import skill0102 from "../assets/img/skill/skill0102.jpg";
// import skill02 from "../assets/img/skill/skill02.jpg";
import skill0201 from "../assets/img/skill/skill0201.png";
import skill0202 from "../assets/img/skill/skill0202.jpg";
// import skill03 from "../assets/img/skill/skill03.jpg";
import skill0301 from "../assets/img/skill/skill0301.png";
import skill0302 from "../assets/img/skill/skill0302.jpg";
// import skill04 from "../assets/img/skill/skill04.png";
import skill0401 from "../assets/img/skill/skill0401.png";
import skill0402 from "../assets/img/skill/skill0402.png";
// import skill05 from "../assets/img/skill/skill05.png";
import skill0501 from "../assets/img/skill/skill0501.png";
import skill0502 from "../assets/img/skill/skill0502.png";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "profile",
        url: "#profile"
    },
    {
        title: "skill",
        url: "#skillview"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "Web publisher",
    desc: ["Welcome to", "My Portfolio Site", "EUNSU"]
}

export const skillText = [
    {
        mainTitle: "Web Publishing",
        title: "HTML, CSS, Bootstrap",
        image: [htmllogo, csslogo, bootstraplogo, javascriptlogo, gabialogo, godologo], 
        desc: "웹 퍼블리싱 & 반응형 웹 사이트 제작",
        imageTitleList: ["가비아 퍼스트몰 홈페이지 제작", "미스코코 쇼핑몰 제작"],
        imageList: [skill0101, skill0102], 
        imageDesc: ["HTML 구조", "CSS 스타일링"],
    },
    {
        mainTitle: "JavaScript Library",
        title: "jQuery, GSAP, Telerik",
        image: [jquerylogo, gsaplogo, phplogo, vslogo], 
        desc: "자바스크립트 라이브러리를 활용한 웹 효과 구현",
        imageTitleList: ["문의 결제 게시판 맞춤개발", "Slick Slider 페이지 배너"],
        imageList: [skill0201, skill0202], 
        imageDesc: ["Java Script", "Jquery"],
    },
    {
        mainTitle: "JavaScript FrameWork",
        title: "React.js, Vue.js, Next.js",
        image: [reactlogo, vuelogo, nextlogo, firebaselogo, jsonlogo],
        desc: "프론트엔드 프레임워크을 이용한 웹 애플리케이션 제작",
        imageTitleList: ["외부 API 불러오기", "나만의 홈페이지 제작"],
        imageList: [skill0301, skill0302], 
        imageDesc: ["React 컴포넌트", "나만의 홈페이지"],
    },
    {
        mainTitle: "Web Design",
        title: "Photoshop, Illustrator, Figma, Adobe XD",
        image: [pslogo, ailogo, figmalogo, aelogo, lrlogo],
        desc: "사용자의 경험, 인터페이스 구축과 브랜드 아이덴티티 강화",
        imageTitleList: ["오픈마켓 쇼핑몰 프로모션 배너", "CSS 스타일링"],
        imageList: [skill0401, skill0402], 
        imageDesc: ["Photoshop UI 디자인", "Figma 프로토타이핑"],
    },
    {
        mainTitle: "Other Tools",
        title: "ERP, GitHub, PHP, SQL, Lightroom, After Effects, 3D MAX",
        image: [githublogo, eclogo, notionlogo, shoplinkerlogo, googleadslogo, lflogo, npaylogo],
        desc: "다양한 협업 도구를 활용하여 효율적인 업무 프로세스를 구축하고, 체계적인 문서 작업을 통해 프로젝트의 명확한 방향성과 일관성을 유지",
        imageTitleList: ["GitHub", "FireBase"],
        imageList: [skill0501, skill0502], 
        imageDesc: ["GitHub 협업", "SQL 데이터베이스"],
    }
];

export const siteText = [
    {
        text: ["LUXAVENUE", "Make site compliant with", "Gabia Firstmall"],
        title: "가비아 퍼스트몰 솔루션을 이용한 사이트 제작",
        code: "https://www.firstmall.kr",
        view: "https://luxavenue.co.kr",
        info: [
            "site coding",
            "production period : Ongoing",
            "use stack : HTML5/CSS3, CSS Variable, Java Script",
        ],
    },
    {
        text: ["Portfolio", "site compliant with", "React.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/eun-su/kimeunsu-portfolio",
        view: "https://kimeunsu.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, React.js",
        ],
    },
    {
        text: ["MISSCOCO", "Make site compliant with", "Gabia Firstmall"],
        title: "가비아 퍼스트몰 솔루션을 이용한 사이트 커스텀 마이징",
        code: "https://www.firstmall.kr",
        view: "https://misscoco.co.kr",
        info: [
            "site coding",
            "production period : Ongoing",
            "use stack : HTML5/CSS3, CSS Variable, PHP",
        ],
    },
    {
        text: ["FreeUP", "site compliant with", "CAFE 24"],
        title: "카페24 솔루션을 이용한 사이트 커스텀 마이징",
        code: "https://www.cafe24.com",
        view: "https://bouncb.cafe24.com",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS",
        ],
    },
    {
        text: ["Make", "Site Compliant with", "godo Mall"],
        title: "고도몰 솔루션을 이용한 해외사이트 제작",
        code: "https://github.com/webstoryboy/port2023-next",
        view: "https://lxmc.co.kr",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];

export const portText = [
    {
        num: "01",
        title: "eunsu netlify",
        desc: "김은수 소개를 위한 개인 홈페이지",
        img: port01,
        code: "https://eunsu.netlify.app",
        view: "https://eunsu.netlify.app",
        name: "김은수 네트리파이",
    },
    {
        num: "02",
        title: "GitHub Bolg",
        desc: "깃허브를 활용한 블로그 페이지 제작",
        img: port02,
        code: "https://eunsux.github.io",
        view: "https://eunsux.github.io",
        name: "천설* 포트폴리오",
    },
    {
        num: "03",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port03,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "천설* 포트폴리오",
    },
    {
        num: "04",
        title: "모던한 포트폴리오",
        desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
        img: port04,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "이훈* 포트폴리오",
    },
    {
        num: "05",
        title: "가로모드의 정석 포트폴리오",
        desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
        img: port05,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "박준* 포트폴리오",
    },
    {
        num: "06",
        title: "화려함의 정석 포트폴리오",
        desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
        img: port06,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "포트폴리오",
    },
    {
        num: "07",
        title: "패럴랙스 정석 포트폴리오",
        desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
        img: port07,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "포트폴리오",
    },
    {
        num: "08",
        title: "트랜지션 포트폴리오",
        desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
        img: port08,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "포트폴리오",
    },
    {
        num: "09",
        title: "스크롤의 정석 포트폴리오",
        desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
        img: port09,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "포트폴리오",
    },
    {
        num: "10",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port10,
        code: "https://github.com/eun-su",
        view: "https://github.com/eun-su",
        name: "포트폴리오",
    },
];

export const contactText = [
    {
        link: "https://open.kakao.com/me/eunsuu",
        title: "KAKAO ID : eunsuo",
    },
    {
        link: "eunsuo@naver.com",
        title: "mail : eunsuo@naver.com",
    },
];

export const footerText = [
    {
        title: "instagram",
        desc: "김은수의 취미생활과 일상을 볼 수 있습니다",
        link: "https://www.instagram.com/eu_nsu",
    },
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/eun-su",
    },
    {
        title: "blog",
        desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://blog.naver.com/eunsuo",
    },
    {
        title: "gsap",
        desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
    },
    {
        title: "react",
        desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-react",
    },
    {
        title: "vue",
        desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-vue",
    },
    {
        title: "next",
        desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-next",
    },
];