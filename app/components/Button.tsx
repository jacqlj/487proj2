import style from './Button.module.css';

export default function Button({
  text,
  icon,
  type,
}: {
  text: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button className={style.button} type={type}>
      {icon !== undefined ? <span style={{ marginRight: '0.5rem' }}>{icon}</span> : <></>}
      {text}
    </button>
  );
}
