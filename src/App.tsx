import kyle from "/kyle.lewis.headshot.jpg";
import "./App.css";
import { Box, List, Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/300.css";
import { ExperienceListItem } from "./ExperienceListItem";
import { EXPERIENCE_LIST_ITEMS } from "./constants";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 1,
          maxWidth: "500px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: 1, maxWidth: "180px" }} color="rgba(0, 0, 0, 0.85)">
          <img
            style={{ width: "100%", borderRadius: "100px" }}
            src={kyle}
            alt=""
          />
        </Box>
        <Box>
          <Box sx={{ fontWeight: 700 }}>
            <Typography
              sx={{ fontFamily: "Roboto", fontSize: "48px", fontWeight: 700 }}
              variant="h1"
              color="primary"
            >
              Kyle Lewis
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Experienced Auto Mechanic
            </Typography>
          </Box>
          <Box sx={{ fontWeight: 300 }}>
            <Typography>(518) 718-4111</Typography>
            <Typography>Lewis.Kyle.R@gmail.com</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4, textAlign: "left", maxWidth: "400px" }}>
          <Typography sx={{ fontSize: "28px", textAlign: "center" }}>
            About
          </Typography>
          <Typography sx={{ textAlign: "left", mt: 2 }}>
            I love fixing automobiles. I'm hard-working, motivated, and
            respectful. I'm always happy to help my coworkers.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            I've worked in a shop setting and also as a mobile tech. I have my
            own tools. I'm 6'0", 180 lbs with ample strength for strenuous
            labor.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Below you'll find a list of the jobs with which I have experience.
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontSize: "28px" }}>Experience</Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {EXPERIENCE_LIST_ITEMS.map((text, i) => (
              <ExperienceListItem key={`${i}${text}`} primaryText={text} />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default App;
