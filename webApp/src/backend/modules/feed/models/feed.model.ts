import * as mongoose from "mongoose";
//import { DataAccess } from '../../../core/dataAccess/dataAccess';

interface PostCommentModel extends mongoose.Document {
    from: string;
    comment: string;
    created: Date;
}

interface PostImageModel extends mongoose.Document {

}

interface PostLikeModel extends mongoose.Document {
    emotion: string; /* Like, Wow, Love, Lol */
    userId: string;
}

interface FeedModel extends mongoose.Document {
    userName:string;
    from: string;
    to: string;
    text: string;
    comments: PostCommentModel[];
    images: PostImageModel[];
    isExternal: boolean;
    url: string;
    likes: PostLikeModel[];
    created: Date;
}

class FeedSchema {

    static get schema() {
        var schema = new mongoose.Schema({
            userName:{
                type:String
            },
            from: {
                type: String,
                required: true
            },
            to: {
                type: String
            },
            text: {
                type: String
            },
            comments: {
                type: Object
            },
            images: {
                type: Object
            },
            isExternal: {
                type: Boolean
            },
            url: {
                type: String
            },
            likes: {
                type: Object
            },
            created: {
                type: Date,
                default: Date.now
            }
        });

        return schema;
    }
}
//var schema = DataAccess.mongooseConnection.model<UserModel>("Users", UserSchema.schema);
var schema;
// added below check as so that we can use the same models on client side
if (mongoose.model)
    schema = mongoose.model<FeedModel>("Feeds", FeedSchema.schema);

export { FeedModel as IFeedModel }

export { PostCommentModel as IPostCommentModel }
export { PostImageModel as IPostImageModel }
export { PostLikeModel as IPostLikeModel }
export { schema as FeedSchema }