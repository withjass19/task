import CardSection from "./Component/CardSection/CardSection";
import Form from "./Component/Form/Form";

function App() {
  return (
    <div className="w-100 h-100">
      <div className="w-100 h-[700px] flex flex-col justify-center">
        <Form/>
      </div>
      <div>
        <CardSection/>
      </div>
    </div>
  );
}

export default App;
