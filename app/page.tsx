'use client';

import Button from './components/Button';
import style from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('pw') === '') return alert('Invalid credentials!');
    switch (data.get('uname')) {
      case 'yuki__mfy':
        return router.push('/tenant/active');
      case 'bbldrjr':
        return router.push('/maintenance/active');
      case 'admin':
        return router.push('/manager/tenants');
      default:
        return alert('Invalid credentials!');
    }
  };

  return (
    <form method="post" className={style.form} onSubmit={login}>
      <label htmlFor="uname">Username</label>
      <div>
        <input type="text" id="uname" name="uname" placeholder="example123" />
      </div>
      <label htmlFor="pw">Password</label>
      <div>
        <input type="password" id="pw" name="pw" placeholder="•••••••••••" />
      </div>
      <Button type="submit" text="Login" />
    </form>
  );
}
