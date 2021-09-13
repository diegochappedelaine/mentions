import styled from "styled-components";
import { DataTypeIcon } from "components";

const Container = styled.div`
  position: relative;
`;

const Picture = styled.img`
  border: 1px solid #e7e7e8;
  border-radius: 50%;
  min-height: 48px;
  height: 48px;
  min-width: 48px;
  width: 48px;
  object-fit: cover;
  margin-right: 24px;
`;

type ProfilePictureProps = {
  src: string;
  alt: string;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => {
  const placeholder =
    "https://d3kqkuy1hpjocx.cloudfront.net/s3fs-public/styles/medium/public/blue_monogram.png";

  const addDefaultSrc = (
    event: React.SyntheticEvent<HTMLImageElement, Event> & {
      target: { src: string };
    }
  ) => {
    event.target.src = placeholder;
  };

  return (
    <Container>
      <Picture onError={addDefaultSrc} src={src || placeholder} alt={alt} />
      <DataTypeIcon />
    </Container>
  );
};

export default ProfilePicture;
