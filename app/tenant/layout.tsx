import Dash from '../dash';

export default function TenantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dash
      dispname={'Asahina Mafuyu'}
      role={'Tenant'}
      desc={'Unit 3132-B'}
      navitems={[
        {
          text: 'Active requests',
          href: '/active',
        },
        {
          text: 'Create request',
          href: '/new',
        },
        {
          text: 'Request history',
          href: '/history',
        },
      ]}
      content={children}
    />
  );
}
