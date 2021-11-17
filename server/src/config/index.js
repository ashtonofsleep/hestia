import model from './config.model';
import types from './config.types';
import mutations from './config.mutations';
import resolvers from './config.resolvers';

export default { model, types: [ types, mutations ], resolvers };