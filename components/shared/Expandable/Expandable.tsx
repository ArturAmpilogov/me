import { useState } from "react";
import { ExapndableProps } from "./Expandable.props";
import styles from "./Expandable.module.css";

export const Expandable = ({children, more, moreButtonText="see more", ...props}: ExapndableProps): JSX.Element => {
    const [showMore, setShowMore] = useState(false);

    return <div {...props}>
        {children}
        {more && <button 
            className={styles.more}
            type="button" 
            onClick={() => setShowMore(prevShow => !prevShow)}>
                {showMore ? "see less" : moreButtonText }
            </button> }
        {showMore && more}
    </div>
}