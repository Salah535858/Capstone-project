import PropTypes from 'prop-types';

const ConversionResult = ({ result, rate }) => (
  <div className="mt-4 p-4 bg-gray-100 rounded shadow">
    <p className="text-lg font-bold">Converted Amount: {result}</p>
    <p className="text-sm text-gray-600">Exchange Rate: {rate}</p>
  </div>
);

ConversionResult.propTypes = {
  result: PropTypes.string.isRequired, // Assuming `result` is a string (formatted amount)
  rate: PropTypes.number.isRequired,
};

export default ConversionResult;
