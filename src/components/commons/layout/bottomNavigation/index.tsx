import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Link from "next/link";

export default function LayoutBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        padding: 1,
        width: "100%",
        position: "fixed",
        zIndex: 999,
        bottom: 0,
        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
          color: "#7457E8",
        },
      }}
      value={value}
      onChange={handleChange}
    >
      <Link href="/cafe">
        <BottomNavigationAction
          value="매장"
          icon={<StorefrontOutlinedIcon />}
        />
      </Link>

      <Link href={"/theme"}>
        <BottomNavigationAction value="테마" icon={<FavoriteIcon />} />
      </Link>

      <Link href={"/reservation"}>
        <BottomNavigationAction
          value="예약"
          icon={<BookOnlineOutlinedIcon />}
        />
      </Link>

      <Link href={"/community"}>
        <BottomNavigationAction value="커뮤니티" icon={<ChatOutlinedIcon />} />
      </Link>

      <Link href="/mypage">
        <BottomNavigationAction
          value="마이페이지"
          icon={<PermIdentityOutlinedIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
