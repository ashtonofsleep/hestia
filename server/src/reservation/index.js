import model from './reservation.model';
import types from './reservation.types';
import mutations from './reservation.mutations';
import resolvers from './reservation.resolvers';

export default { model, types: [ types, mutations ], resolvers };