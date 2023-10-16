import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import { ApiContext } from "../Context/Context";

const PaginationLayout = () => {
  const { pageNumber, setPageNumber, infoApi } = useContext(ApiContext);
  return (
    <Pagination
      sx={{
        pb: 4,
        "& .MuiPaginationItem-root": {
          color: "#FFF", // Color de la letra (numeros de las paginas)
        },
        "& .MuiPaginationItem-page.Mui-selected": {
          backgroundColor: "#16162A", // Color de la página seleccionada
        },
      }}
      count={500}
      defaultPage={infoApi.page}
      page={pageNumber}
      onChange={(event, page) => {
        setPageNumber(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
};

export default PaginationLayout;
