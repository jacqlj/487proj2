'use client';

import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';
import style from './dash.module.css';

export default function Dash({
  dispname,
  role,
  desc,
  navitems,
  content,
}: {
  dispname?: string;
  role: string;
  desc?: string;
  navitems: { text: string; href: string }[];
  content: React.ReactNode;
}) {
  const path_arr = usePathname().split('/');
  const leaf = `/${path_arr.pop()}`;
  const root = `/${path_arr.pop()}`;
  const router = useRouter();

  return (
    <>
      <div className={style.grid}>
        <div className={style.head}>
          <div>
            <div className={style.name}>Welcome, {dispname}</div>
            <div className={style.desc}>
              {role} {desc ? `  •   ${desc}` : ''}
            </div>
          </div>
          <Link href={'/'}>Logout</Link>
        </div>
        <div className={style.nav_wrap}>
          <div className={style.nav}>
            {navitems.map(({ text, href }: { text: string; href: string }) => (
              <div
                key={href}
                className={`${style.navitem} ${leaf === href ? style.active : ''}`}
                onClick={() => router.push(root + href)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className={style.content}>{content}</div>
      </div>
    </>
  );
}
