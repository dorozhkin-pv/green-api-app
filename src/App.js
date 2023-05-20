import ReactModal from 'react-modal';
import { Chat } from './components/Chat/Chat';
import { CredentialsForm } from './components/EnterForms/CredentialsForm';
import { useMainContext } from './MainContext';
import { ChatIdForm } from './components/EnterForms/ChatIdForm';

ReactModal.setAppElement('#modal');

function App() {
  const { credentials, chatId } = useMainContext();

  const isModal = !credentials || !chatId;

  return (
    <>
      <ReactModal isOpen={isModal} contentLabel="Minimal Modal Example">
        <CredentialsForm />
        <ChatIdForm />
      </ReactModal>

      {!isModal && <Chat />}
    </>
  );
}

export default App;
