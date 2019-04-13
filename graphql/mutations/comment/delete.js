import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import models from '../../../models';
import Comment from '../../types/comment';

export default {
  type: Comment,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve (source, args) {
    return models.comments
      .findByPk(args.id)
      .then((comment) => {
        return comment.destroy({ force: true });
      });
  }
};
