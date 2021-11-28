import { AboutProps } from "./About.prop";
import styles from "./About.module.scss";

export const About = ({children, name, photoUrl, ...props}: AboutProps): JSX.Element => {
    return (
    <div {...props}>
        <h1>About me</h1>
        <h3>{name}</h3>
        <div className={styles.container}>
            <img src={photoUrl} alt={`Photo ${name}`} width="150"/>
            <p>{children}</p>
        </div>
    </div>);
};