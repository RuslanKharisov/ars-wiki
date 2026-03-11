import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  alt: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "SOM-модули ARS",
    src: require("@site/static/img/feature-som.webp").default,
    alt: "Фотография SOM-модуля ARS на базе RK3588",
    description: (
      <>
        Процессорные модули форм-фактора SMARC на базе RK3588 и других SoC для
        панелей оператора, промышленных контроллеров и встраиваемых систем. В
        wiki собраны характеристики, схемы включения и рекомендации по
        интеграции.
      </>
    ),
  },
  {
    title: "Несущие и отладочные платы",
    src: require("@site/static/img/feature-carrier.webp").default,
    alt: "Фотография несущей платы ARS для SOM-модуля RK3588",
    description: (
      <>
        Carrier-board и отладочные комплекты позволяют быстро запустить SOM,
        подключить дисплеи, сеть и периферию и отладить типовые сценарии.
        Документация включает pinout, комментарии к схемам и советы по разводке.
      </>
    ),
  },
  {
    title: "Документация для интеграторов",
    src: require("@site/static/img/feature-docs.webp").default,
    alt: "Схематичное изображение документации и блок-схемы системы",
    description: (
      <>
        Пошаговые руководства по запуску, инструкции по прошивке и обновлениям,
        примеры для Linux и других ОС, а также разделы с типовыми ошибками
        помогают инженерам быстрее внедрять решения на базе модулей ARS.
      </>
    ),
  },
];

function Feature({ title, src, alt, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} alt={alt} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
