This React component uses the `useEffect` hook to fetch data. However, it only fetches data once when the component mounts and doesn't re-fetch when certain props change, such as `searchQuery`.  This leads to the component displaying stale data.

```javascript
function MyComponent({ searchQuery }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/data?q=${searchQuery}`);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []); // Only runs on mount

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```