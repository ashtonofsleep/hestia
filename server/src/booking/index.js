import model from './booking.model';
import types from './booking.types';
import mutations from './booking.mutations';
import resolvers from './booking.resolvers';

export default { model, types: [ types, mutations ], resolvers };