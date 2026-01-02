import { createContext, useContext, useState } from "react";
import { ComingSoonModal } from "../component/ui";

const ComingSoonContext = createContext(null);

export const ComingSoonProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [featureName, setFeatureName] = useState("");

  const openComingSoon = (name = "This feature") => {
    setFeatureName(name);
    setIsOpen(true);
  };

  const closeComingSoon = () => {
    setIsOpen(false);
    setFeatureName("");
  };

  return (
    <ComingSoonContext.Provider
      value={{
        openComingSoon,
        closeComingSoon,
      }}
    >
      {children}

      {/* Global modal */}
      <ComingSoonModal
        isOpen={isOpen}
        featureName={featureName}
        onClose={closeComingSoon}
      />
    </ComingSoonContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useComingSoon = () => {
  const context = useContext(ComingSoonContext);
  if (!context) {
    throw new Error("useComingSoon must be used inside ComingSoonProvider");
  }
  return context;
};
