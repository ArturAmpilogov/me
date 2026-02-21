"use client";

import { JSX, useId, useState } from "react";
import { ExpandableProps } from "./Expandable.props";
import styles from "./Expandable.module.css";

export const Expandable = ({
  children,
  more,
  moreButtonText = "see more",
}: ExpandableProps): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const contentId = useId();

  return (
    <>
      {children}
      {more && (
        <button
          className={styles.more}
          type="button"
          aria-expanded={showMore}
          aria-controls={contentId}
          onClick={() => setShowMore((prevShow) => !prevShow)}
        >
          {showMore ? "see less" : moreButtonText}
        </button>
      )}
      {showMore && <div id={contentId}>{more}</div>}
    </>
  );
};
