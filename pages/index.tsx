import { FC } from "react";
import { GetStaticProps } from "next";
import HomeController from "../src/Screens/Home/HomeController";
import { MenuInfo } from "../src/Interfaces/MenuInfo";

type iProps = {
  items: MenuInfo[];
};
const Home: FC<iProps> = ({ items }) => {
  return <HomeController items={items} />;
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  console.log("Inicio SSG getStaticProps");
  const res = await fetch(process.env.REACT_APP_URL + "api/getItems");
  const items = (await res.json()) as MenuInfo;
  console.log("Checking items");
  console.log(items);

  return {
    props: {
      items: items,
    },
  };
};
