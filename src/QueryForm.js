import React, { useState } from 'react';

function QueryForm(props) {
  const [query, setQuery] = useState('react');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.handleSubmit(query);
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <input type="submit" value="查询" />
    </form>
  );
}

export default QueryForm;
