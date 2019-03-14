
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum Linkage_ItemTypeKind {
                source = 'source',
alternate = 'alternate',
historical = 'historical'
            }
const Linkage_ItemTypeKindKeys = t.keyof({
                [Linkage_ItemTypeKind.source]: null,
[Linkage_ItemTypeKind.alternate]: null,
[Linkage_ItemTypeKind.historical]: null
            });


        const mandatory = t.type({
           resource: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Linkage_ItemTypeKindKeys,
_type: RTTI_Element
        });
        

        export var RTTI_Linkage_Item:any = t.intersection([mandatory, partial]);
        

export type ILinkage_Item = t.TypeOf<typeof RTTI_Linkage_Item>;
        
        