import React from "react";

import useThemeTitleSelector from "../../../countdown-state-management/hooks/theme/useThemeTitleSelector";

function CountdownTitle() {
  const { text } = useThemeTitleSelector();

  return (
    <h2 data-element="countdown-title" aria-label={text}>
      {text}
    </h2>
  );
}

const areEqual = () => true;
const MemoizedCountdownTitle = React.memo(CountdownTitle, areEqual);
export default MemoizedCountdownTitle;
