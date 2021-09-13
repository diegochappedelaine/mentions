import { useAppContext } from "provider/AppProvider";

const App = () => {
  const { user } = useAppContext();

  console.log(user);
  return (
    <div>
      <h1>Hello mentions</h1>
    </div>
  );
};

export default App;
