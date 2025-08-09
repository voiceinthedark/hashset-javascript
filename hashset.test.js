import Hashset from "./hashset.js";

describe('Hashset Tests', () => {

  describe('Constructor tests...', ()=> {
    const hashset = new Hashset();
    
    test('Hashset has a capacity of 16', () => {
      expect(hashset.capacity).toBe(16)
    })
    test('hashset has a load factor of 0.8', () => {
      expect(hashset.load_factor).toBe(0.8)
    })
  })

  describe('Add method tests', () => {
    let hashset;
    beforeEach(() => {
      hashset = new Hashset();
      hashset.add('apple')
    })
    test('adding an item increses the size', () => {
      expect(hashset.size).toBe(1)
    });

    test('adding the same item does nothing, size remain the same', () => {
      hashset.add('apple')
      expect(hashset.size).toBe(1)
    })
    test('Adding multiple items keep increasing the size', () => {
      hashset.add('banana')
      hashset.add('mango')
      hashset.add('pear')
      expect(hashset.size).toBe(4)
    })

    test('going over the load factor increases the capacity', () => {
      expect(hashset.capacity).toBe(16)
      hashset.add('banana')
      hashset.add('mango')
      hashset.add('pear')
      hashset.add('grape')
      hashset.add('grapefruit')
      hashset.add('avocado')
      hashset.add('berries')
      hashset.add('blackberries')
      hashset.add('lyche')
      hashset.add('citrus')
      hashset.add('peaches')
      hashset.add('pomegrenate')
      hashset.add('dragonfruit')
      expect(hashset.capacity).toBe(32)
      expect(hashset.size).toBe(14)
    })

  })
  
})
