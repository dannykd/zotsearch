import { FC } from "react";

interface CardProps {
  title: string,
  desc: string,
  id: string
}

const Card: FC<CardProps> = ({title, desc, id}) => {
  return (
    <div className="max-h-28 overflow-hidden text-base bg-neutral-900 ring-[0.8px] ring-neutral-700 w-full rounded-md px-2 py-1">
      <div className="h-28 overflow-y-auto p-2">
        <h1><span className="font-semibold">{id}:</span> <span>{title}</span></h1>
        <p className="text-neutral-400">{desc}</p>
      </div>
    </div>
  )
};

export default Card;

