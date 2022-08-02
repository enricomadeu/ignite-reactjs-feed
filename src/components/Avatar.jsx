import styles from './Avatar.module.css'; // Import the stylesheet

export function Avatar({ hasBorder = true, src }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}