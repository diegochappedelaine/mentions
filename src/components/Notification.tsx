import styled from "styled-components";
import { Mention } from "types";
import { ProfilePicture } from "components";

type NotificationProps = { mention: Mention };

const Container = styled.li``;

const TextContainer = styled.div`
  width: 100%;

  > h2 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  > p {
    line-height: 1.4rem;
    height: 44px;
    overflow: hidden;
    color: #909da9;
  }
`;

const TitleSection = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    color: grey;
  }

  > p {
    color: #38a1de;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #edf1f5;
  padding: 24px;
  display: flex;
  transition: background-color ease-out 0.2s;

  &:hover {
    background-color: #f7f9fc;
  }
`;

const Notification: React.FC<NotificationProps> = ({ mention }) => {
  const publish_date = new Date(mention.published_at).toLocaleDateString(
    "en-gb",
    {
      month: "short",
      day: "numeric",
    }
  );

  return (
    <Container>
      <Link href={mention.clickable_url} target="_blank" rel="noopener">
        <ProfilePicture src={mention.picture_url} alt={mention.source_name} />
        <TextContainer>
          <TitleSection>
            <h3>{mention.source_type}</h3>
            <p>{publish_date}</p>
          </TitleSection>
          <h2>{mention.source_name}</h2>
          <p>{mention.description_medium}</p>
        </TextContainer>
      </Link>
    </Container>
  );
};

export default Notification;
