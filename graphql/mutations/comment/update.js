import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import models from '../../../models/';
import Comment from '../../types/comment';

export default {
  type: Comment,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (source, args) {
    return models.comments
      .findById(args.id)
      .then((comment) => {
        return comment.update({ content: args.content });
      });
  }
};
