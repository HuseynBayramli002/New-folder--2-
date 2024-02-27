import PropTypes from 'prop-types'
import { Progress } from "flowbite-react";



const LineProgresBar = function Component(props) {
  const { progressBar } = props;
  return (
    <div className="flex flex-col gap-2 w-[490px] h-5">
      <Progress progress={ progressBar } size="lg" color="teal" />
    </div>
  );
};
export default LineProgresBar;


LineProgresBar.propTypes = {
  progressBar: PropTypes.number.isRequired,
};