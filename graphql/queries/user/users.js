import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

import models from '../../../models/index.js';
import User from '../../types/user.js';

export default {
  type: new GraphQLList(User),
  args: {
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
    return models.users.findAll({where: args, include: [ { model: models.comments } ], offset, limit});
  }
};
