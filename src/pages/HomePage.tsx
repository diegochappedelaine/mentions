import { NotificationsSection } from "components";
import { useAppContext } from "provider/AppProvider";

const HomePage = () => {
  const { user } = useAppContext();

  if (!user) return null;

  return (
    <div>
      <NotificationsSection user={user} />
    </div>
  );
};

export default HomePage;
