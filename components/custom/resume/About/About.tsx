import { AboutProps } from "./About.prop";
import Image from "next/image";
import styles from "./About.module.scss";

export const About = ({children, name, photoUrl, ...props}: AboutProps): JSX.Element => {
    return (
    <div {...props}>
        <h1>About me</h1>
        <h3>{name}</h3>
        <div className={styles.container}>
            <Image src={photoUrl} alt={`Photo ${name}`} width="128" height="145"/>
            <p>{children}</p>
        </div>
    </div>);
};