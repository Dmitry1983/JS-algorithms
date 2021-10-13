const data = {
  result: "ok",
  merge: {
    count: 0,
  },
  events: [
    {
      client_id: 1796005,
      event: "Свадьба",
      event_date: {
        date: "2021-08-08 00:00:00.000000",
        timezone_type: 3,
        timezone: "Europe/Moscow",
      },
    },
    {
      client_id: 2173891,
      event: "Свадьба",
      event_date: {
        date: "2021-04-05 00:00:00.000000",
        timezone_type: 3,
        timezone: "Europe/Moscow",
      },
    },
  ],
  can_create: {
    Подборка: "https://v.gorko.ru/compilation/2173891/create",
    Встреча: "https://v.gorko.ru/meeting/2173891/create",
    Уточнение: "https://v.gorko.ru/verification/2173891/create",
    Подарок: "https://v.gorko.ru/client/2173891/makeGift/",
    "Добавить событие": "https://v.gorko.ru/client/2173891/addEvent/",
  },
  can_open: {
    Подборка: "https://v.gorko.ru/compilation/2173891/create",
    Встреча: "https://v.gorko.ru/meeting/2173891/create",
    Уточнение: "https://v.gorko.ru/verification/2173891/create",
  },
  recordings: [
    {
      recording_phone: "+79168683941",
      recording_date: {
        date: "2021-03-16 17:29:07.000000",
        timezone_type: 3,
        timezone: "Europe/Moscow",
      },
      recording_city: "Москва",
      recording_company: "Милан",
      recording_channel: "Горько",
      recording_id: 5338085,
      recording_duration: 166,
    },
    {
      recording_phone: "+79168683941",
      recording_date: {
        date: "2021-03-16 17:25:21.000000",
        timezone_type: 3,
        timezone: "Europe/Moscow",
      },
      recording_city: "Москва",
      recording_company: "Артемида Холл",
      recording_channel: "Горько",
      recording_id: 5338053,
      recording_duration: 177,
    },
  ],
};

const dataFetch = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
    setTimeout(() => {
      rejected("error!!! > response");
    }, 3000);
  });
};

dataFetch()
  .then((response) => {
    return response;
  })
  .catch((response) => console.log(response));

const fetching = () => dataFetch();

const fetch = async () => {
  let data = await fetching();
  console.log(data);
};
