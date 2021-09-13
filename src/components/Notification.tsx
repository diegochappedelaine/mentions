import styled from "styled-components";
import { Mention } from "types";
import { ProfilePicture } from "components";

type NotificationProps = { mention: Mention };

const Container = styled.li`
  border-bottom: 1px solid #edf1f5;
  height: 150px;
  padding: 24px;
`;

const Notification: React.FC<NotificationProps> = ({ mention }) => {
  return (
    <Container>
      <ProfilePicture src={mention.picture_url} alt="" />
      {/* {mention.title} */}
      {mention.source_name}
    </Container>
  );
};

export default Notification;
