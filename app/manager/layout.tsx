import Dash from '../dash';

export default function ManagerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Dash
        dispname={'Mann A German'}
        role={'Manager'}
        navitems={[
          {
            text: 'Tenants',
            href: '/tenants',
          },
        ]}
        content={children}
      />
    </>
  );
}
