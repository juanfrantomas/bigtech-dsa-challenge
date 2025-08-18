# Arrays

## Definition
An array is a data structure that can hold multiple values of the same type. It is a collection of elements identified by index or key.

## Characteristics
- **Fixed Size**: The size of an array is determined at the time of creation and cannot be changed.
- **Homogeneous Elements**: All elements in an array must be of the same type.
- **Random Access**: Elements can be accessed directly using their index. O(1)
- **Insertion / deletion**: at the end. O(1)
- **Insertion / deletion**: at the beginning or middle. O(n)

## Common Operations
1. **Traversal**: Accessing each element in the array.
2. **Insertion**: Adding an element at a specific index.
3. **Deletion**: Removing an element from a specific index.
4. **Searching**: Finding an element in the array:  
   1. Linear search = O(n)
   2. Binary search on sorted array = O(log n)