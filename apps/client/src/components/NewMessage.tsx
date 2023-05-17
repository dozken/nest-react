import { useRef } from 'react';

const NewMessage: React.FC<{ onSendMessage: (message: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredMessage = inputRef.current!.value;
    if (enteredMessage.trim().length === 0) {
      return;
    }

    props.onSendMessage(enteredMessage);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Message</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Send</button>
    </form>
  );
};

export default NewMessage;
