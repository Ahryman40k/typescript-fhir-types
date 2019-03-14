
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ElementDefinition} from './RTTI_ElementDefinition';




        const mandatory = t.type({
           element: t.array(RTTI_ElementDefinition)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_StructureDefinition_Snapshot:any = t.intersection([mandatory, partial]);
        

export type IStructureDefinition_Snapshot = t.TypeOf<typeof RTTI_StructureDefinition_Snapshot>;
        
        