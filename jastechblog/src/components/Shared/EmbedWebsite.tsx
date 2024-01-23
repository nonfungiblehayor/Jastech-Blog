import styled from "styled-components";
const StyledEmbed = styled.div`
  iframe {
    width: 55vw;
  }
  @media (max-width: 768px) {
    iframe {
      width: 85vw;
    }
  }
`;
const YoutubeEmbed = ({ url }: { url?: string }) => {
  return (
    <StyledEmbed>
      <div>
        <iframe className="embed" height={500} src={url} />
      </div>
    </StyledEmbed>
  );
};
export default YoutubeEmbed;
