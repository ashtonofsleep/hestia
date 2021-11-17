import model from './user.model';
import types from './user.types';
import mutations from './user.mutations';
import resolvers from './user.resolvers';

export default { model, types: [ types, mutations ], resolvers };