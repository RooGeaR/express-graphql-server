import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import Comment from './comment';
import models from '../../models';

export default new GraphQLObjectType({
    name: 'user',
    description: 'User that comments',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "user's ID",
                resolve (user) {
                    return user.id;
                }
            },
            first_name: {
                type: GraphQLString,
                description: "user's first name",
                resolve (user) {
                    return user.first_name;
                }
            },
            last_name: {
                type: GraphQLString,
                description: "user's last name",
                resolve (user) {
                    return user.last_name;
                }
            },
            comments: {
                type: new GraphQLList(Comment),
                description: "user's comments",
                resolve(user) {
                    if (user.hasOwnProperty('comments')) {
                      return user.comments;
                    }
                    return models.comments.findAll({ where: { user_id: user.id } });
                }
            },
            last_updated: {
                type: GraphQLString,
                description: "user's comments",
                resolve(user) {
                    return models.comments.findAll({
                        limit: 1,
                        where: {
                            user_id: user.id
                        },
                        order: [ [ 'created_at', 'DESC' ]]
                    }).then(function(entries){
                        return entries[0].created_at;
                    });
                        
                }
            }
        };
    }
});
