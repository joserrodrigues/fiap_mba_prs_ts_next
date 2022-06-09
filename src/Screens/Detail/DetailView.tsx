import React, { FC } from "react";
import styles from "./Detail.module.css";
import { Grid, Typography } from "@mui/material";

type iProps = {
  id: string;
  data: string;
  onBackClicked: () => void;
};
const DetailView: FC<iProps> = ({ id, data, onBackClicked }) => {
  let message = null;
  if (data != null && data !== undefined) {
    message = (
      <Typography
        gutterBottom
        variant="h6"
        className={styles.text}
        onClick={onBackClicked}
      >
        {data}
      </Typography>
    );
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
        <Typography gutterBottom variant="h2" className={styles.text}>
          Detail {id}
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onBackClicked}
        >
          Voltar
        </Typography>

        {message}
      </Grid>
    </Grid>
  );
};

export default DetailView;
