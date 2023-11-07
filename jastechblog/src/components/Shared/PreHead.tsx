import Icons from "./icons";
import styled from "styled-components";
import Link from "next/link";
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
  const smIcons = [
    {
      icon: "facebook",
      link: "",
    },
    {
      icon: "twitter",
      link: "",
    },
    {
      icon: "instagram",
      link: "",
    },
    {
      icon: "youtube",
      link: "",
    },
  ];
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
        <div>
          {smIcons.map((item, index) => (
            <Link href={item.link} key={index}>
              <Icons type={item.icon} />
            </Link>
          ))}
        </div>
      </section>
    </StyledPreHead>
  );
};
export default PreHead;
