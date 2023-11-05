import { count } from "./Counter";

const RefreshBtn = () => {
  console.log(count.value);
  return (
    <div>
      <p>{count.value}</p>
    </div>
  );
};

export default RefreshBtn;
