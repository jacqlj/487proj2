'use client';

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import Request from '@/app/components/Request';
import { RequestData } from '@/app/interfaces';
import { getRequests } from '@/app/functions';
import style from './page.module.css';

export default function FilteredRequests() {
  const [requests, setRequests] = useState<RequestData[]>([]);

  const [unitList, setUnitList] = useState<string[]>([]);
  const [locList, setLocList] = useState<string[]>([]);
  const [statusList, setStatusList] = useState<string[]>([]);

  const [unitSel, setUnitSel] = useState<string>('');
  const [locSel, setLocSel] = useState<string>('');
  const [statusSel, setStatusSel] = useState<'pending' | 'completed' | ''>('');

  useEffect(() => {
    getRequests().then((rqs) => {
      setRequests(rqs);
      setUnitList([...new Set(rqs.map((r) => r.unit).sort())]);
      setLocList([...new Set(rqs.map((r) => r.location).sort())]);
      setStatusList([...new Set(rqs.map((r) => r.status).sort())]);
    });
  }, []);

  const filterOptionDiv = (name: string, list: string[], mutator: Dispatch<SetStateAction<any>>) => (
    <div className={style.filter}>
      <label>{name}</label>
      <select name={name} id={name} onChange={(e) => mutator(e.currentTarget.value)}>
        <option value=""></option>
        {list.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className={style.layoutGrid}>
      <div className={style.main}>
        {requests
          .filter((d) => unitSel === '' || d.unit === unitSel)
          .filter((d) => locSel === '' || d.location === locSel)
          .filter((d) => statusSel === '' || d.status === statusSel)
          .map((data) => (
            <Request key={data.id} data={data} userType="maintenance" />
          ))}
      </div>
      <div className={style.sidebar}>
        <span className={style.title}>Filter by</span>
        {filterOptionDiv('Unit', unitList, setUnitSel)}
        {filterOptionDiv('Location', locList, setLocSel)}
        {filterOptionDiv('Status', statusList, setStatusSel)}
      </div>
    </div>
  );
}
