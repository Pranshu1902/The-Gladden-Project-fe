import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ConfirmDeleteChats(props: {
  closeCB: () => void;
  deleteCB: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    props.deleteCB();
    setLoading(false);
    props.closeCB();
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <div className="text-2xl flex justify-center items-center gap-2">
        <i className="fas fa-exclamation-triangle text-red-500"></i> Are you
        sure you want to delete all chats?
      </div>
      {loading ? (
        <div>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:justify-between gap-2 w-full">
          <Button
            variant="outlined"
            style={{ backgroundColor: "gray", color: "white" }}
            className="w-full md:w-auto"
            onClick={() => props.closeCB()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "red", color: "white" }}
            className="w-full md:w-auto"
            onClick={() => {
              handleSubmit();
            }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
