import model from './post.model';
import types from './post.types';
import mutations from './post.mutations';
import resolvers from './post.resolvers';

export default { model, types: [ types, mutations ], resolvers };