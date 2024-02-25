import Card from "./components/Card/Card.jsx";

function App() {

  const cardBtnClickHandler = (cardProps) => {
    alert(`Hello from card: ${cardProps.title}`);
  }

  return (
    <>
      <Card title="Card title" text="Some quick example text to build on the card" btnText="Go somewhere"  onClick={cardBtnClickHandler} />
      <Card title="Card title 2" text="Some quick example text to build on the card 2" btnText="Go somewhere"  onClick={cardBtnClickHandler} />
      <Card title="Card title 3" text="Some quick example text to build on the card 3" btnText="Go somewhere"  onClick={cardBtnClickHandler} />
    </>
  )
}

export default App
