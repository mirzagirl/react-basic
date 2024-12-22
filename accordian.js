import { useState } from "react";

export default function Accordion() {
  const [accordianOpen, setAccordianOpen] = useState({
    1: {
      heading: "HTML",
      content: `The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.`,
      id: 1,
      isOpen: false,
    },
    2: {
      heading: "CSS",
      content: `Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.`,
      id: 2,
      isOpen: false,
    },
    3: {
      heading: "JavaScript",
      content: `JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.`,
      id: 3,
      isOpen: false,
    },
  });
    const handleAccordian = (id) => {
    console.log("Clicked ID:", id);
    setAccordianOpen((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };
  const handleAccordian = (id) => {
    console.log("Clicked ID:", id);
    setAccordianOpen((prevData) =>({
      ...prevData,
      [id]:{
        ...prevData[id],
        isOpen:!prevData[id].isOpen,
      }
    })
    );
  };

  return (
    <div>
      {Object.keys(accordianOpen).map((key) => (
        <div key={accordianOpen[key].id} style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4>{accordianOpen[key].heading}</h4>
            <button
              onClick={() => handleAccordian(accordianOpen[key].id)}
              aria-hidden={true}
              className="accordion-icon"
            >
              {accordianOpen[key].isOpen ? "-" : "+"}
            </button>
          </div>
          {accordianOpen[key].isOpen && <div>{accordianOpen[key].content}</div>}
        </div>
      ))}
    </div>
  );
}
