export interface FieldDef {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

export type User = {
  id: number;
  username: string;
  password?: string;
  image: string;
};

export type AuthState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
