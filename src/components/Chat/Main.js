import { useEffect } from 'react';
import { apiDeleteNotification, apiReceiveNotification } from '../../api';
import { Message } from '../Message/Message';
import { useMainContext } from '../../MainContext';

export const Main = () => {
  const { messages, setMessages, credentials } = useMainContext();

  useEffect(() => {
    const getUpdates = async () => {
      const response = await apiReceiveNotification({ credentials });

      if (!response) return;

      switch (response.body.typeWebhook) {
        // исходящие
        case 'outgoingAPIMessageReceived':
          // добавляю сразу при отправке
          break;

        // входящие
        case 'outgoingMessageReceived':
          if (response.body.messageData.typeMessage === 'textMessage') {
            setMessages((prev) => {
              return [
                ...prev,
                {
                  id: response.body.idMessage,
                  title: response.body.messageData.textMessageData.textMessage,
                  isOutgoing: false,
                },
              ];
            });
          }

          break;

        // обновление статуса
        case 'outgoingMessageStatus':
          setMessages((prev) => {
            const found = prev.find((m) => m.id === response.body.idMessage);
            if (found) {
              found.isDelivered = true;
              return [...prev];
            }

            return prev;
          });

          break;

        default:
          break;
      }

      await apiDeleteNotification({ credentials, receiptId: response.receiptId });
    };

    const intervalId = setInterval(getUpdates, 5500);

    return () => clearInterval(intervalId);
  }, [credentials, setMessages]);

  return (
    <>
      {messages.length
        ? messages.map((message) => <Message key={message.id} message={message} />)
        : 'Тут пока пусто'}
    </>
  );
};
