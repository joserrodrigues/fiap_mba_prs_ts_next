import React, { FC } from "react";
import DetailView from "./DetailView";
import { useRouter } from "next/router";
export type DetailControllerType = {
  id?: string;
  data: string;
};
const DetailController: FC = () => {
  const router = useRouter();
  const info: DetailControllerType = router.query as DetailControllerType;

  const onBackClicked = () => {
    router.back();
  };

  return (
    <DetailView id={info.id!} data={info.data} onBackClicked={onBackClicked} />
  );
};

export default DetailController;
