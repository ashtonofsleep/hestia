import model from './room.model';
import types from './room.types';
import mutations from './room.mutations';
import resolvers from './room.resolvers';

export default { model, types: [ types, mutations ], resolvers };