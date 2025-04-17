import {ReactNode} from "react";

export const PrimaryButton = ({text}:{text: string | ReactNode}) =>
  (<button className={"bg-white font-semibold px-6 py-3 rounded-4xl w-fit hover:scale-105 uppercase tracking-wider leading-[24px]"}>
    {text}
  </button>)