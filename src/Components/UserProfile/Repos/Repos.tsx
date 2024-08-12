import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

export default function Repos({ repo }): ReactElement {
  const handleRepoClick = () => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <Box
      onClick={handleRepoClick}
      sx={{
        cursor: "pointer",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "1em",
        marginBottom: "1em",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
        {repo.name}
      </Typography>
      <Typography variant="body2" component="div" sx={{ color: "#555" }}>
        Linguagem: {repo.language ? repo.language : "Não especificada"}
      </Typography>
      <Typography variant="body2" component="div" sx={{ color: "#777" }}>
        Descrição: {repo.description ? repo.description : "Sem descrição"}
      </Typography>
      <Typography variant="body2" component="div" sx={{ color: "#777" }}>
        Criado em: {new Date(repo.created_at).toLocaleDateString()}
      </Typography>
      <Typography variant="body2" component="div" sx={{ color: "#777" }}>
        Último Push: {new Date(repo.pushed_at).toLocaleDateString()}
      </Typography>
    </Box>
  );
}
