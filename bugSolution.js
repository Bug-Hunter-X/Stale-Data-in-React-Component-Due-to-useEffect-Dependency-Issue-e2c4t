The solution involves adding the `searchQuery` prop to the dependency array of `useEffect`. This will make the effect rerun whenever the `searchQuery` prop changes, ensuring that the component always displays the latest data.

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
  }, [searchQuery]); // Now re-runs when searchQuery changes

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```