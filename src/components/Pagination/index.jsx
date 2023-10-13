import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import { ApiContext } from "../Context/Context";

const PaginationLayout = () => {
  const { pageNumber, setPageNumber, infoApi } = useContext(ApiContext);
  return (
    <Pagination
      sx={{ pb: 4 }}
      count={500}
      defaultPage={infoApi.page}
      page={pageNumber}
      onChange={(event, page) => {
        setPageNumber(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      color="primary"
    />
  );
};

export default PaginationLayout;
