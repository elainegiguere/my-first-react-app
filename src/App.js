// import './App.css';
import Container from './components/Container';
import IconEthereum from './components/IconEthereum';
import ImageComponent from './components/ImageComponent';
import MainText from './components/MainText';
import MainTitle from './components/MainTitle';
import Row from './components/Row';
import Value from './components/Value';
import TimeComponent from './components/TimeComponent';
import Clock from "./images/icon-clock.svg";
import Col from './components/Col';
import Line from './components/Line';
import Avatar from './components/Avatar';
import Credits from './components/Credits';

function App() {
  const onClick = (message) => () => alert(message);
  const onHover = () => alert('that is not my name');

  return (
    <div className="App">
      <Container>
        <ImageComponent/>
        <MainTitle/>
        <MainText/>
         <Row>
           <Col>
          <IconEthereum/>
          <Value/>
          </Col>
          <Col>
          <TimeComponent clock={Clock} onClick={onClick("TimeComponent")} isRed={true} />
          </Col>
          </Row>
          <Line/>
          <Row>
          <Avatar broderWhite={false} onClick={onClick("AvatComponent")}/>
          <Credits onHover={onHover}/>
          </Row>
      </Container>
    </div>
  );
}

export default App;
