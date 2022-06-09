import React, { FC } from "react";
import styles from "./Detail.module.css";
import { Grid, Typography } from "@mui/material";
import { UserInfo } from "../../Interfaces/UserInfo";

type iProps = {
  id: string;
  data: string;
  onBackClicked: () => void;
  userInfo: UserInfo | null;
};
const DetailView: FC<iProps> = ({ id, data, onBackClicked, userInfo }) => {
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

  let userInfoJSX = null;
  if (userInfo != null) {
    userInfoJSX = (
      <>
        <Typography gutterBottom variant="h4" className={styles.text}>
          ID = {userInfo.id}
        </Typography>
        <Typography gutterBottom variant="h4" className={styles.text}>
          Nome = {userInfo.name}
        </Typography>
        <Typography gutterBottom variant="h4" className={styles.text}>
          Telefone = {userInfo.phone}
        </Typography>
      </>
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
          Detail
        </Typography>
        {message}
        {userInfoJSX}
        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onBackClicked}
        >
          Voltar
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DetailView;
