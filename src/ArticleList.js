import React from 'react';

export default function ArticleList(props) {
  const { articles } = props;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.objectID}>
          <a href={article.url}>
            {article.title}（作者：{article.author}）
          </a>
        </li>
      ))}
    </ul>
  );
}
