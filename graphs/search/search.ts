import { UGraphNodeStr, UGraphStr } from "../graph/graph";
import { Stack } from "../common/stack";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [start.value],
  visited = new Set([start])
): string[] {
  for (const n of start.adjacent) {
    if (!visited.has(n)) {
      visited.add(n);
      result.push(n.value);
      rDfs(n, result, visited);
    }
  }

  return result;
}

/** Return array of values, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  let toVisit = new Stack([start]);
  let seen = new Set([start]);
  let finalVisited = [];

  while (!toVisit.isEmpty()) {
    let node = toVisit.pop();
    finalVisited.push(node.value);

    for (const n of node.adjacent) {
      if (!seen.has(n)) {
        toVisit.push(n);
        seen.add(n);
      }
    }
  }

  return finalVisited;
}

/** Return array of values, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  let toVisit = new Queue([start])
  let seen = new Set([start])
  let finalVisited = [];

  while(!toVisit.isEmpty()) {
    let node = toVisit.dequeue();
    finalVisited.push(node.value);

    for (const n of node.adjacent) {
      if (!seen.has(n)) {
        toVisit.enqueue(n);
        seen.add(n);
      }
    }
  }

  return finalVisited;
}

export { iDfs, rDfs, bfs };
