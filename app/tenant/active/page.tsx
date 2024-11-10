'use client';

import { useEffect, useState } from 'react';

import Request from '@/app/components/Request';
import { RequestData } from '@/app/interfaces';
import { getRequests } from '@/app/functions';
import style from './page.module.css';

export default function TenantActive() {
  const [requests, setRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    getRequests().then(setRequests);
  }, []);

  return (
    <div className={style.main}>
      {requests
        .filter((req) => req.unit === '3132-B')
        .filter((req) => req.status === 'pending')
        .map((data) => (
          <Request key={data.id} data={data} userType="tenant" />
        ))}
    </div>
  );
}
