import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Oval
        height={40}
        width={40}
        color="#6a6b6a"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#adb3af"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
