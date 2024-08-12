import { motion } from "framer-motion";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundGithub from "../../assets/images/github-background.png";
import {
  Box,
  BackgroundInitialScreen,
  Title,
} from "./style/styleScreenInitial";
import { FaLongArrowAltRight } from "react-icons/fa";

const slideInAnimation = {
  initial: { x: "-100vw" },
  animate: { x: "0" },
  transition: {
    type: "spring",
    stiffness: 50,
    damping: 10,
  },
};
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function InitialScreen(): ReactElement {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/home");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerAnimation}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BackgroundInitialScreen src={BackgroundGithub} />
      <motion.div {...slideInAnimation}>
        <Box>
          <Title>Seja Bem-Vindo ao site Encontra Dev</Title>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              width: "100%",
              maxWidth: "25em",
              cursor: "pointer",
              padding: "0.2em",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
            onClick={handleNavigation}
          >
            <h2
              style={{
                fontSize: "1.5em",
                color: "#979797",
                fontFamily: "sans-serif",
              }}
            >
              Clique Para Buscar o Dev
            </h2>
            <FaLongArrowAltRight size={30} />
          </motion.div>
        </Box>
      </motion.div>
    </motion.div>
  );
}
