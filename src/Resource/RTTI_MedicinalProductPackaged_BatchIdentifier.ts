
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';




        const mandatory = t.type({
           outerPackaging: RTTI_Identifier
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
immediatePackaging: RTTI_Identifier
        });
        

        export var RTTI_MedicinalProductPackaged_BatchIdentifier:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPackaged_BatchIdentifier = t.TypeOf<typeof RTTI_MedicinalProductPackaged_BatchIdentifier>;
        
        