import { ReactElement, useState } from "react";
import { Box, BoxMenu } from "./style/styleHeader";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeaderHome(): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <BoxMenu>
        <Tooltip title="Menu">
          <div onClick={handleClick}>
            <GiHamburgerMenu size={28} cursor={"pointer"} color="whitesmoke" />
          </div>
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleClose}>Histórico de buscas</MenuItem>
          </Link>
        </Menu>
      </BoxMenu>
    </Box>
  );
}
