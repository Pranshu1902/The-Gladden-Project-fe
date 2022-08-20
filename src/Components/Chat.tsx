import React, { useEffect, useState } from "react";
import { deleteChat, getChats, sendChat } from "../api/ApiUtils";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import LoginRequired from "./Modal/LoginRequired";
import Popup from "./Popup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import moment from "moment";
import { Button, TextField } from "@mui/material";
import ConfirmDeleteChats from "./Modal/ConfirmDeleteChats";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
});

type chat = {
  id: number;
  text: string;
  date: Date;
  type: string;
};

export default function Chat() {
  const classes = useStyles();

  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<chat[]>([]);
  const [text, setText] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const fetchData = () => {
    setLoading(true);
    getChats().then((data) => {
      setChats(data);
      setLoading(false);
    });
  };

  const deleteAll = () => {
    chats.forEach((chat) => {
      deleteChat(chat.id);
    });
    setChats([]);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setShowLogin(true);
    }
    setLoading(true);
    getChats().then((data) => {
      setChats(data);
      setLoading(false);
    });

    document.title = "Chat | The Gladden Project";
  }, []);

  const submitTextMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChats([
      ...chats,
      { id: Number(), text, date: new Date(), type: "sent" },
    ]);
    await sendChat(text);
    setText("");
    fetchData();
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#011627]">
        <div className="text-3xl p-4 mb-4 flex justify-between">
          <p className="text-[#2EC4B6] font-bold">Self</p>
          <div className="">
            <Button
              variant="outlined"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => setConfirmDelete(true)}
            >
              Delete
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {chats.length > 0 ? (
              chats.map((chat) => (
                <div className="p-4 text-gray-700 w-full relative">
                  {chat.type === "sent" ? (
                    <div className="">
                      <div className="bg-yellow-100 flex flex-row justify-end items-end p-2 rounded-lg w-fit right-4 inset-y-0 absolute">
                        <div>{chat.text}</div>
                        <div className="flex justify-end items-end pt-2 pl-2 bottom-2 right-2 text-sm text-gray-500">
                          {moment(chat.date).format("hh:mm")}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-green-100 flex flex-row justify-start p-2 rounded-lg w-fit">
                        <div>{chat.text}</div>
                        <div className="flex justify-end items-end pt-2 pl-2 bottom-2 right-2 text-sm text-gray-500">
                          {moment(chat.date).format("hh:mm")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-white text-5xl flex justify-center items-center">
                No chats found
              </div>
            )}
          </div>
        )}
        <form
          className="p-4"
          onSubmit={(e) => {
            submitTextMessage(e);
          }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              color="secondary"
              className="text-white"
              inputProps={{ className: classes.input }}
              placeholder="Type a message..."
              fullWidth
            />
            <div className="flex justify-center items-center">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={text.length === 0}
                style={{ backgroundColor: "#2EC4B6", color: "#FFFFFF" }}
              >
                <i className="fa fa-paper-plane"></i>&nbsp;Send
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      {/* Login required popup */}
      <Popup open={showLogin} onClose={() => {}}>
        <LoginRequired />
      </Popup>
      {/* Confirm delete all messages */}
      <Popup open={confirmDelete} onClose={() => setConfirmDelete(false)}>
        <ConfirmDeleteChats
          closeCB={() => setConfirmDelete(false)}
          deleteCB={() => deleteAll()}
        />
      </Popup>
    </div>
  );
}
