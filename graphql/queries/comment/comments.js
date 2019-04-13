import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

import models from '../../../models';
import Comment from '../../types/comment';

export default {
  type: new GraphQLList(Comment),
  args: {
    user_id: {
      type: GraphQLID,
    },
    first: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
  },
  resolve(root, args) {
    const offset = args.offset || 0;
    const limit = args.first || 10;
    delete args.offset;
    delete args.first;
    return models.comments.findAll({where: args, include: [ { model: models.users } ], offset, limit });
  }
};
