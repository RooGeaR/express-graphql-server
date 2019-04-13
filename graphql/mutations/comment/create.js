import models from '../../../models';
import Comment from '../../types/comment';
import CommentInput from '../../inputs/comment';

export default {
    type: Comment,
    args: {
        comment: {
            type: CommentInput
        }
    },
    resolve (source, args) {
        return models.comments.build({
            user_id: args.comment.user_id,
            content: args.comment.content,
            created_at: args.comment.created_at,
        }).save().then(function(newcomment) {
            return models.comments.findByPk(newcomment.id);
        });
    }
};