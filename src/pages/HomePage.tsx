import { NotificationsSection } from "components";
import { useAppContext } from "provider/AppProvider";

const HomePage = () => {
  const { user } = useAppContext();

  if (!user) return null;

  return <NotificationsSection user={user} />;
};

export default HomePage;
