import { Model } from 'radiks';

export default class ChannelPostReply extends Model {
  static className = 'ChannelPostReply';

  static schema = {
    description: {
      type: String,
      decrypted: true,
    },
    authorName: {
      type: String,
      decrypted: true,
    },
    PostId: {
      type: String,
      decrypted: true,
    },
    timestamp: {
      type: Date,
      default: Date.now(),
    },
  };

  static findById(id, options = { decrypt: true }) {
    return this.findOne(
      {
        id,
      },
      options,
    );
  }
}
