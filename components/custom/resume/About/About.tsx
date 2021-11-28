import { AboutProps } from "./About.prop";

export const About = ({children, name,...props}: AboutProps): JSX.Element => {
    return (
    <div {...props}>
        <h1>About me</h1>
        <h3>{name}</h3>
        <p>{children}</p>
    </div>);
};