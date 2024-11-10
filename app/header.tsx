export default function Header(props: { name?: string; role: string; desc?: string }) {
  return (
    <>
      <div style={{ fontSize: '2rem' }}>Welcome, {props.name ?? 'user'}</div>
      <div style={{ fontWeight: 'bolder' }}>
        {props.role}
        {props.desc !== null ? ` • ${props.desc}` : ''}
      </div>
    </>
  );
}
