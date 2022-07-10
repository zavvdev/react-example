import { createUseStyles } from "react-jss";

const useTypewriterStyles = createUseStyles((theme) => {
  return {
    "@keyframes typing": {
      "0%": { width: "0" },
      "50%": { width: "100%" },
      "100%": { width: "100%" },
    },

    "@keyframes blinkCaret": {
      "from, to": { borderColor: "transparent" },
      "50%": { borderColor: theme.palette.primary.main },
    },

    root: {
      display: "inline-block",

      "& > *": {
        overflow: "hidden",
        borderRight: `2.5px solid ${theme.palette.primary.main}`,
        whiteSpace: "nowrap",
        margin: "0 auto",
        animation: ({ typeSpeedSec }) => {
          return `$typing ${typeSpeedSec || 8}s steps(40, end) infinite,
          $blinkCaret .7s step-end infinite`;
        },
      },
    },
  };
});

export { useTypewriterStyles };
