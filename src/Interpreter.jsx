import { useEffect, useState } from "react";
import { useCoins } from "./utils/coins_api";
import { interpreter } from "./utils/interpreter";
import PropTypes from "prop-types";

export default function Interpreter({ text, setInterpretationErrors }) {
  const [value, setValue] = useState("");
  const { isFetching, coins, error } = useCoins();

  useEffect(() => {
    if (isFetching) {
      return;
    }

    const { text: interpretedText, errors } = interpreter(text, coins);

    setValue(interpretedText);
    setInterpretationErrors(errors);
  }, [text, isFetching]);

  if (error) {
    return (
      <div className=" px-4 py-4 flex justify-center items-center">
        <p className="text-red-500 text-xl">Network Error!</p>
      </div>
    );
  }

  return <div className=" px-4 py-4">{value}</div>;
}

Interpreter.propTypes = {
  text: PropTypes.string,
  setInterpretationErrors: PropTypes.func.isRequired,
};

Interpreter.defaultProps = {
  text: "",
  setInterpretationErrors: () => {},
};
