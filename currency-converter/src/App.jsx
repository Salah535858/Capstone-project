
import { useState, useEffect } from 'react'; 
import { fetchExchangeRates } from './services/api';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';


const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates(fromCurrency);
        setCurrencies(Object.keys(data.conversion_rates));
        setRate(data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, rate]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Currency Converter</h1>
      <div className="flex gap-4 mt-4">
        <CurrencySelector options={currencies} value={fromCurrency} onChange={setFromCurrency} />
        <CurrencySelector options={currencies} value={toCurrency} onChange={setToCurrency} />
      </div>
      <div className="mt-4">
        <AmountInput amount={amount} onChange={setAmount} />
      </div>
      {convertedAmount && (
        <div className="mt-4">
          <ConversionResult result={convertedAmount} rate={rate} />
        </div>
      )}
    </div>
  );
};

export default App;
