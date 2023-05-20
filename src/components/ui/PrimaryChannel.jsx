import { useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function PrimaryChannel({ channels, id, channelData, setChannelData, data }) {
  const [channel, setChannel] = useState("");
  const theme = useTheme();

  const handleChange = (e) => {
    setChannel(e.target.value);
    const data =
      channelData.length > 0 &&
      channelData.map((ch) => {
        if (ch?.id === id) {
          return { ...ch, primaryChannel: e.target.value };
        } else {
          return ch;
        }
      });
    setChannelData(data);
    console.log(data);
    localStorage.setItem("channels", JSON.stringify(data));
  };
  return (
    <FormControl
      sx={{
        m: 1,
        width: 160,
        mt: 3,
        [theme.breakpoints.down("sm")]: { width: 80 },
      }}
    >
      <Select
        value={channel}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
        sx={{ [theme.breakpoints.down("sm")]: { width: "100%" } }}
      >
        {Array.isArray(channels?.primaryChannel) ? (
          <MenuItem value="">
            <em>Select Channel</em>
          </MenuItem>
        ) : (
          <MenuItem value="">
            <em>{channels?.primaryChannel}</em>
          </MenuItem>
        )}
        {data.channels[id - 1].primaryChannel.map((ch) => (
          <MenuItem value={ch} key={ch}>
            {ch}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PrimaryChannel;
