import models from '../../../models';
import User from '../../types/user';
import UserInput from '../../inputs/user';

export default {
    type: User,
    args: {
        user: {
            type: UserInput
        }
    },
    resolve (source, args) {
        return models.users.build({
            first_name: args.user.first_name,
            last_name: args.user.last_name,
            created_at: args.user.created_at,
        }).save().then(function(newuser) {
            const comments = args.user.comments || [];
            comments.forEach((comment) => {
              models.comments.create({
                user_id: newuser.id,
                content: comment.content,
                created_at: comment.created_at
              });
            });

            return models.users.findById(newuser.id);
        });
    }
};
