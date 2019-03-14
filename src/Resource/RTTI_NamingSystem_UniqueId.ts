
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum NamingSystem_UniqueIdTypeKind {
                oid = 'oid',
uuid = 'uuid',
uri = 'uri',
other = 'other'
            }
const NamingSystem_UniqueIdTypeKindKeys = t.keyof({
                [NamingSystem_UniqueIdTypeKind.oid]: null,
[NamingSystem_UniqueIdTypeKind.uuid]: null,
[NamingSystem_UniqueIdTypeKind.uri]: null,
[NamingSystem_UniqueIdTypeKind.other]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: NamingSystem_UniqueIdTypeKindKeys,
_type: RTTI_Element,
value: t.string,
_value: RTTI_Element,
preferred: t.boolean,
_preferred: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_NamingSystem_UniqueId:any = t.intersection([mandatory, partial]);
        

export type INamingSystem_UniqueId = t.TypeOf<typeof RTTI_NamingSystem_UniqueId>;
        
        