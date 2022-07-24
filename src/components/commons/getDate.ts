export const getDate = (value: string | number | Date) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}.${String(mm).padStart(2, "0")}.${dd}`;
};

export const getToday = (value: string | number | Date) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
};

export const getTime = (value: string | number | Date) => {
  const date = new Date(value);
  const hh = date.getHours();
  return `${hh}시`;
};

export const getDateTime = (value: string | number | Date) => {
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

export const getBeforeTime = (value: string | number | Date) => {
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

export const getDateBefore = (value: string | number | Date) => {
  const today = new Date().toString();

  const timeValue = new Date(value).toUTCString();

  const betweenTime = Math.floor(
    (Date.parse(today) - (Date.parse(timeValue) - 32399000)) / 1000 / 60
  );

  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);

  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};
