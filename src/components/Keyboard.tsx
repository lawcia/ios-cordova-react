import { useEffect } from "react";

interface KeyboardProps {
  handleKeyPress: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ handleKeyPress }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const regex = /^[A-Za-z]$/;

      // validate key press is alphabetic

      if (regex.test(event.key) || event.key === "Enter") {
        handleKeyPress(event.key.toUpperCase());
      }
    };
    window.addEventListener("keypress", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keypress", handleKeyDown);
    };
  }, [handleKeyPress]);

  return <div></div>;
};

export default Keyboard;
