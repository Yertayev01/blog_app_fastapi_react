import React, { useEffect, useState } from 'react';
import { articleType } from '../../types';
import Markdown from '../Common/Markdown';
import { useAuth } from '../Auth/AuthContext';
import { likeArticle } from '../../utils/api/requests';

const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const Article = ({ article }: { article: articleType }) => {
  const { user } = useAuth();

  const toggleLike = () => {
    likeArticle(
      article.id,
      (d) => console.log(d),
      (e) => console.log(e)
    );
  };

  return (
    <div className="w-4/5 mx-auto p-8 pt-16 border relative flex flex-col">
      <div className="border absolute top-0 left-0 w-full h-16">
        <div className="absolute top-3 right-3">
          <span className="flex gap-1 items-center text-sm text-gray-500">
            <span
              className={`cursor-pointer ${
                article.likes.map((a) => a.user_id).includes(user.id)
                  ? 'text-red-400'
                  : ''
              }`}
              onClick={toggleLike}
            >
              {heartIcon}
            </span>
            {article.likes.length}
          </span>
        </div>
      </div>
      <Markdown markdown={article.content} />
    </div>
  );
};

export default Article;
