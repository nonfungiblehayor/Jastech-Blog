import Image from "next/image";
import styled from "styled-components";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Link from "next/link";

const StyledEarn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  padding-bottom: 30px;
  margin-bottom: 60px;
  h1 {
    width: 85vw;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 50px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
  .container {
    width: 85vw;
    display: grid;
    grid-template-columns: auto auto auto;
    padding-top: 50px;
    row-gap: 20px;
    column-gap: 10px;
  }
  h3 {
    font-size: 15px;
    font-weight: 500;
    width: 200px;
  }
  .normal-frame {
    gap: 10px;
    justify-content: flex-start;
    border: 1px solid #000;
    padding: 10px;
  }
  @media (max-width: 768px) {
    .wide-frame {
      width: 85vw;
      height: 250px;
    }
    h2 {
      font-size: 14px;
      width: 300px;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;
const EarnCash = () => {
  const earnId = process.env.NEXT_PUBLIC_EARNING_ID;
  const [earning, setEarning] = useState<
    [
      {
        id: "";
        fields: {
          Update: "";
          Type: "";
          Details: "";
          Image: [
            {
              url: "";
            },
          ];
          Date: "";
        };
      },
    ]
  >();
  const getUpdate = () => {
    api
      .get(`${earnId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BNew%7D+%3D+'Yes')&maxRecords=6`)
      .then((response) => setEarning(response.data.records))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUpdate();
  }, []);
  return (
    <StyledEarn>
      <section id="earn">
        <h1>Earn Cash</h1>
        <div className="container">
          {earning?.map((item, index) => (
            <Link href={`earn/${item.id}`} key={index}>
              <div className="normal-frame flex-row">
                <Image
                  src={item.fields.Image[0].url}
                  alt="frame"
                  width={100}
                  height={100}
                />
                <h3>
                  {item.fields.Update} {item.fields.Type}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </StyledEarn>
  );
};
export default EarnCash;
