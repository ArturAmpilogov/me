import { AboutProps } from "./About.props";
import styles from "./About.module.scss";
import cn from "classnames";

export const About = ({children, name, photoUrl, ...props}: AboutProps): JSX.Element => {
    return (
    <div {...props} className={cn(styles.container)}>
        <h1>About me</h1>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>
            <img src={photoUrl} alt={`Photo ${name}`} width={150} height={170}/>
            <p>{children}</p>
        </div>
    </div>);
};