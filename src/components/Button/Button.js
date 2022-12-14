import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ loadMore, children }) => {
  return (
    <ButtonLoadMore type="button" onClick={loadMore}>
      {children}
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
