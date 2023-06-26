import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  const [primeR, setPrime] = useState("");

  function AddPrimeNumber() {
    let prime = true;
    let num_x = num + 1;
    setNum(num_x);
    if (num_x === 0 || num_x === 1) setPrime(num_x + " ไม่เป็นจำนวนเฉพาะ")
    else {
      for (let i = 2; i < num_x; i++) {
        if (num_x % i === 0) {
          prime = false;
          break;
        }
      }
      if (prime) setPrime(num_x + " เป็นจำนวนเฉพาะ");
      else setPrime(num_x + " ไม่เป็นจำนวนเฉพาะ");
    }
  }

  function SubtractPrimeNumber() {
    let prime = true;
    let num_x = num - 1;
    if (num_x >= 0) {
      setNum(num_x);
    }
    if (num_x === 0 || num_x === 1) {
      setPrime(num_x + " ไม่เป็นจำนวนเฉพาะ");
    } else {
      for (let i = 2; i < num_x; i++) {
        if (num_x % i === 0) {
          prime = false;
          break;
        }
      }
      if (prime && num_x >= 1) setPrime(num_x + " เป็นจำนวนเฉพาะ");
      else setPrime(num_x + " ไม่เป็นจำนวนเฉพาะ");
    }
  }
  return (
    <div className="App">
      <Header />
      <div className='MyContent'>
        <h2 id="wo">{num}</h2>
        <button onClick={AddPrimeNumber}>เพิ่ม</button>
        <button onClick={SubtractPrimeNumber}>ลด</button>
        <p className="text-center">{primeR}</p>
      </div>
      <Footer />
    </div>


  );
}

export default App;
