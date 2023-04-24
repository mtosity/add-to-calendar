import React from "react";
import { atcb_action } from "add-to-calendar-button";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const AddButton = () => {
  const [data, setData] = React.useState({
    startISO: new Date().toISOString(),
    endISO: new Date().toISOString(),
    text: "",
    details: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const startDate = dayjs(data.startISO).format("YYYY-MM-DD"),
      endDate = dayjs(data.endISO).format("YYYY-MM-DD");

    const startTime = dayjs(data.startISO).format("HH:mm"),
      endTime = dayjs(data.endISO).format("HH:mm");

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    atcb_action({
      name: data.text,
      description: data.details,
      startDate,
      endDate,
      startTime,
      endTime,
      timeZone,
      options: [
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "Outlook.com",
        "Yahoo",
      ],
      trigger: "click",
      iCalFileName: "Reminder-Event",
    });
  };

  return (
    <form style={{ padding: 16 }} onSubmit={onSubmit}>
      <Box paddingBottom={2}>
        <TextField
          label="Title / Name"
          variant="outlined"
          onChange={(e) => setData({ ...data, text: e.target.value })}
          fullWidth
          required
        />
      </Box>

      <Box paddingBottom={2}>
        <TextField
          label="Description"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />
      </Box>

      <Box paddingBottom={2}>
        <DateTimePicker
          label="Start"
          value={data.startISO}
          onChange={(date) =>
            setData({ ...data, startISO: new Date(date).toISOString() })
          }
          renderInput={(params) => <TextField {...params} />}
          required
        />
        <span style={{ marginLeft: 4, marginRight: 4 }} />
        <DateTimePicker
          label="End"
          value={data.endISO}
          onChange={(date) =>
            setData({ ...data, endISO: new Date(date).toISOString() })
          }
          renderInput={(params) => <TextField {...params} />}
          required
        />
      </Box>

      <Box paddingBottom={2}>
        <Button variant="contained" type="submit">
          Generate
        </Button>
      </Box>
    </form>
  );
};
