import { ReactElement, useEffect, useState } from "react";
import {
  Typography,
  List,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbMoodEmpty } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";
import UserProfile from "../../Components/UserProfile/UserProfile";
import { motion } from "framer-motion";
import {
  BackgroundHistory,
  BoxActionsHistory,
  BoxContent,
  BoxList,
  Content,
} from "./style/styleHistory";
import BackgroundGithub from "../../assets/images/github-background.png";
import { useNavigate } from "react-router-dom";

export default function History({ profileDev }): ReactElement {
  const [recentUsers, setRecentUsers] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("recentUsers") || "[]");
    setRecentUsers(storedUsers);
  }, [profileDev]);

  const clearRecentUsers = () => {
    localStorage.removeItem("recentUsers");
    setRecentUsers([]);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Content>
      <BackgroundHistory src={BackgroundGithub} />
      <BoxContent>
        <BoxContent backgroundColor="whitesmoke">
          <Typography
            variant="h6"
            component="div"
            sx={{ padding: "1em", textAlign: "center" }}
          >
            Devs buscados recentes
          </Typography>
        </BoxContent>
        {recentUsers.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "10em",
              maxWidth: "20em",
              borderRadius: "1em",
              backgroundColor: "whitesmoke",
            }}
          >
            <Typography>Histórico Vazio!</Typography>
            <TbMoodEmpty size={30} style={{ marginLeft: "1em" }} />
          </Box>
        ) : (
          <BoxList>
            <List
              sx={{
                maxHeight: "25em",
                overflowY: "auto",
                padding: "1em",
                // backgroundColor: "#828282",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <BoxActionsHistory>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={clearRecentUsers}
                >
                  Limpar Lista
                  <FaRegTrashAlt size={20} style={{ marginLeft: "1em" }} />
                </Button>
              </BoxActionsHistory>
              {recentUsers.map((user: any, index) => (
                <UserProfile key={index} dataProfileDev={user} />
              ))}
            </List>
          </BoxList>
        )}
      </BoxContent>
      <Tooltip title="Voltar para a Home">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            bottom: "1em",
            right: "1em",
            zIndex: 1000,
          }}
        >
          <IconButton
            sx={{
              color: "whitesmoke",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
            onClick={handleBack}
          >
            <IoArrowBackCircle size={40} />
          </IconButton>
        </motion.div>
      </Tooltip>
    </Content>
  );
}
