// 📌 Accordion & Breadcrumb & AccordionItem에서 사용할 공통 데이터
const accordionItems = [
    {
      title: "Bootstrap 5",
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
      title: "Telerik",
      content: <strong>This is the third item's accordion body.</strong>,
      links: [
        { path: "/page3", name: "Page 3" },
        { path: "/page3One", name: "Page 3-1" },
        { path: "/page3Two", name: "Page 3-2" },
      ],
    },
    {
      title: "Test",
      content: <strong>Test Place</strong>,
      links: [
        { path: "/page4", name: "Resampling" },
        { path: "/page4One", name: "Component Test" },
        { path: "/page4Two", name: "ETC" },
      ],
    },
  ];
  
  export default accordionItems;  