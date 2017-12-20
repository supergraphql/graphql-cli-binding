export enum PostOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostWhereInput {
  AND?: Array<PostWhereInput>
  OR?: Array<PostWhereInput>
  id?: ID
  id_not?: ID
  id_in?: Array<ID>
  id_not_in?: Array<ID>
  id_lt?: ID
  id_lte?: ID
  id_gt?: ID
  id_gte?: ID
  id_contains?: ID
  id_not_contains?: ID
  id_starts_with?: ID
  id_not_starts_with?: ID
  id_ends_with?: ID
  id_not_ends_with?: ID
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: Array<String>
  title_not_in?: Array<String>
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: Array<String>
  text_not_in?: Array<String>
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface PostCreateInput {
  isPublished: Boolean
  title: String
  text: String
}

export interface PostWhereUniqueInput {
  id?: ID
}

export interface Node {
  id: ID
}

export interface PostEdge {
  node: Post
  cursor: String
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PostConnection {
  pageInfo: PageInfo
  edges?: Array<PostEdge>
}

export interface Post extends Node {
  id: ID
  isPublished: Boolean
  title: String
  text: String
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID = string | number

export interface Schema {
  query: Query
  mutation: Mutation
}

export interface Query {
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info: any) => Array<Post>
  post: (args: { where: PostWhereUniqueInput }, info: any) => Post | null
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info: any) => PostConnection
  node: (args: { id: ID }, info: any) => Node | null
}

export interface Mutation {
  createPost: (args: { data: PostCreateInput }, info: any) => Post
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info: any) => Post | null
  deletePost: (args: { where: PostWhereUniqueInput }, info: any) => Post | null
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info: any) => Post
  resetData: (args: {}, info: any) => Boolean | null
}

export const binding: Schema = {
  query: {
    posts: (args, info): Array<Post> => { return /* TODO: Get actual implementation here from graphql-binding */ },
    post: (args, info): Post | null => { return /* TODO: Get actual implementation here from graphql-binding */ },
    postsConnection: (args, info): PostConnection => { return /* TODO: Get actual implementation here from graphql-binding */ },
    node: (args, info): Node | null => { return /* TODO: Get actual implementation here from graphql-binding */ }
  },
  mutation: {
    createPost: (args, info): Post => { return /* TODO: Get actual implementation here from graphql-binding */ },
    updatePost: (args, info): Post | null => { return /* TODO: Get actual implementation here from graphql-binding */ },
    deletePost: (args, info): Post | null => { return /* TODO: Get actual implementation here from graphql-binding */ },
    upsertPost: (args, info): Post => { return /* TODO: Get actual implementation here from graphql-binding */ },
    resetData: (args, info): Boolean | null => { return /* TODO: Get actual implementation here from graphql-binding */ }
  }
}