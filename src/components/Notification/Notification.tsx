import { Mention } from "types";
import { ProfilePicture } from "components";
import { TextContainer, TitleSection, Link } from "./Notification.styled";

type NotificationProps = { mention: Mention };

const Notification: React.FC<NotificationProps> = ({ mention }) => {
  const publish_date = new Date(mention.published_at).toLocaleDateString(
    "en-gb",
    {
      month: "short",
      day: "numeric",
    }
  );

  return (
    <li>
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
    </li>
  );
};

export default Notification;
