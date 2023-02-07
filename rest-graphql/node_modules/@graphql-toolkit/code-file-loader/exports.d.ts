import { DocumentNode, GraphQLSchema } from 'graphql';
export declare function pickExportFromModule({ module, filepath }: {
    module: any;
    filepath: string;
}): Promise<GraphQLSchema | DocumentNode>;
export declare function pickExportFromModuleSync({ module, filepath }: {
    module: any;
    filepath: string;
}): GraphQLSchema | DocumentNode;
