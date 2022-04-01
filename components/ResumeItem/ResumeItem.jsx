import { useTheme } from 'next-themes';

import styles from './ResumeItem.module.css';

const ResumeItem = ({ title, company, timeline, description, duties }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={styles.resumeItem}
      style={{ border: theme === 'light' ? '2px solid lightgray' : 'none' }}
    >
      <div className={styles.resumeItemHeader}>
        <div>
          <h1 className={styles.profession}>{title}</h1>
          <h2 className={styles.company}>{company}</h2>
        </div>
        <p className={styles.timeline}>{timeline}</p>
      </div>
      <div className={styles.resumeBody}>
        <p className={styles.description}>{description}</p>
        <ul className={styles.resumeList}>
          {duties.map(duty => (
            <li key={duty.index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeItem;
