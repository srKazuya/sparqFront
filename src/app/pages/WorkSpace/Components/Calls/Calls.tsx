import { useRef, useState, useEffect } from 'react';
import CameraIcon from '@components/Icons/CameraIcon';
import styles from './Calls.module.scss';
import Text from '@components/Text';
import CallItem from '../ListItems/CallItem';
export const CallsText = () => (
  <Text
  >
      Созвоны
  </Text>
);
const Calls = () => {
  const callsListRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (callsListRef.current) {
        setCanScroll(callsListRef.current.scrollHeight > callsListRef.current.clientHeight);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollDown = () => {
    if (callsListRef.current) {
      callsListRef.current.scrollBy({ top: 50, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.root_block}>
      <div className={styles.root_block__header}>
        <Text
          view="title"
          weight="medium"
          color="secondary"
          className={styles.root_block__header__title}
        >
          Созвоны
        </Text>
        <CameraIcon
          className={styles.root_block__header__camera__icon}
          notification={true}
        />
      </div>
      <hr color="#6B6D7F" />
      <div ref={callsListRef} className={styles.calls_list}>
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
        <CallItem title="Team" description="На встрече будут обсуждены основные моменты отношений в команде" datetime="Cегодня в 14:00" />
      </div>
      <div
        className={`${styles.pagination} ${!canScroll ? styles.hidden : ''}`}
        onClick={scrollDown}
      >
        <div className={styles.pagination__icon}></div>
      </div>
    </div>
  );
};

export default Calls;
