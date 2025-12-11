import { InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
  backgroundColor: alpha(
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
    0.15
  ),
  "&:hover": {
    backgroundColor: alpha(
      theme.palette.mode === "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
      0.25
    ),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: 50,
  width: "80%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: () => void;
}

const Search = ({ onChange, onKeyDown }: Props) => {
  return (
    <SearchDiv>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search games…"
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onKeyDown();
        }}
      />
    </SearchDiv>
  );
};

export default Search;
