import { ReactElement, useState } from "react";
import { Content, BackgroundHome, BoxInput, Box } from "./style/styleHome";
import BackgroundGithub from "../../assets/images/github-background.png";
import { motion } from "framer-motion";
import InputSearch from "../../Components/InputSearch/InputSearch";
import { FcSearch } from "react-icons/fc";
import { Tooltip, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import api from "../../Api/api";
import { Notify } from "notiflix";
import UserProfile from "../../Components/UserProfile/UserProfile";
import { addUserToRecent } from "../History/functions/AddUserToRecent";
import HeaderHome from "../../Components/Header/HeaderHome";

const bounceAnimation = {
  y: [0, -10, 0],
  transition: {
    repeat: Infinity,
    duration: 1,
    ease: "easeInOut",
  },
};

const slideInAnimation = {
  initial: { x: "-100vw" },
  animate: { x: "0" },
  transition: {
    type: "spring",
    stiffness: 50,
    damping: 10,
  },
};
export default function Home({ profileDev, setProfileDev }): ReactElement {
  const [inputValue, setInputValue] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchDev() {
    setLoading(true);
    try {
      const dev = await api.get(`https://api.github.com/users/${inputValue}`);
      setProfileDev(dev.data);
      addUserToRecent(dev.data);
    } catch (error) {
      Notify.warning("Ops! Dev não encontrado.");
      setInputValue("");
      setProfileDev("");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Content>
      <HeaderHome />

      <BackgroundHome src={BackgroundGithub} />
      <Box backgroundColor="">
        <Box backgroundColor="whitesmoke">
          <Typography textAlign="center">
            Informe o nome de login do Dev que deseja encontrar
          </Typography>
        </Box>
        <motion.div {...slideInAnimation} style={{ width: "100%" }}>
          <BoxInput>
            <InputSearch
              placeholder="Buscar Perfil do Usuário"
              label="Buscar Devs"
              size="medium"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Tooltip title="Pesquisar">
              <motion.div
                animate={bounceAnimation}
                style={{ display: "inline-block" }}
              >
                <FcSearch
                  size={45}
                  cursor="pointer"
                  style={{ transform: "none" }}
                  onClick={searchDev}
                />
              </motion.div>
            </Tooltip>
          </BoxInput>
        </motion.div>

        {loading ? (
          <Box backgroundColor="whitesmoke">
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </Box>
        ) : (
          profileDev && (
            <UserProfile
              dataProfileDev={profileDev}
              setProfileDev={setProfileDev}
            />
          )
        )}
      </Box>
    </Content>
  );
}
