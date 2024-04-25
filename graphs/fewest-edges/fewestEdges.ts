import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  // let count = 0;

  // typing this + making [start, count] an array
  // [start, count] to link count to the current node
  let currentQueue = new Queue<[UGraphNodeStr, number]>([[start, 0]]); // [i, t, h]
  let seen = new Set([start]); // [r, i, t, h]

  if (start.value === sought.value) return 0;

  while (!currentQueue.isEmpty()) {
    let [currentNode, count] = currentQueue.dequeue(); // i

    seen.add(currentNode);

    if (currentNode.value === sought.value) {
      console.log("currentNode", currentNode.value)
      console.log("final count", count);
      return count;
    }

    console.log("counting here")

    for (let neighbor of currentNode.adjacent) {
      if (!seen.has(neighbor)) {

        console.log("neighbor", neighbor.value, "count: ", count)

        // count++ increments after using the current value
        currentQueue.enqueue([neighbor, count+1])
      }
    }
  }

  return Infinity;
}

export { fewestEdges };
