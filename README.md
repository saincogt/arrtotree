# Array to Tree

### Setup

- Install dependencies: Run `npm install` in your terminal.
- Read the task details while installation finishes.

### Task
Your objective is to build a function that transforms an array of objects into a structured tree representation.
1. Complete the partially written function in `index.js`.
2. You are encouraged to use `lodash`, but its fine if you don't want to.
3. Pass all 100 test cases with `npm run test`.

**Input**:

The function will accept an array of objects, each representing a node in the tree structure. Each object will have the following properties:

- `id`: A unique string identifier for the node.
- `parentId`: A string identifier of the parent node. A node with `parentId` equal to its own `id` is considered a root node.
- there could be other properties.

**Output**:

The function should return an array of tree objects. Each tree object should have the following properties:

- `id`: The same as the original node's `id`.
- `parentId`: The same as the original node's `parentId`.
- `children`: An array containing child tree objects, sorted by their `id` (if any).
- other properties: the same as the original node's properties other than `id` and `parentId`.


**Rules**:

- Identify Root Nodes: Any element whose `parentId` is equal to its own `id` is a root node and belongs directly in the output array.
- Parent-Child Relationships: If element A's `id` matches element B's `parentId`, then B is a child of A and should be added to A's `children` array.
- Multiple Children: A node can have multiple children, sorted by their `id` in ascending order. If there is no children, the node should *NOT* have a `children` property.
- Unique IDs: No element will have the same `id` as another element but different `parentId`.


### Example

Input:

```js
const input = [
  { id: '1', parentId: '1', value: 1 },
  { id: '2', parentId: '1', value: 2 },
  { id: '3', parentId: '2', value: 3 },
  { id: '4', parentId: '2', value: 4 },
  { id: '5', parentId: '1', value: 5 },
];
```

Output:

```js
[
  {
    id: '1',
    parentId: '1',
    value: 1,
    children: [
      {
        id: '2',
        parentId: '1',
        value: 2,
        children: [
          { id: '3', parentId: '2', value: 3 },
          { id: '4', parentId: '2', value: 4 },
        ],
      },
      { id: '5', parentId: '1', value: 5},
    ],
  },
]
```

Visual Representation:

```
1 ── 2 ── 3
│    └─── 4
└─── 5
```
