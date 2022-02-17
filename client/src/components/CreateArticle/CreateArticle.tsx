import React, { useState } from 'react';
import { articleType } from '../../types';

type CreateArticleProps = {
  handleArticleSubmit: (article: articleType) => void;
};

const articleInitialState = { title: '', content: '' };

const CreateArticle: React.FC<CreateArticleProps> = ({
  handleArticleSubmit,
}) => {
  const [article, setArticle] = useState(articleInitialState);

  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await handleArticleSubmit(article);
    setArticle(articleInitialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/5 mx-auto p-8 border flex flex-col gap-4"
    >
      <h3>What do you want to say?</h3>
      <textarea
        name="content"
        value={article.content}
        onChange={handleOnChange}
        className="border w-full h-56 p-4"
      />
      <div className="flex justify-center">
        <button className="border bg-gray-200 text-white rounded-xl py-1 px-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateArticle;
