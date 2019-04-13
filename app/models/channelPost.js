import { Model } from 'radiks';

export default class ChannelPost extends Model {
  static className = 'ChannelPost';

  static schema = {
    description: {
      type: String,
      decrypted: true,
    },
    authorName: {
      type: String,
      decrypted: true,
    },
    userGroupId: {
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
