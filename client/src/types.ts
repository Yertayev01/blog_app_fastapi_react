export type onSuccess = (data: any) => void;

export type onFailure = (error: any) => void;

export type userType = {
  username: string;
  password: string;
};

export type articleType = {
  id: number;
  title: string;
  content: string;
  likes: { user_id: number }[];
  author: number;
};

export type newArticleType = {
  title: string;
  content: string;
};

export type accessToken = { access_token: string };

export type NavLinksType = (
  className: string,
  onClick?: () => void
) => JSX.Element[];
