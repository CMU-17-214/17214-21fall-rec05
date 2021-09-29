/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

import { SortedIntList } from "./hidden/SortedIntListLibrary"
import { IntegerList } from "./IntegerList"

// HINT: Take a look at the UML diagram to see what DelegationSortedIntList
//       should implement.
class DelegationSortedIntList implements IntegerList {
    // the number of attempted element insertions
    #totalAdded: number = 0
    #delegate: SortedIntList = new SortedIntList()
    
    add(num: number): boolean {
        let result: boolean = this.#delegate.add(num);
        if(result) this.#totalAdded++;
        return result
    }
    addAll(list: IntegerList): boolean {
        let result: boolean = this.#delegate.addAll(list)
        if (result) this.#totalAdded = list.size()
        return result
    }
    get(index: number): number {
        return this.#delegate.get(index)
    }
    remove(num: number): boolean {
        throw new Error("Method not implemented.");
    }
    removeAll(list: IntegerList): boolean {
        throw new Error("Method not implemented.");
    }
    size(): number {
        return this.#delegate.size()
    }

    /**
     * Gets the total number of attempted int insertions to the list since it.
     * was created.
     *
     * @return total number of integers added to the list.
     */
    getTotalAdded(): number
    {
        return this.#totalAdded
    }

}

export { DelegationSortedIntList }