export type handleData = (data: any) => void;

export type handleError = (error: any) => void;

export type user = {
  username: string;
  password: string;
};

export type accessToken = { access_token: string };

export type NavLinksType = (
  className: string,
  onClick?: () => void
) => JSX.Element[];
