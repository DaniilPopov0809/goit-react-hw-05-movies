import { Button} from './BurgerButton.styled';
import { RxHamburgerMenu } from 'react-icons/rx';
import PropTypes from 'prop-types';

 const BurgerButton = ({getStatusModal, isOpenModal}) => {
    const handleClick = () => {
        getStatusModal(!isOpenModal);
    }
    return (
        <Button type='button' onClick= {handleClick}><RxHamburgerMenu size={30}/></Button>
    )
};

BurgerButton.propTypes = {
    getStatusModal: PropTypes.func,
    isOpenModal: PropTypes.bool,
  };

  export default BurgerButton;