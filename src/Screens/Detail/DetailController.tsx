import React, { FC, useState, useEffect } from "react";
import DetailView from "./DetailView";
import { useRouter } from "next/router";
import { UserInfo } from "../../Interfaces/UserInfo";

export type DetailControllerType = {
  id?: string;
  data: string;
};

type iProps = {
  userInfo: UserInfo;
};

const DetailController: FC<iProps> = ({ userInfo }) => {
  const router = useRouter();
  const info: DetailControllerType = router.query as DetailControllerType;

  const onBackClicked = () => {
    router.back();
  };

  return (
    <DetailView
      id={info.id!}
      data={info.data}
      onBackClicked={onBackClicked}
      userInfo={userInfo}
    />
  );
};

export default DetailController;
