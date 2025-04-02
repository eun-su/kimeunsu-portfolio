// 📌 Accordion & Breadcrumb & AccordionItem에서 사용할 공통 데이터
const accordionItems = [
    {
      title: "Frontend Development",
      content: <strong>Example page using CSS and HTML with Bootstrap 5</strong>,
      links: [
        { path: "/page1", name: "Tab Menu And Grid" },
        { path: "/page1One", name: "display : flex" },
        { path: "/page1Two", name: "Modal" },
      ],
    },
    {
      title: "JavaScript Library",
      content: <strong>JavaScript Library Instance</strong>,
      links: [
        { path: "/page2", name: "jQuery Gallery" },
        { path: "/page2One", name: "GSAP" },
        { path: "/page2Two", name: "Calendar" },
      ],
    },
    {
      title: "Design Works",
      content: <strong>UI Library Demo</strong>,
      links: [
        { path: "/page3", name: "UI Development" },
        { path: "/page3One", name: "Page Telerik" },
        { path: "/page3Two", name: "Page Telerik" },
      ],
    },
    // {
    //   title: "Test",
    //   content: <strong>Test Place</strong>,
    //   links: [
    //     { path: "/page4", name: "Resampling" },
    //     { path: "/page4One", name: "Component Test" },
    //     { path: "/page4Two", name: "ETC" },
    //   ],
    // },
  ];
  
  export default accordionItems;  