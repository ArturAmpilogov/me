import { LinksProps } from "./Links.prop";
import styles from "./Links.module.scss";
import { StackOverflowBadge } from "../About/StackoverflowBadge";

export const Links = ({ items, ...props }: LinksProps): JSX.Element => {
  return (
    <div {...props}>
      <h2>Links</h2>
      <ul className={styles.ul}>
        {items.map((item) => (
          <li key={item.name}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.name}
              <img src={item.icon} alt={item.name} width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
      <StackOverflowBadge />
    </div>
  );
};
