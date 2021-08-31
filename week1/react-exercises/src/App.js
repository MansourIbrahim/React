import HobbyList from './exercise1/hobbylist'
import Guarantee from './exercise2/guarantee';
import fDelivery from './assets/f-delivery.png';
import chat from './assets/chat.png';
import coin from './assets/coin.png';
import Counter from './exercise3/counter'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HobbyList />

      <Guarantee
          img={fDelivery}
          title="Fast Delivery"
          description="Fast Delivery Fast Delivery Fast DeliveryFast Delivery Fast Delivery Fast Delivery Fast Delivery."
        />

        <Guarantee
          img={chat}
          title="Contact Us"
          description="Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us."
        />

        <Guarantee
          img={coin}
          title="euro"
          description="euro euro euro euro euro euro euro euro euro euro euro euro euro euro euro euro euro euro."
        />

        <Counter />
    </div>
  );
}

export default App;