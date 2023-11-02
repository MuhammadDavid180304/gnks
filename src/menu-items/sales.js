// assets
import { AiOutlineShoppingCart } from 'react-icons/ai';
// constant
const icons = { AiOutlineShoppingCart };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const sales = {
  id: 'sales',
  title: 'Sales',
  type: 'group',
  children: [
    {
      id: 'product',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.AiOutlineShoppingCart,
      breadcrumbs: false
    }
  ]
};

export default sales;
