"use client";

import { JSX, useState } from "react";
import { ExpandableProps } from "./Expandable.props";
import styles from "./Expandable.module.css";

export const Expandable = ({
  children,
  more,
  moreButtonText = "see more",
}: ExpandableProps): JSX.Element => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {children}
      {more && (
        <button
          className={styles.more}
          type="button"
          onClick={() => setShowMore((prevShow) => !prevShow)}
        >
          {showMore ? "see less" : moreButtonText}
        </button>
      )}
      {showMore && more}
    </>
  );
};
