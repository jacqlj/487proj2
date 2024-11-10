import { RequestData, TenantData } from './interfaces';

export const getRequests = async (): Promise<RequestData[]> => {
  try {
    const response = await import('@/app/data/requests.json');
    return response.requests
      .sort((a, b) => +b.id - +a.id)
      .map((r) => ({
        id: r.id,
        unit: r.unit,
        location: r.location,
        problem: r.problem,
        image: typeof r.image !== 'undefined' ? new URL(r.image) : undefined,
        createdAt: new Date(r.createdAt),
        status: r.status === 'completed' ? 'completed' : 'pending',
      }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getTenants = async (): Promise<TenantData[]> => {
  try {
    const response = await import('@/app/data/tenants.json');
    return response.tenants
      .sort((a, b) => +a.id - +b.id)
      .map((t) => ({
        id: t.id,
        name: t.name,
        phone: t.phone,
        email: t.email,
        checkin: new Date(t.checkin),
        checkout: new Date(t.checkout),
        unit: t.unit,
      }));
  } catch (err) {
    console.log(err);
    return [];
  }
};
