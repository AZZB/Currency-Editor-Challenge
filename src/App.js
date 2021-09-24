import { useState } from "react";
import Editor from "./Editor";
import ErrorsScreen from "./ErrorsScreen";
import Interpreter from "./Interpreter";

function App() {
  const [text, setText] = useState("");
  const [intepretationErrors, setInterpretationErrors] = useState([]);

  return (
    <>
      <header className="border py-4 px-4">
        <div className="text-xl text-gray-900 inline-block border-b-2 border-gray-500">
          Currency Editor
        </div>
      </header>
      <main className="flex h-5/6 mt-5 p-3 max-w-screen-xl m-auto">
        <section className="flex-1 ">
          <Editor text={text} onTextChange={(text) => setText(text)} />
          <ErrorsScreen errors={intepretationErrors} />
        </section>
        <section className="flex-1 border border-gray-700">
          <Interpreter
            text={text}
            setInterpretationErrors={setInterpretationErrors}
          />
        </section>
      </main>
    </>
  );
}

export default App;
