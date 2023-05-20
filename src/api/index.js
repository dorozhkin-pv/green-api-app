export const apiSendMessage = async ({ credentials, chatId, message }) => {
  const { idInstance, apiTokenInstance } = credentials;
  let response = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        chatId: `${chatId}@c.us`,
        message,
      }),
    },
  );

  return await response.json();
};

export const apiReceiveNotification = async ({ credentials }) => {
  const { idInstance, apiTokenInstance } = credentials;
  let response = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
  );

  return await response.json();
};

export const apiDeleteNotification = async ({ credentials, receiptId }) => {
  const { idInstance, apiTokenInstance } = credentials;
  let response = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}
      `,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  );

  return await response.json();
};

export const apiGetStateInstance = async ({ credentials: { idInstance, apiTokenInstance } }) => {
  let response = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
  );

  return await response.json();
};
