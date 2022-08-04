import Button from "@mui/material/Button";

export default function LoginRequired() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <div className="text-3xl">
        <i className="text-red-500 fas fa-exclamation-triangle"></i> Login
        required!
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#13ae4b", color: "white" }}
        className="cursor-pointer"
        href="/login"
      >
        Login
      </Button>
    </div>
  );
}
