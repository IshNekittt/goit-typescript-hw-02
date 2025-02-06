// exported type has all fields not required

type ArrayItem = {
  id: number;
  urls: {
    small: string;
    regular: string;
    [field: string]: string;
  };
  user: {
    username: string;
    [userData: string]: unknown;
  };
  alt_description: string;
  description: string;
  likes: number;
  created_at: string;
  [field: string]: unknown;
};

export type Item = Partial<ArrayItem>;
