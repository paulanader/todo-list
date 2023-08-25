import { TailSpin } from "react-loader-spinner";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <TailSpin ariaLabel="loading-indicator" color="#8284FA" />
    </LoadingContainer>
  );
};
