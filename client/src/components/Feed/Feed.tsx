import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api/requests';
import CreateArticle from '../CreateArticle/CreateArticle';
import { postArticle } from '../../utils/api/requests';
import { useAuth } from '../Auth/AuthContext';

type articleType = {
  id?: number;
  title: string;
  content: string;
};

const Feed = () => {
  const [articles, setArticles] = useState<articleType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  useEffect(() => {
    const hData = (d: articleType[]) => setArticles([...d]);
    const hError = (e: string) => console.error(e);
    if (!loading) getArticles(hData, hError);
  }, [loading]);

  const handleArticleSubmit = (article: articleType) => {
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
        .sort((a: articleType, b: articleType) =>
          a.id && b.id ? b.id - a.id : 0
        )
        .map((article) => {
          return (
            <div
              key={article.id}
              className="bg-green-50 shadow text-green-700 p-10 px-10 w-4/5 mx-auto"
            >
              <div className="flex justify-between">
                <p>
                  <span className="text-indigo-300 text-xl">
                    {article.title}
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-sm">
                <p>{article.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Feed;
