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
    [userData: string]: any;
  };
  alt_description: string;
  likes: number;
  created_at: string;
  [field: string]: any;
};

export type Item = Partial<ArrayItem>;
