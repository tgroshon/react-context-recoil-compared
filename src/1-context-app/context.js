import React from "react";

export const SpreadsheetContext = React.createContext([[[]], () => {}]);

export const Provider = ({ size, children }) => {
  const data = [...Array(size).keys()].map(x =>
    [...Array(size).keys()].map(x => 0)
  );
  const value = React.useState(data);

  return (
    <SpreadsheetContext.Provider value={value}>
      {children}
    </SpreadsheetContext.Provider>
  );
};
