import PropTypes from 'prop-types';
import FadeLoader from 'react-spinners/FadeLoader';

export const Loader = ({ boolean }) => {
  return (
    <FadeLoader
      color="#f99019"
      loading={boolean}
      height="13"
      width="6"
      margin="5"
      radius="5"
      size={180}
      aria-label="Loading Spinner"
      cssOverride={{ margin: 'auto', marginLeft: '40px' }}
      speedMultiplier="1"
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
