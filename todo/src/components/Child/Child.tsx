type ChildProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Child = ({ onChange }: ChildProps) => {
  return (
    <div>
      <h6>Child</h6>
      <input type="text" placeholder="Type something..." onChange={onChange} />
      <p>Type something in the input field above.</p>
    </div>
  );
};
