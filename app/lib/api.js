import Channel from '../models/channel';

const apiServer = process.env.RADIKS_API_URL;

/**
 * Returns a list of all the channels
 * @returns {Promise<void>}
 */
export const fetchChannels = async () => {
  const channels = await Channel.fetchList(
    {
      radiksType: 'UserGroup',
    },
    { decrypt: false },
  );
  return channels;
};

/**
 *  Given the id of the channel, returns the channel's posts
 * @param name
 * @returns {Promise<any>}
 */
export const fetchChannelPosts = async id => {
  const channel = await Channel.findById(id, { decrypt: false });
  const url = `${apiServer}/api/posts/${id}`;
  const response = await fetch(url);
  const channelPosts = await response.json();
  return {
    channelAttrs: channel.attrs,
    channel,
    channelPosts,
    channelHeaderImage: channel.typefaceImageUrl,
  };
};

/**
 * Provides channel analytics
 * @param id
 * @returns {Promise<any>}
 */
export const fetchChannelAnalytics = async id => {
  const url = `${apiServer}/api/analytics/${id}`;
  const response = await fetch(url);
  const channelAnalytics = await response.json();
  return channelAnalytics;
};
