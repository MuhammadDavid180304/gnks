// assets
import { FaUsersCog } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
// constant
const icons = {
  FaUsersCog,
  FaUsers,
  FaUserGear
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const masterData = {
  id: 'masterData',
  title: 'Master Data',
  type: 'group',
  children: [
    {
      id: 'kortek',
      title: 'Kor. Teknisi',
      type: 'item',
      url: '/kortek',
      icon: icons.FaUsersCog,
      breadcrumbs: false
    },
    {
      id: 'teknisi',
      title: 'Teknisi',
      type: 'item',
      url: '/teknisi',
      icon: icons.FaUserGear,
      breadcrumbs: false
    },
    {
      id: 'customers',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.FaUsers,
      breadcrumbs: false
    }
  ]
};

export default masterData;
