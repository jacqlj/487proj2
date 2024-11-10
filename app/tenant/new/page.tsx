import Button from '@/app/components/Button';
import style from './page.module.css';

export default function NewRequest() {
  return (
    <div className={style.container}>
      <form method="post" className={style.grid}>
        <label htmlFor="loc">Location</label>
        <input type="text" id="loc" name="loc" placeholder="e.g. Kitchen" />
        <label htmlFor="prob">Problem</label>
        <textarea id="prob" name="loc" placeholder="e.g. Garbage disposal doesn't work" />
        <span>Image</span>
        <span>
          <Button icon={<i className="bi bi-file-earmark-plus"></i>} text="Add image" />
        </span>
      </form>
      <Button icon={<i className="bi bi-send"></i>} text="Submit" />
    </div>
  );
}
