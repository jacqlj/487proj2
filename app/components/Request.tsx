import Button from './Button';
import { RequestData } from '../interfaces';
import style from './Request.module.css';

export default function Request({
  data,
  userType,
}: {
  data: RequestData;
  userType: 'tenant' | 'maintenance' | 'manager';
}) {
  const { id, unit, location, problem, createdAt, status } = data;
  const statusSpan =
    status === 'pending' ? (
      <span className={style.pending}>
        <i className="bi bi-clock"></i>&nbsp;Pending
      </span>
    ) : (
      <span className={style.completed}>
        <i className="bi bi-check-circle-fill"></i>&nbsp;Completed
      </span>
    );

  return (
    <div className={style.container}>
      <div className={style.grid}>
        <span>ID</span>
        <span>{id}</span>
        <span>Unit #</span>
        <span>{unit}</span>
        <span>Location</span>
        <span>{location}</span>
        <span>Problem</span>
        <span>{problem}</span>
        <span>Created at</span>
        <span>{createdAt.toUTCString()}</span>
        {typeof data.image !== 'undefined' ? (
          <>
            <span>Image</span>
            <span>
              <Button icon={<i className="bi bi-file-earmark-image"></i>} text="View" />
            </span>
          </>
        ) : (
          <></>
        )}
        <span>Status</span>
        {statusSpan}
        {userType === 'maintenance' && status === 'pending' ? (
          <>
            <span></span>
            <span>
              <Button icon={<i className="bi bi-check2-circle"></i>} text="Mark as completed" />
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
