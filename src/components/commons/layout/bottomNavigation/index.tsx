import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

export default function LayoutBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="매장"
        value="매장"
        icon={<StorefrontOutlinedIcon />}
      />
      <BottomNavigationAction
        label="테마"
        value="테마"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="예약"
        value="예약"
        icon={<BookOnlineOutlinedIcon />}
      />
      <BottomNavigationAction
        label="커뮤니티"
        value="커뮤니티"
        icon={<ChatOutlinedIcon />}
      />
      <BottomNavigationAction
        label="마이페이지"
        value="마이페이지"
        icon={<PermIdentityOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
