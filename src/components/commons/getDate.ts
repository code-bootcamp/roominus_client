export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
};

export const getTime = (value: any) => {
  const date = new Date(value);
  const hh = date.getHours();
  return `${hh}시`;
};

export const getDateTime = (value: any) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  const hour = date.getHours();
  const min = date.getMinutes();

  return year === yyyy && month === mm && day === dd
    ? `${hour}시 ${min}분`
    : `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
  // return `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
};

export const getBeforeTime = (value: any) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const nHour = today.getHours();
  const nMin = today.getMinutes();

  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  const hour = date.getHours();
  const min = date.getMinutes();

  return year === yyyy && month === mm && day === dd
    ? `${nHour - hour}시간 ${nMin - min}분 전`
    : `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
  // return `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
};
