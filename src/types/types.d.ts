//商品信息
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number; //库存
  image_url: string;
  category_id: number;
}
//分页信息
interface Page<T> {
  data: Array<T>;
  totalItems: number; //总记录数
  totalPages: number; //总页数
  currentPage: number; //当前页码
  itemsPerPage: number; //每页显示的条数
}
type CartItem = Product & { count: number };

type NoticeStatus = 'success' | 'warning';
interface Notice {
  msg: string;
  id: number;
  status: NoticeStatus;
  duration?: number;
}
//添加用户接口
interface User {
  id: number;
  username: string;
  email: string;
  avatar_url: string;
}

interface LoginUser {
  token?: string;
  user?: User;
}
