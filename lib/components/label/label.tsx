import { ReactElement } from "react";
import { Text } from "$lib/components/text";
import { LabelProps } from "./label.type";
import { clsx } from "clsx";

export function Label({ text, color }: LabelProps): ReactElement {
  return (
    <span>
      <Text
        size="small"
        className={clsx("rounded uppercase px-1", {
          "bg-blue text-white": color === "blue",
          "bg-green text-white": color === "green"
        })}
      >
        {text}
      </Text>
    </span>
  );
}