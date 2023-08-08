import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="sticky top-[100vh] ">
      <div className="border-t border-neutral-400 dark:border-neutral-700 pt-4 text-neutral-700 dark:text-neutral-300 text-center text-base md:text-lg">
        <p className="pb-8">built with <span className="text-red-500">♥</span> by 
          <a
          target="_blank"
          rel="noreferrer"
          href="https://www.dannydoan.dev/"
          >
            {" danny↗"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
