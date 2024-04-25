import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  let currentQueue = new Queue([start]); // [i, t, h]
  let seen = new Set([start]); // [r, i, t, h]

  if (start.value === sought.value) return 0;

  let count = 0; //1

  while (!currentQueue.isEmpty()) {
    let currentNode = currentQueue.dequeue(); // i
    seen.add(currentNode);

    if (currentNode.value === sought.value) {
      return count + 1;
    }

    for (let neighbor of currentNode.adjacent) {
      if (!seen.has(neighbor)) {
        currentQueue.enqueue(neighbor);          // [i, t, h]
        seen.add(neighbor);                     // [i, t, h]
        count++;                               // 1
        console.log("here");
      }
    }
    count--;
  }

  return Infinity;
}

export { fewestEdges };
