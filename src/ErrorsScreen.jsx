import PropTypes from "prop-types";

export default function ErrorsScreen({ errors }) {
  return (
    <ol className="px-4 py-6 list-disc">
      {errors &&
        errors.map((error, i) => (
          <li key={i} className="text-red-500 text-sm">
            {error}
          </li>
        ))}
    </ol>
  );
}

ErrorsScreen.propTypes = {
  errors: PropTypes.array,
};

ErrorsScreen.defaultProps = {
  errors: [],
};
