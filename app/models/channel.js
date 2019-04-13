import { UserGroup } from 'radiks';

export default class Channel extends UserGroup {
  static schema = {
    ...UserGroup.schema,
    name: {
      type: String,
      decrypted: true,
    },
    description: {
      type: String,
      decrypted: true,
    },
    typefaceImageUrl: {
      type: String,
      decrypted: true,
    },
  };

  static findById(id, options = { decrypt: true }) {
    return this.findOne(
      {
        _id: id,
      },
      options,
    );
  }
}
