import styles from "./index.module.scss";

export default function Hero(): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<div>
				<h1>NextJS Starter Template</h1>
				<p>
					Edit <code>components/Hero/index.tsx</code> to see changes
				</p>
			</div>
		</div>
	);
}
