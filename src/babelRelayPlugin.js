import { getbabelRelayPlugin } from 'babel-relay-plugin';
import schema from ('../../schema.json');

export default getbabelRelayPlugin(schema.data);
