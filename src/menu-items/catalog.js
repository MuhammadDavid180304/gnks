// assets
import { CiShop } from 'react-icons/ci';
// constant
const icons = { CiShop };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const catalog = {
  id: 'catalog',
  title: 'Catalog',
  type: 'group',
  children: [
    {
      id: 'product',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.CiShop,
      breadcrumbs: false
    }
  ]
};

export default catalog;
