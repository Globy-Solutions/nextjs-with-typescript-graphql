import axios from 'axios';

import { Product } from '@/models';
import { loadAbort } from '@/utils/load-abort-axios';

export const products = () => {
    const controller = loadAbort();
    return {
      call: axios.get<Product[]>(`http://localhost:3005/api/shop/products`, { signal: controller.signal }),
      controller
    };
  };