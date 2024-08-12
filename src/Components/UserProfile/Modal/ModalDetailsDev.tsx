import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Fade,
  Modal,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { HeaderProfile, ImageProfile } from "../style/styleUserProfile";
import api from "../../../Api/api";
import { Notify } from "notiflix";
import Repos from "../Repos/Repos";
import { FaRegWindowClose } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  minWidth: { xs: "95%", sm: "70%", md: "50%", lg: "40%" },
  maxWidth: "90%",
  bgcolor: "background.paper",
  maxHeight: "90vh",
  borderRadius: "1em",
  boxShadow: 24,
  p: 2,
  overflowY: "auto",
  flexDirection: "column",
};

const reposListStyle = {
  maxHeight: "300px",
  overflowY: "auto",
  marginTop: "1em",
  paddingBottom: "1em",
};

export default function ModalDetailsDev({
  showModal,
  handleClose,
  dataProfileDev,
}): ReactElement {
  const [reposDev, setReposDev] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(!loading);
    const promise = api.get(
      `https://api.github.com/users/${dataProfileDev.login}/repos`
    );
    promise
      .then((res) => {
        setReposDev(res.data);
        setLoading(false);
      })
      .catch(() => {
        Notify.failure("Ocorreu um erro ao buscar os repositórios desse Dev");
        setLoading(false);
      });
  }, []);

  return (
    <Modal
      style={{ zIndex: 999 }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showModal}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <HeaderProfile>
              <ImageProfile src={dataProfileDev?.avatar_url} />
              <span style={{ fontFamily: "sans-serif" }}>
                <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                  Nome:{" "}
                </span>
                {dataProfileDev?.name ? dataProfileDev.name : "Sem Nome"}
              </span>
            </HeaderProfile>
            <FaRegWindowClose
              size={28}
              cursor={"pointer"}
              onClick={handleClose}
            />
          </Box>
          <Divider sx={{ marginTop: "1em" }} variant="fullWidth" />
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
          <Box marginTop="1em">
            <span style={{ fontFamily: "sans-serif" }}>
              <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                ID:{" "}
              </span>
              {dataProfileDev?.id ? dataProfileDev.id : ""}
            </span>
          </Box>
          <Box marginTop="1em">
            <span style={{ fontFamily: "sans-serif" }}>
              <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                Quantidade de seguidores:{" "}
              </span>
              {dataProfileDev?.followers ? dataProfileDev.followers : ""}
            </span>
          </Box>
          <Box marginTop="1em">
            <span style={{ fontFamily: "sans-serif" }}>
              <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
                Repositórios Públicos:{" "}
              </span>
              {dataProfileDev?.public_repos ? dataProfileDev.public_repos : ""}
            </span>
          </Box>
          <Box
            sx={{
              fontFamily: "sans-serif",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Lista de Repositórios:</h3>
          </Box>

          {loading ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            </>
          ) : (
            <Box sx={reposListStyle}>
              {reposDev?.map((repo, id) => (
                <Repos key={id} repo={repo} />
              ))}
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
