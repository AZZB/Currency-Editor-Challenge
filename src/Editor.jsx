import PropTypes from "prop-types";

export default function Editor({ text, onTextChange }) {
  return (
    <div className="h-1/2 p-1 border border-gray-700 mr-2">
      <textarea
        placeholder="Write your text here..."
        className=" border w-full h-full outline-none px-3 py-5 border-none"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}

Editor.propTypes = {
  text: PropTypes.string,
  onTextChange: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  text: "",
  onTextChange: () => {},
};
