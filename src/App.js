import './scss/App.scss';
import { useEffect, useRef, useState } from 'react';

// Components
import Header from './Components/Header';
import Info from './Components/Info';
import Field from './Components/Field';
import Arrows from './Components/Arrows';
import Help from './Components/Help';

function App() {
  const [isHelp, setHelp] = useState(false); // управление показом справки
  const refApp = useRef();
  const [size, setSize] = useState({ width: '', height: '' });
  const [isClickable, setClickable] = useState(false); // управление кликабельностью компонента <Info />

  // Запоминаем первоначальные размеры div-а с игрой
  useEffect(() => {
    setSize({
      width: refApp.current.getBoundingClientRect().width,
      height: refApp.current.getBoundingClientRect().height
    })    
  }, [refApp]);

  return (
    <div className="App" ref={ refApp } style={ size }>
      <Header isHelp={ isHelp } setHelp={ setHelp }/>
      {
        isHelp 
          ? (<div className='help'>
              <Help />
            </div>)
        : (<div className='main'>
            <Info setClickable={ setClickable } />
            <Field isClickable={ isClickable } setClickable={ setClickable }/>
            <Arrows />
          </div>)
      }
    </div>
  );
}

export default App;
