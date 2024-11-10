import Dash from '../dash';

export default function MaintenanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dash
      dispname={'Bob Builder'}
      role={'Maintenance Team Member'}
      desc={'ID: 3250020462'}
      navitems={[
        {
          text: 'Active requests',
          href: '/active',
        },
        {
          text: 'All past requests',
          href: '/history',
        },
        {
          text: 'Filter request history',
          href: '/filter',
        },
      ]}
      content={children}
    />
  );
}
