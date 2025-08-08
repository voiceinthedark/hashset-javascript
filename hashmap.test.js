import Hashmap from './hashmap.js';

beforeAll(() => {
  const hashmap = new Hashmap();
})

describe('Hashmap tests', () => {
  describe('Constructor setup', () => {
    test('capacity', () => {
      const hashmap = new Hashmap();
      expect(hashmap.capacity).toBe(16);
    })
  });
  describe('testing the set methods', () => {
    test('set an item and increase the size of the hashmap', () => {
      const hashmap = new Hashmap()
      hashmap.set('jim', 22);
      expect(hashmap.size).toBe(1);
    });
    test('setting more than 1 item', () => {
      const hashmap = new Hashmap()
      hashmap.set('jim', 44)
      hashmap.set('kim', 2)
      hashmap.set('sony', 'camera')
      expect(hashmap.size).toBe(3);
    })
    test('setting the same key twice', () => {
      const hashmap = new Hashmap()
      hashmap.set('jum', 33)
      hashmap.set('kim', 33)
      hashmap.set('kim', 66)
      expect(hashmap.size).toBe(2)
    });
  });

  describe('testing the get method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('get the correct value by key', () => {
      expect(hashmap.get('tom')).toBe('library')
      expect(hashmap.get('jum')).toBe(37)
      expect(hashmap.get('fat')).toBe('tren')
    });

    test('a non existant key should return null', () => {
      expect(hashmap.get('god')).toBeNull()
    });
  });

  describe('testing the has method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('return true when key exists in the hashmap', () => {
      expect(hashmap.has('kim')).toBeTruthy()
      expect(hashmap.has('fat')).toBeTruthy()
    });
    test('return false when key does not exist in the hashmap', () => {
      expect(hashmap.has('sam')).toBeFalsy()
      expect(hashmap.has('eee')).toBeFalsy()
    });
    test('return false on empty input', () => {
      expect(hashmap.has('')).toBeFalsy()
    });
  });

  describe('testing the remove method', () => {

    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('removing a key that exists should return true', () => {
      expect(hashmap.remove('kim')).toBeTruthy()
      expect(hashmap.size).toBe(4)
    })
    test('removing a key that does not exist should return false', () => {
      expect(hashmap.remove('sss')).toBeFalsy()
      expect(hashmap.size).toBe(4)
    });
    test('removing an empty input', () => {
      expect(hashmap.remove()).toBeFalsy()
    })
  });
  describe('testing the length method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)

    const emptymap = new Hashmap();
    test('a list of 5 keys should return a length of 5', () => {
      expect(hashmap.length()).toBe(5)
    });
    test('An empty hashmap should return 0 length', () => {
      expect(emptymap.length()).toBe(0)
    });
  });
  describe('testing the clear method', () => {
    let hashmap;

    beforeEach(() => {
      hashmap = new Hashmap();
      hashmap.set('kim', 45);
      hashmap.set('jum', 37);
      hashmap.set('tom', 'library');
      hashmap.set('fat', 'tren');
      hashmap.set('Mik', 39);
    });

    test('full list should return a list of 5', () => {
      expect(hashmap.length()).toBe(5)
    });
    test('After clearing the hashmap should return a length of 0', () => {
      expect(hashmap.length()).toBe(5)
      hashmap.clear()
      expect(hashmap.length()).toBe(0)
      expect(hashmap.has('kim')).toBeFalsy()
    });
  });
  describe('testing the keys method', () => {
    let hashmap;
    beforeEach(() => {
      hashmap = new Hashmap();
      hashmap.set('kim', 45);
      hashmap.set('jum', 37);
      hashmap.set('tom', 'library');
      hashmap.set('fat', 'tren');
      hashmap.set('Mik', 39);
    });
    test('a list of 5 items should return an array of size 5', () => {
      expect(hashmap.keys().length).toBe(5)
    })
    test('keys array should contain the kim key', () => {
      expect(hashmap.keys().findIndex((c) => c === 'kim')).toBeGreaterThanOrEqual(0)
    })
  })

  describe('testing the values method', () => {
    let hashmap;
    beforeEach(() => {
      hashmap = new Hashmap();
      hashmap.set('kim', 45);
      hashmap.set('jum', 37);
      hashmap.set('tom', 'library');
      hashmap.set('fat', 'tren');
      hashmap.set('Mik', 39);
    });
    test('A list of 5 items should return an array of 5', () => {
      expect(hashmap.values().length).toBe(5)
    });
    test('values array should contain the value "library"', () => {
      expect(hashmap.values().findIndex(n => n === 'library')).toBeGreaterThanOrEqual(0)
    });
    test('A non existant value should return a negative number', () => {
      expect(hashmap.values().findIndex(n => n === 1)).toBeLessThan(0)
    });
  });
  describe('testing the entries method', () => {

    let hashmap;
    beforeEach(() => {
      hashmap = new Hashmap();
      hashmap.set('kim', 45);
      hashmap.set('jum', 37);
      hashmap.set('tom', 'library');
      hashmap.set('fat', 'tren');
      hashmap.set('Mik', 39);
    });
    test('entries should have a length of 5', () => {
      expect(hashmap.entries()).toHaveLength(5)
    });
    test('entries items must be arrays', () => {
      expect(hashmap.entries()[0]).toBeInstanceOf(Array)
    });
    test('entries sub items arrays, should have a length of 2', () => {
      expect(hashmap.entries()[0]).toHaveLength(2);
    });
  })

  describe('testing capacity growth', () => {

    let hmap;
    beforeEach(() => {
      hmap = new Hashmap(16, 0.75)

      hmap.set('apple', 'red')
      hmap.set('banana', 'yellow')
      hmap.set('carrot', 'orange')
      hmap.set('dog', 'brown')
      hmap.set('elephant', 'gray')
      hmap.set('frog', 'green')
      hmap.set('grape', 'purple')
      hmap.set('hat', 'black')
      hmap.set('ice cream', 'white')
      hmap.set('jacket', 'blue')
      hmap.set('kite', 'pink')
      hmap.set('lion', 'golden')
    });

    test('size before growth', () => {
      expect(hmap.size).toBe(12)
    });
    test('capacity before growth', () => {
      expect(hmap.capacity).toBe(16);
    });
    test('setting an extra element will double the capacity but size will be added by 1', () => {
      hmap.set('moon', 'silver');
      expect(hmap.capacity).toBe(32)
      expect(hmap.size).toBe(13)
      expect(hmap.get('moon')).toBe('silver')
    })
    test('All elements remain after growth', () => {
      hmap.set('moon', 'silver');
      expect(hmap.get('hat')).toBe('black')
      expect(hmap.get('moon')).toBe('silver')
    })
  });
});
