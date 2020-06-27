var hasCycle = function(head) {
    if(!head) return false;
    let fasterCycle = head,
    slowerCycle = head;
    
    while (fasterCycle && fasterCycle.next) {
        fasterCycle = fasterCycle.next.next;
        slowerCycle = slowerCycle.next;
        if (slowerCycle === fasterCycle) return true;
    }
    return false;
};