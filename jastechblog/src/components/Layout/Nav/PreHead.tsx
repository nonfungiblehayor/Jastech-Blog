import styled from "styled-components";
import Social from "@/components/Shared/social";
import { useEffect, useState } from "react";

const StyledPreHead = styled.section`
  max-width: 100%;
  height: 42px;
  background-color: #f0e3e3;
  box-shadow: 0px 1px 0px 0px rgba(246, 80, 80, 0.15);
  div:nth-of-type(1) {
    gap: 10px;
  }
  p,
  h1 {
    color: #393939;
    font-size: 12px;
    font-weight: 400;
  }
  h1 {
    background-color: red;
    color: #fff;
    height: 42px;
    padding-left: 15px;
    padding-right: 15px;
  }
  div:nth-of-type(2) {
    gap: 12px;
  }
  @media (max-width: 768px) {
    height: 32px;
    div:nth-of-type(2) {
      display: none;
    }
    p:nth-of-type(2) {
      width: 35vw;
    }
    p,
    h1 {
      font-size: 8px;
    }
    h1 {
      padding-left: 10px;
      padding-right: 10px;
      height: 32px;
    }
  }
`;
const PreHead = () => {
  const [day, setDay] = useState<string>();
  const [date, setDate] = useState<string>();
  useEffect(() => {
    const currentDate = new Date();
    const days = [
      "#",
      "Monday",
      "Tuesday",
      "Wednesday",
      "ThursDay",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const day = days[currentDate.getDay()];
    const date = currentDate.getDate().toString();
    const year = currentDate.getFullYear().toString();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[currentDate.getMonth()];
    const dates = `${date} ${month} ${year}`;
    setDate(dates);
    setDay(day);
  }, []);

  return (
    <StyledPreHead>
      <section className="flex-row">
        <div className="flex-row">
          <p>
            {day}, {date}
          </p>
          <h1 className="flex-row">Breaking News</h1>
          <p>Indonesia says located black box recorders from crashed plane</p>
        </div>
        <Social />
      </section>
    </StyledPreHead>
  );
};
export default PreHead;
