import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
  },
})

export const schema = makeSchema({
  types: [User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema/graphql',
    typegen: __dirname + '/../generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/cli',
        alias: 'prisma'
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})