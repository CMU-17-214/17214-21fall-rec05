"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InheritanceSortedIntList = void 0;
const SortedIntListLibrary_1 = require("./hidden/SortedIntListLibrary");
/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
class InheritanceSortedIntList extends SortedIntListLibrary_1.SortedIntList {
    constructor() {
        super(...arguments);
        // the number of attempted element insertions
        this.totalAdded = 0;
    }
    add(num) {
        let result = super.add(num);
        if (result)
            this.totalAdded++;
        return result;
    }
    /**
     * Gets the total number of attempted int insertions to the list since it
     * was created.
     *
     * @return total number of integers added to the list.
     */
    getTotalAdded() {
        return this.totalAdded;
    }
}
exports.InheritanceSortedIntList = InheritanceSortedIntList;
//# sourceMappingURL=InheritanceSortedIntList.js.map