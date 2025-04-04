import { model, Schema } from "mongoose";

const chatSchema = new Schema(
    {
        chat_name: {
            type: String,
            trim: true,
        },
        is_group_chat: {
            type: Boolean,
            default: false,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        group_admin: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Chat = model("Chat", chatSchema);

export default Chat;
