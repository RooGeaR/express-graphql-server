import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'commentinput',
  fields: () => ({
      user_id: { type: GraphQLID },
      content: { type: GraphQLString },
      created_at: { type: GraphQLString }
  })
});
