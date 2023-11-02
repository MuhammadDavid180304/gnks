// assets
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
// constant
const icons = { LiaMapMarkedAltSolid };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const maps = {
  id: 'maps',
  title: 'Maps',
  option: 'Temukan Pengguna',
  type: 'group',
  children: [
    {
      id: 'maps',
      title: 'Maps',
      type: 'item',
      url: '/maps',
      icon: icons.LiaMapMarkedAltSolid,
      breadcrumbs: false
    }
  ]
};

export default maps;
