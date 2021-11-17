import model from './page.model';
import types from './page.types';
import mutations from './page.mutations';
import resolvers from './page.resolvers';

export default { model, types: [ types, mutations ], resolvers };