import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import User from './user.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'comment',
    description: 'Comment',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "comment ID",
                resolve (comment) {
                    return comment.id;
                }
            },
            user: {
                type: User,
                description: "User create comments",
                resolve (comment) {
                    if (comment.hasOwnProperty('user')) {
                      return comment.user;
                    }
                    return models.users.findById(comment.user_id);
                }
            },
            content: {
                type: GraphQLString,
                description: "text",
                resolve (comment) {
                    return comment.content;
                }
            }
        };
    }
});
