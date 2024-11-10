'use client';

import Button from '@/app/components/Button';
import style from './page.module.css';
import { getTenants } from '@/app/functions';
import { TenantData } from '@/app/interfaces';
import { useEffect, useState } from 'react';

export default function Tenants() {
  const [tenants, setTenants] = useState<TenantData[]>([]);

  const [idList, setIDList] = useState<string[]>([]);

  const [idSel, setIDSel] = useState<string>('');

  useEffect(() => {
    getTenants().then((tenants) => {
      setTenants(tenants);
      setIDList([...new Set(tenants.map((t) => t.id).sort())]);
      setIDSel(tenants.map((t) => t.id).sort()[0]);
    });
  }, []);

  return (
    <div className={style.layoutGrid}>
      <div className={style.sidebar}>
        <div className={style.filter}>
          <label>Tenant ID</label>
          <select name="id" id="id" onChange={(e) => setIDSel(e.currentTarget.value)}>
            {idList.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={style.main}>
        {tenants
          .filter((t) => t.id === idSel)
          .map((t) => (
            <>
              <div className={style.name}>{t.name}</div>
              <div className={style.details}>
                <span>Tenant ID</span>
                <span>{t.id}</span>
                <span>Phone</span>
                <span>{t.phone}</span>
                <span>Email</span>
                <span>{t.email}</span>
                <span>Check-in</span>
                <span>{t.checkin.toDateString()}</span>
                <span>Check-out</span>
                <span>{t.checkout.toDateString()}</span>
                <span>Unit</span>
                <span>{t.unit}</span>
              </div>
              <span className={style.buttons}>
                <Button icon={<i className="bi bi-pencil"></i>} text="Edit details" />
                <Button icon={<i className="bi bi-trash3"></i>} text="Delete tenant" />
              </span>
            </>
          ))}
      </div>
    </div>
  );
}
