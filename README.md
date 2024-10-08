npm install react-hook-lib
example use the NPM 
import { useForm, useApi } from 'react-hook-lib';

const App = () => {
  const { values, handleChange, handleSubmit } = useForm({ name: '' });
  const { data, loading } = useApi('https://jsonplaceholder.typicode.com/posts');// endpoint of api http request

  return (
    <div>
      <h1>React Hooks Example</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={values.name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
