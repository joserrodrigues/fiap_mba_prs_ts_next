import React, { FC } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { MenuInfo } from "../../Interfaces/MenuInfo";

type iProps = {
  items: MenuInfo[];
};
const HomeView: FC<iProps> = ({ items }) => {
  let itemArrays = [];

  if (items) {
    items.forEach((element: MenuInfo) => {
      let infoLink = "/detail/" + element.id;
      itemArrays.push(
        <Link href={infoLink} key={element.id}>
          <Typography gutterBottom variant="h6" className={styles.text}>
            Detail {element.name}
          </Typography>
        </Link>
      );
    });
  } else {
    itemArrays.push(<CircularProgress key={1} />);
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={styles.container}
    >
      <Grid item xs={12} md={6} className={styles.main}>
        <a href="/">
          <Typography gutterBottom variant="h6" className={styles.text}>
            Home
          </Typography>
        </a>
        {itemArrays}
      </Grid>
    </Grid>
  );
};

export default HomeView;
