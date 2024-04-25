import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {

  let current = new Queue([start])
  let seen = new Set([start])

  let count = 0;

  while (!current.isEmpty()) {
    let node = current.dequeue();
    if (node.value === sought.value) return count

    console.log("all nodes?", node.adjacent)
    let row = [node.adjacent]

    if (row.has(sought)) {
      return count + 1;
    }

    else {
      // add to seen
      for (let node of row) {
        seen.add(node.value);
      }

      // get length of row
      let length = row.length

      //

      for (let node of row) {
        row.add(node.adjacent)
      }
      // dequeue all of them and then
      // put the adjacent properties into a new row
      // check that row
      // count ++;
    }

    for (let n of row) {
      console.log("n", n)

      // if (!seen.has(n)) {

        // group the row
        // go through the whole thing
        // if its there then add 1 and return
        // if not there then next adjacents

        // count ++;

        // console.log('n: ', n.value)
        // console.log('sought: ', sought.value)

        // if (n.value === sought.value) return count

        // seen.add(n)
        // current.enqueue(n);
        // console.log('n: ', n.value)
        // console.log('count: ', count)
      // }
    }
  }

  return Infinity;
}

export { fewestEdges };
