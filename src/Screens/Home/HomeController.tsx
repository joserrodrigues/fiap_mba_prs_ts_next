import React, { FC } from "react";
import HomeView from "./HomeView";
import { useRouter } from "next/router";
import { DetailControllerType } from "../Detail/DetailController";

const HomeController: FC = () => {
  const router = useRouter();

  const onDetail1Clicked = () => {
    router.push("/detail/1");
  };
  const onDetailDataClicked = () => {
    let info: DetailControllerType = {
      data: JSON.stringify({ info: 1, info2: 2 }),
    };
    router.push({
      pathname: "/detail/2",
      query: info,
    });
  };
  return (
    <HomeView
      onDetail1Clicked={onDetail1Clicked}
      onDetailDataClicked={onDetailDataClicked}
    />
  );
};

export default HomeController;
