import { join } from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
// import graphQLLetConfig from '@/.graphql-let.yml'
import resolvers from '@/graphql/resolvers'

const loadedFiles = loadFilesSync(join(process.cwd(), './**/*.graphqls'))
const typeDefs = mergeTypeDefs(loadedFiles)

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
