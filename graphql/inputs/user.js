import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import CommentInput from './comment';

export default new GraphQLInputObjectType({
  name: 'userinput',
  fields: () => ({
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      avatar: { type: GraphQLString },
      created_at: { type: GraphQLString },
      comments: { type: new GraphQLList(CommentInput) }
  })
});
