import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🌐 Multi-Protocol Support',
    img: <img src={'/img/undraw_img_01.png'} alt={'Multi-Protocol Support'} className={styles.featureSvg}/>,
    description: (
      <>
          Access our API through <strong>HTTP</strong>, <strong>GraphQL</strong>, or <strong>WebSocket</strong>.
          Choose the protocol that fits your project and integrate seamlessly with our flexible endpoints.
      </>
    ),
  },
  {
    title: '💰 Comprehensive Cryptocurrency Data',
      img: <img src={'/img/undraw_img_02.png'} alt={'Comprehensive Cryptocurrency Data'} className={styles.featureSvg}/>,
    description: (
      <>
          Fetch live prices for <b>BTC</b>, <b>ETH</b>, and hundreds of other cryptocurrencies.
          Stay ahead with accurate and up-to-date currency values in your preferred base currency, like <b>USD</b> or <b>EUR</b>.
      </>
    ),
  },
  {
    title: '⚡ Real-Time Updates',
      img: <img src={'/img/undraw_img_03.png'} alt={'Real-Time Updates'} className={styles.featureSvg}/>,
    description: (
      <>
          Get instant updates on cryptocurrency prices with real-time streaming.
          Leverage our WebSocket support to monitor the market in real-time, ensuring your data is always current.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          {img}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
