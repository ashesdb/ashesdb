import css from './Hello.module.css';

export function Hello() {
	return (
		<div className={css.hello}>
			<h1 className={css.logotype}>
				Ashes<span>DB</span>
			</h1>
			<p className={css.subtext}>Coming soon(ish).</p>
		</div>
	);
}
