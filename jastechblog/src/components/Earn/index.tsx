import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { api } from "@/pages/api";
import Loading from "../Shared/loading";
import Button from "../Shared/button";

const StyledEarnPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    width: 85vw;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    row-gap: 30px;
    column-gap: 10px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .border-bottom {
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
  }
  .each {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    gap: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
    border: 1px solid #000;
  }
  .btn {
    margin-bottom: 25px;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    color: #393939;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
    width: 270px;
    color: #000;
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: auto;
      justify-content: center;
    }
  }
`;
const EarnPage = () => {
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
  const [oldUpdate, setOldUpdate] = useState<
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
  const [loadingState, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>()
  const [loadError, setLoadError] = useState<string>()   
  const [loadingMore, setLoadingMore] = useState(false) 
  const [loadNumber, setLoadNumber] = useState<number>(0) 
  const getUpdate = () => {
    setLoading(true)
    api
      .get(`${earnId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BNew%7D+%3D+'Yes')&maxRecords=8`)
      .then((response) => (setEarning(response.data.records), setLoading(false)))
      .catch((error) => setErrorMessage(error.response.data.error.message))
      .finally(() => setLoading(false))
  };
  const loadMore = (amount: number) => {
    setLoadingMore(true)
    api.get(`${earnId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BNew%7D+%3D+'No')&maxRecords=${loadNumber + amount}`)
    .then((response) => (setOldUpdate(response.data.records), setLoadingMore(false), setLoadNumber(amount)))
    .catch((error) => (setLoadError(error.response.data.error.message)))
    .finally(() => setLoadingMore(false))
  }
  useEffect(() => {
    getUpdate();
  }, []);
  return (
    <StyledEarnPage>
      <section>
      {errorMessage ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{errorMessage}</p> : 
      (loadingState ? <Loading /> : 
        <div className="container border-bottom">
          {earning?.map((item, index) => (
            <Link href={`/earn/${item.id}`} key={index}>
              <div className="each">
                <Image
                  src={item.fields.Image[0].url}
                  alt="image"
                  className="bgImg"
                  width={240}
                  height={200}
                />
                <p>Valid till - {item.fields.Date}</p>
                <h3>{item.fields.Update}</h3>
              </div>
            </Link>
          ))}
        </div>
      )
      }
       {loadError ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{loadError}</p> : 
      (loadingMore ? <Loading /> : 
        <div className="container">
          {oldUpdate?.map((item, index) => (
            <Link href={`/earn/${item.id}`} key={index}>
              <div className="each">
                <Image
                  src={item.fields.Image[0].url}
                  alt="image"
                  className="bgImg"
                  width={240}
                  height={200}
                />
                <p>Valid till - {item.fields.Date}</p>
                <h3>{item.fields.Update}</h3>
              </div>
            </Link>
          ))}
        </div>
      )
      }
        <Button label="Load more" className="btn" onClick={() => loadMore(6)}/>   
      </section>
    </StyledEarnPage>
  );
};
export default EarnPage;
