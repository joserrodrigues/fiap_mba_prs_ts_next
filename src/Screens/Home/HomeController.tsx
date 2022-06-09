import React, { FC, useEffect, useState } from "react";
import HomeView from "./HomeView";
import { useRouter } from "next/router";
import { MenuInfo } from "../../Interfaces/MenuInfo";

type iProps = {
  items: MenuInfo[];
};
const HomeController: FC<iProps> = ({ items }) => {
  console.log("Checking items Controller");
  console.log(items);

  return <HomeView items={items} />;
};

export default HomeController;
