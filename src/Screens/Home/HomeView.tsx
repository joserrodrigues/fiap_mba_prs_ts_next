import React, { FC } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";

type iProps = {
  onDetail1Clicked: () => void;
  onDetailDataClicked: () => void;
};
const HomeView: FC<iProps> = ({ onDetail1Clicked, onDetailDataClicked }) => {
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
        <Link href="/detail/0">
          <Typography gutterBottom variant="h6" className={styles.text}>
            Detail 0
          </Typography>
        </Link>

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onDetail1Clicked}
        >
          Detail 1
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onDetailDataClicked}
        >
          Detail Data
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeView;
