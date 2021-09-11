import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: [
        join(process.cwd(), 'src/schemas/**/*.graphql')
      ],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
    })
  ]
})
export class AppModule {}
