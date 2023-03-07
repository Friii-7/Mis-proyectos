import _ from 'lodash';

const data = [
  {
    username: 'fri',
    role: 'admin',
  },
  {
    username: 'xxx',
    role: 'seller',
  },
  {
    username: 'god',
    role: 'seller',
  },
  {
    username: 'alx',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
