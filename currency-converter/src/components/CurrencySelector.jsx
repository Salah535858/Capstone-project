import PropTypes from 'prop-types';

const CurrencySelector = ({ options, value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="p-2 border rounded">
    {options.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

CurrencySelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CurrencySelector;
