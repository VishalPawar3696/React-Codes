import { Container } from "@chakra-ui/react";
import AirbnbCard from "./Components/AirbndCard";
import ButtonExample from "./Components/Button";
import Form from "./Components/Form";
import "./styles.css";

export default function App() {
  return (
    <div>
       <AirbnbCard />
      <br />
      <br />
      <br />
      <ButtonExample /> 
      <Container>
        <Form />
      </Container>
    </div>
  );
}
