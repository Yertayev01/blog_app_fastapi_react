import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api/requests';
import CreateArticle from '../CreateArticle/CreateArticle';
import { postArticle } from '../../utils/api/requests';
import { useAuth } from '../Auth/AuthContext';
import Article from './Article';
import { articleType, newArticleType } from '../../types';

const Feed = () => {
  const [articles, setArticles] = useState<articleType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  useEffect(() => {
    const hData = (d: articleType[]) => setArticles([...d]);
    const hError = (e: string) => console.error(e);
    if (!loading) getArticles(hData, hError);
  }, [loading]);

  const handleArticleSubmit = (article: newArticleType) => {
    setLoading(true);
    postArticle(
      auth.user.id,
      article,
      () => setLoading(false),
      () => null
    );
  };

  return (
    <div className="mt-10 pt-20 p-5 lg:p-20 border flex flex-col gap-8">
      <CreateArticle handleArticleSubmit={handleArticleSubmit} />

      {articles
        .sort((a: articleType, b: articleType) => b.id - a.id)
        .map((article) => {
          return <Article key={article.id} article={article} />;
        })}
    </div>
  );
};

export default Feed;
