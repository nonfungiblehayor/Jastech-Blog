import StayConnected from "./stayConnected";
import SportTab from "./sportTab";
import { useRouter } from "next/router";
import Button from "@/components/Shared/button";
const Sport = () => {
  const router = useRouter()
  return (<>
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
    <Button label="Load more" className="btn" onClick={() => router.push('/sport')} />
    </>
  );
};
export default Sport;
