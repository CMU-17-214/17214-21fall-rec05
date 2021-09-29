import { SortedIntList } from "./hidden/SortedIntListLibrary";


/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
class InheritanceSortedIntList extends SortedIntList {
    // the number of attempted element insertions
    private totalAdded:number = 0
    
    add(num: number): boolean {
        let result: boolean = super.add(num)
        if (result) this.totalAdded++
        return result
    }
    
    /**
     * Gets the total number of attempted int insertions to the list since it
     * was created.
     *
     * @return total number of integers added to the list.
     */
     getTotalAdded(): number
    {
        return this.totalAdded;
    }

}

export {InheritanceSortedIntList}