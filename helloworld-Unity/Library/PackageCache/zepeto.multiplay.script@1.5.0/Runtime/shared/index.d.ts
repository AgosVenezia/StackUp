/// <reference path="../index.d.ts"/>

declare module 'ZEPETO.Multiplay' {
    import { State } from "ZEPETO.Multiplay.Schema";
    class Room extends Room$1<State> {
        
    }
}

declare module "types/MapSchema" {
    import { MapSchema$1 } from "ZEPETO.Multiplay";
    export class MapSchema<T> extends MapSchema$1<T> {

    }
}

declare module "types/ArraySchema" {
    import { ArraySchema$1 } from "ZEPETO.Multiplay";
    export class ArraySchema<T> extends ArraySchema$1<T> {

    }
}

declare module "types/Schema" {
    import { SchemaBase } from "ZEPETO.Multiplay";
    export class Schema extends SchemaBase {

    }
}

declare module "@colyseus/schema" {
    import { MapSchema } from "types/MapSchema";
    export { MapSchema };
    import { ArraySchema } from "types/ArraySchema";
    export { ArraySchema };
    import { Schema } from "types/Schema";
    export { Schema };
}

declare module "ZEPETO.Multiplay.Schema" {
    import { Schema } from "@colyseus/schema";
    interface State extends Schema {

    }
}
