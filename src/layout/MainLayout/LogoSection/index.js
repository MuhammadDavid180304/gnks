import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { menuOpenRedux } from '../../../redux';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch(menuOpenRedux('dashboard'))} component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
