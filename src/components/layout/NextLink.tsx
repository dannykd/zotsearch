import { FC } from "react";
import Link from "next/link";
import { ReactNode } from 'react';

interface NextLinkProps {
  href: string;
  children?: ReactNode;
  pageName: string;
}

const NextLink: FC<NextLinkProps> = ({ href, children=<></>, pageName }) => {
  return (
    <Link href={href}>
      <a href={href}>
        <div className="flex space-x-2 hover:text-black">
          {children}
          <p>{pageName}</p>
        </div>
      </a>
    </Link>
  );
};

export default NextLink;
