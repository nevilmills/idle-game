import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  __typename?: 'Character';
  coins: Scalars['Int'];
  id: Scalars['Float'];
  skills: Array<Character_Skill>;
};

export type Character_Skill = {
  __typename?: 'Character_Skill';
  characterId: Scalars['Float'];
  level: Scalars['Float'];
  skillId: Scalars['Float'];
  xp: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addSkill: Scalars['Boolean'];
  giveExp: Character_Skill;
  login: User;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationAddSkillArgs = {
  name: Scalars['String'];
};


export type MutationGiveExpArgs = {
  skillId: Scalars['Int'];
  value: Scalars['Float'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  character: Character;
  characters: Array<Character>;
  getSkillId: Skill;
  me: User;
  user: User;
  users: Array<User>;
};


export type QueryCharacterArgs = {
  id: Scalars['Float'];
};


export type QueryGetSkillIdArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type Skill = {
  __typename?: 'Skill';
  character_skills: Array<Character_Skill>;
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type GiveExpMutationVariables = Exact<{
  skillId: Scalars['Int'];
  value: Scalars['Float'];
}>;


export type GiveExpMutation = { __typename?: 'Mutation', giveExp: { __typename?: 'Character_Skill', level: number, xp: number } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, username: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, username: string } };

export type GetSkillIdQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSkillIdQuery = { __typename?: 'Query', getSkillId: { __typename?: 'Skill', id: number, name: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, username: string } };


export const GiveExpDocument = gql`
    mutation GiveExp($skillId: Int!, $value: Float!) {
  giveExp(skillId: $skillId, value: $value) {
    level
    xp
  }
}
    `;

export function useGiveExpMutation() {
  return Urql.useMutation<GiveExpMutation, GiveExpMutationVariables>(GiveExpDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    username
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    id
    username
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetSkillIdDocument = gql`
    query GetSkillId($name: String!) {
  getSkillId(name: $name) {
    id
    name
  }
}
    `;

export function useGetSkillIdQuery(options: Omit<Urql.UseQueryArgs<GetSkillIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSkillIdQuery>({ query: GetSkillIdDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};