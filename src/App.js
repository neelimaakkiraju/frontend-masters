const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Order Pizza"),
    React.createElement(pizza, {
      name: "pizza@1",
      description: "chicken pizza",
    }),
    React.createElement(pizza, {
      name: "pizza@2",
      description: "chicken pizza",
    }),
    React.createElement(pizza, {
      name: "pizza@3",
      description: "chicken pizza",
    }),
    React.createElement(pizza, {
      name: "pizza@4",
      description: "chicken pizza",
    }),
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
