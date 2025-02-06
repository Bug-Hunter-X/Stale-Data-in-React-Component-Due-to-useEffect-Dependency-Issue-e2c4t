# Stale Data in React Component

This repository demonstrates a common React bug involving stale data due to an incorrectly used `useEffect` hook. The component fetches data but fails to update when relevant props change.

## Bug Description
The `MyComponent` fetches data based on a `searchQuery` prop. However, the `useEffect` hook lacks the `searchQuery` in its dependency array, causing it to only run once on mount.  Subsequent changes to `searchQuery` do not trigger a data refetch, leading to stale data being displayed.

## Solution
The solution includes adding `searchQuery` to the dependency array of `useEffect`. This ensures that the data fetching function is called whenever `searchQuery` changes.