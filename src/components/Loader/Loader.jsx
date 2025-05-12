import { MoonLoader } from "react-spinners";

export default function Loader() {
    const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
  };
  
  return (
        <MoonLoader
          size={150}
          color={"purple"}
          loading={true}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    );
  }
