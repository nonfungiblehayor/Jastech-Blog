import StayConnected from "./stayConnected";
import SportTab from "./sportTab";
const Sport = () => {
  return (
    <section
      className="flex-row"
      style={{ marginBottom: "30px", alignItems: "flex-start", gap: "20px" }}
    >
      <SportTab />
      <StayConnected />
    </section>
  );
};
export default Sport;
