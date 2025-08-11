import WrenchIcon from "@mui/icons-material/Build";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export const ExperienceListItem = ({ primaryText }: any) => {
  return (
    <ListItem sx={{ py: 0 }}>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: "transparent" }}>
          <WrenchIcon fontSize="small" color="secondary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} />
    </ListItem>
  );
};
