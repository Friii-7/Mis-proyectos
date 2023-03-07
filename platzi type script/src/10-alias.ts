(() => {
  type UserID = string | number;

  let userId: UserID;

  // LIteral types
  type sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSaize: sizes;
  shirtSaize = 'M';
  shirtSaize = 'L';
  // shirtSaize = 's'
  shirtSaize = 'XL';

  function greeting(userId: UserID, size: sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1111, 'L');
  greeting('1111', 'XL');
})();
