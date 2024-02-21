import { Progress } from "flowbite-react";
const LineProgresBar = function Component() {
  return (
    <div className="flex flex-col gap-2 w-[490px] h-5">
      <Progress progress={60} size="lg" color="teal" />
    </div>
  );
};
export default LineProgresBar;
