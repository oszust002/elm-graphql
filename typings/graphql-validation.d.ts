/// <reference path="./graphql-types.d.ts" />                                                                                             
/// <reference path="./graphql-language.d.ts" />                                

declare module "graphql/validation" {                                            
  import { GraphQLOutputType, GraphQLSchema, GraphQLType, GraphQLInputType } from 'graphql/type';
  import { Type, Node, Document } from 'graphql/language';   

  class Source {
    body: string;
    name: string;
    constructor(body: string, name?: string);
  }

  class GraphQLError extends Error {
    constructor(
      message: string,
      nodes?: Array<any>,
      stack?: string,
      source?: Source,
      positions?: Array<number>
   );
  }

  export function validate(
    schema: GraphQLSchema,
    ast: Document,
    rules?: Array<any>
  ): Array<GraphQLError>;
}
