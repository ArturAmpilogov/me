import { JSX } from "react";
import Image from "next/image";

export const StackOverflowBadge = (): JSX.Element => {
  return (
    <a href="https://stackoverflow.com/users/304371/artur-a" target="_blank" rel="noreferrer">
      <Image
        src="https://stackoverflow.com/users/flair/304371.png"
        width={208}
        height={58}
        alt="profile for Artur A at Stack Overflow, Q&A for professional and enthusiast programmers"
        title="profile for Artur A at Stack Overflow, Q&A for professional and enthusiast programmers"
      />
    </a>
  );
};
