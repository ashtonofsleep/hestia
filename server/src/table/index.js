import model from './table.model';
import types from './table.types';
import mutations from './table.mutations';
import resolvers from './table.resolvers';

export default { model, types: [ types, mutations ], resolvers };