import styled from "styled-components";
import { Notification } from "components";
import { useGetNotifications } from "hooks";
import { User } from "types";

type NotificationsSectionProps = {
  user: User;
};

const NotificationsWrapper = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
`;

const NotificationsSection: React.FC<NotificationsSectionProps> = ({
  user,
}) => {
  const { notifications, error, loading } = useGetNotifications(user);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;

  console.log(notifications);

  return (
    <NotificationsWrapper>
      {notifications?.mentions.map((mention, index) => (
        <Notification key={index} mention={mention} />
      ))}
    </NotificationsWrapper>
  );
};

export default NotificationsSection;
