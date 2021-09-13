import { useAppContext } from "provider/AppProvider";
import { useGetNotifications } from "hooks";

const App = () => {
  const { user } = useAppContext();
  const { notifications, error, loading } = useGetNotifications(user!);

  console.log(notifications);

  console.log(user);
  return (
    <div>
      <h1>Hello mentions</h1>
      {notifications?.mentions.map((mention, index) => (
        <p key={index}>{mention.title}</p>
      ))}
    </div>
  );
};

export default App;
