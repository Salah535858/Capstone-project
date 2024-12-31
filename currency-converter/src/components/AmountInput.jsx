import PropTypes from 'prop-types';

const AmountInput = ({ amount, onChange }) => (
  <input
    type="number"
    value={amount}
    onChange={(e) => onChange(Number(e.target.value))}
    className="p-2 border rounded"
    placeholder="Enter amount"
  />
);

AmountInput.propTypes = {
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AmountInput;

  