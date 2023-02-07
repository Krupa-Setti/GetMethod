import React from "react";

const App = () => {
  const getDate = (e) => {
    e.eventDefault();
    fetch(" https://gorest.co.in/public/v1/todos.json")
      .then((response) => response.json())
      .then((res) => console.log(res));
    //the output will shown in console is success.
  };

  return (
    <div>
      <center>
        <button onClick={getDate}>Get Data</button>
      </center>
    </div>
  );
};

export default App;
