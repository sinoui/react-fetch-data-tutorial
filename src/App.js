import React from 'react';
import ArticleList from './ArticleList';
import QueryForm from './QueryForm';
import LoadingIndicator from './LoadingIndicator';
import useDataApi from './useDataApi';

function App() {
  const { data, isLoading, isError, doFetch } = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=react',
    {
      hits: [],
    },
  );

  const handleSubmit = (query) => {
    doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
  };

  return (
    <div className="container">
      <QueryForm handleSubmit={handleSubmit} />
      {isError && <div>加载数据失败</div>}
      {isLoading ? <LoadingIndicator /> : <ArticleList articles={data.hits} />}
    </div>
  );
}

export default App;
