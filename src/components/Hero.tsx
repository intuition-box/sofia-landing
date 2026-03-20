import { useEffect, useState, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { useScrollAnim } from '../hooks/useScrollAnim';
import { URLS } from '../lib/config/urls';
import styles from './Hero.module.css';

const PARTNERS = [
  { name: 'Mastra', logo: '/img/partners/mastra.svg', url: 'https://mastra.ai/' },
  { name: 'Gaianet', logo: '/img/partners/gaianetlogo.png', url: 'https://www.gaianet.ai' },
  { name: 'Colony', logo: '/img/partners/colonnylogo.png', url: 'https://colony.io/' },
  { name: 'Intuition', logo: '/img/partners/intuitionlogo.svg', url: 'https://intuition.systems' },
  { name: 'Ollama', logo: '/img/partners/ollama.png', url: 'https://ollama.com' },
];

function Countdown() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const end = new Date('2026-04-15T00:00:00');
    const update = () => {
      const diff = Math.max(0, end.getTime() - Date.now());
      const d = Math.floor(diff / 864e5);
      const h = Math.floor((diff % 864e5) / 36e5);
      const m = Math.floor((diff % 36e5) / 6e4);
      const s = Math.floor((diff % 6e4) / 1e3);
      setDisplay(`${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.countdown}>
      <span className={styles.countdownNum}>{display}</span>
      <span className={styles.countdownLabel}>until Alpha Tester Reward Program ends</span>
    </div>
  );
}

export function Hero() {
  const titleRef = useScrollAnim();
  const greenRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const hero = heroRef.current;
    const green = greenRef.current;
    if (!hero || !green) return;

    const scrollY = window.scrollY;
    const heroH = hero.offsetHeight;
    const raw = Math.min(1, Math.max(0, scrollY / (heroH * 0.6)));

    // Ease in-out cubic: smooth acceleration and deceleration
    const p = raw < 0.5
      ? 4 * raw * raw * raw
      : 1 - Math.pow(-2 * raw + 2, 3) / 2;

    const marginX = Math.max(0, 40 * (1 - p));
    const radius = Math.max(0, 16 * (1 - p));
    const marginTop = Math.max(0, 20 * (1 - p));

    green.style.marginLeft = `${-marginX}px`;
    green.style.marginRight = `${-marginX}px`;
    green.style.marginTop = `${-marginTop}px`;
    green.style.borderRadius = `${radius}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section ref={heroRef} className={styles.hero}>
      <h1 ref={titleRef} className={`${styles.title} anim`}>
        From Surfing<br />the Web to <em>Owning It.</em>
      </h1>

      <Countdown />

      <div ref={greenRef} className={styles.greenWrap}>
        <img
          src="/img/screenshots/homepage.png"
          alt="Sofia Extension"
          className={styles.screenshot}
        />

        <div className={styles.ctas}>
          <a href="https://tally.so/r/7RdaeR" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Join Alpha <Arrow />
          </a>
          <a href={URLS.docs.intro} className="btn btn-light">
            Read the docs <Arrow />
          </a>
        </div>

        <div className={styles.logos}>
          {PARTNERS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
              <img src={p.logo} alt={p.name} />
            </a>
          ))}
        </div>

        <div className={styles.banner}>
          <p>Sofia turns your web activity into a verifiable, rewarded on-chain identity.</p>
        </div>
      </div>

      <div className={styles.spacer} />
    </section>
  );
}
