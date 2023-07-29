import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bottom-2 mt-24 flex w-full justify-center border-t pt-2 text-sm text-neutral-400">
      <p className="pb-8">INSERT_FOOTER_TEXT</p>
    </div>
  );
};

export default Footer;
