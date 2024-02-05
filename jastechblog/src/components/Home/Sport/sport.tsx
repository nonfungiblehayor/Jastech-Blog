import StayConnected from "./stayConnected";
import SportTab from "./sportTab";
const Sport = () => {
  return (
    <section
      className="flex-row"
      style={{
        marginBottom: "30px",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "85vw",
      }}
      id="sport"
    >
      <SportTab />
      {/* <StayConnected showAds={false} /> */}
    </section>
  );
};
export default Sport;
