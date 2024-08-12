import { ReactElement, useState } from "react";
import {
  Box,
  Content,
  HeaderProfile,
  ImageProfile,
} from "./style/styleUserProfile";
import ModalDetailsDev from "./Modal/ModalDetailsDev";
import { Divider, Tooltip } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function UserProfile({
  dataProfileDev,
  setProfileDev,
}: any): ReactElement {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCloseUser = () => {
    setProfileDev("");
  };

  return (
    <Content>
      <Box width="30em">
        <Box display="flex">
          <HeaderProfile>
            <ImageProfile
              style={{ cursor: "pointer" }}
              src={dataProfileDev?.avatar_url}
              onClick={() => setOpenModal(!openModal)}
            />
            <span style={{ fontFamily: "sans-serif" }}>
              <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                Nome:{" "}
              </span>
              {dataProfileDev?.name ? dataProfileDev.name : "Sem Nome"}
            </span>
          </HeaderProfile>

          {location.pathname === "/home" ? (
            <div>
              <Tooltip title="Fechar">
                <div>
                  <FaRegWindowClose
                    size={28}
                    cursor={"pointer"}
                    onClick={handleCloseUser}
                  />
                </div>
              </Tooltip>
            </div>
          ) : null}
        </Box>
        <Divider sx={{ marginTop: "1em" }} />
        <Box marginTop="1em">
          <span style={{ fontFamily: "sans-serif" }}>
            <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
              Login:{" "}
            </span>
            {dataProfileDev?.login ? dataProfileDev.login : ""}
          </span>
        </Box>
        <Box marginTop="1em">
          <span style={{ fontFamily: "sans-serif" }}>
            <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
              Localização:{" "}
            </span>
            {dataProfileDev?.location ? dataProfileDev.location : ""}
          </span>
        </Box>
      </Box>
      {openModal && (
        <ModalDetailsDev
          showModal={openModal}
          handleClose={handleClose}
          dataProfileDev={dataProfileDev}
        />
      )}
    </Content>
  );
}
