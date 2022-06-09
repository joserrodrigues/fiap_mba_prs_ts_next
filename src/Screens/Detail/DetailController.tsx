import React, { FC, useState, useEffect } from "react";
import DetailView from "./DetailView";
import { useRouter } from "next/router";
import { UserInfo } from "../../Interfaces/UserInfo";
export type DetailControllerType = {
  id?: string;
  data: string;
};
const DetailController: FC = () => {
  const router = useRouter();
  const info: DetailControllerType = router.query as DetailControllerType;
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/getInfo/${info.id + ""}?search=Roberto`)
      .then(function (response) {
        return response.json();
      })
      .then(function (info: UserInfo) {
        console.log(info);
        setUserInfo(info);
      });
  }, []);

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
